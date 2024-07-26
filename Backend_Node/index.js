const express = require("express");
const { MongoClient, ServerApiVersion } = require("mongodb");
const { GoogleGenerativeAI } = require("@google/generative-ai");
const cors = require("cors");

const genAI = new GoogleGenerativeAI("AIzaSyDxXD0Is4oj0TLsTz056ylvmFIT0UZcV0I");

const app = express();
const port = 5100;

app.use(cors());
app.use(express.json());

const uri = "mongodb+srv://aswin2005:Aswin2005@project.rddo8i4.mongodb.net/?retryWrites=true&w=majority&appName=PROJECT";
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

let collection;

async function run() {
  try {
    await client.connect();
    await client.db("PROJECT").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
    collection = client.db("PROJECT").collection("Recieved_data");
  } catch (error) {
    console.error("Failed to connect to MongoDB", error);
    process.exit(1);
  }
}
run();

app.post("/generate", async (req, res) => {
  const model = genAI.getGenerativeModel({ model: "gemini-pro" });
  const prompt = "Recommend crops based on Indian conditions";

  try {
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = await response.text();

    console.log(text);
    res.json({ text });
  } catch (error) {
    res.status(500).json({ message: "An error occurred", error: error.message });
  }
});

app.post("/chatbot", async (req, res) => {
  const model = genAI.getGenerativeModel({ model: "gemini-pro" });
  const prompt = req.body.prompt;

  try {
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = await response.text();

    console.log(text);
    res.json({ text });
  } catch (error) {
    res.status(500).json({ message: "An error occurred", error: error.message });
  }
});

app.post("/disease", async (req, res) => {
  const model = genAI.getGenerativeModel({ model: "gemini-pro" });
  const prompt = "Tell about the plant disease, both its non-diseased and diseased states, and how to solve it";

  try {
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = await response.text();

    console.log(text);
    res.json({ text });
  } catch (error) {
    res.status(500).json({ message: "An error occurred", error: error.message });
  }
});

app.post("/cropai", async (req, res) => {
  const device_id = "ab01";

  try {
    const data = await collection.findOne({ device_id: device_id });

    if (data) {
      const model = genAI.getGenerativeModel({ model: "gemini-pro" });

      const prompt = `
        Temperature: ${data.current_temperature}
        Humidity: ${data.current_humidity}
        Light Intensity: ${data.current_light_intensity}
        Soil Moisture: ${data.current_soil_moisture}
        Wind Speed: ${data.current_wind_speed}
        Time: ${data.current_time}
        Nitrogen: ${data.current_nitrogen}
        Phosphorus: ${data.current_phosphorus}
        Potassium: ${data.current_potassium}
        Water Level: ${data.current_water_level}
        Based on these conditions, recommend suitable crops and mention how to grow the crop and the time period to grow the crop.
      `;

      try {
        const result = await model.generateContent(prompt);
        const response = await result.response;
        const text = await response.text();

        console.log(text);
        res.json({ text });
      } catch (error) {
        res.status(500).json({ message: "An error occurred while generating content", error: error.message });
      }
    } else {
      res.status(404).json({ message: "Data not found for this device_id" });
    }
  } catch (error) {
    res.status(500).json({ message: "An error occurred", error: error.message });
  }
});


app.post("/cropfertilizer", async (req, res) => {
  const device_id = "ab01";

  try {
    const data = await collection.findOne({ device_id: device_id });

    if (data) {
      const model = genAI.getGenerativeModel({ model: "gemini-pro" });

      const prompt = `
        Temperature: ${data.current_temperature}
        Humidity: ${data.current_humidity}
        Light Intensity: ${data.current_light_intensity}
        Soil Moisture: ${data.current_soil_moisture}
        Nitrogen: ${data.current_nitrogen}
        Phosphorus: ${data.current_phosphorus}
        Potassium: ${data.current_potassium}
        ${req.body.prompt}
        Based on these conditions, recommend suitable crop fertilizer and tell how to use it.
      `;

      try {
        const result = await model.generateContent(prompt);
        const response = await result.response;
        const text = await response.text();

        console.log(text);
        res.json({ text });
      } catch (error) {
        res.status(500).json({ message: "An error occurred while generating content", error: error.message });
      }
    } else {
      res.status(404).json({ message: "Data not found for this device_id" });
    }
  } catch (error) {
    res.status(500).json({ message: "An error occurred", error: error.message });
  }
});


app.post("/pest", async (req, res) => {
  const model = genAI.getGenerativeModel({ model: "gemini-pro" });
  const prompt = "Tell about pest control in detail in india in paragraph";

  try {
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = await response.text();

    console.log(text);
    res.json({ text });
  } catch (error) {
    res.status(500).json({ message: "An error occurred", error: error.message });
  }
});


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
