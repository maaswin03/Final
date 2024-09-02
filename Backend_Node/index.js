require('dotenv').config()

const express = require("express");
const { MongoClient, ServerApiVersion } = require("mongodb");
const multer = require('multer');
const path = require('path');
const { GoogleGenerativeAI } = require("@google/generative-ai");
const fs = require("fs");
const cors = require("cors");

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY);

const app = express();
const port = 5100;

app.use(cors());
app.use(express.json());

const uri = process.env.MONGODB;
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

// app.post("/disease", async (req, res) => {
//   const model = genAI.getGenerativeModel({ model: "gemini-pro" });
//   const prompt = "Tell about the plant disease, both its non-diseased and diseased states, and how to solve it";

//   try {
//     const result = await model.generateContent(prompt);
//     const response = await result.response;
//     const text = await response.text();

//     console.log(text);
//     res.json({ text });
//   } catch (error) {
//     res.status(500).json({ message: "An error occurred", error: error.message });
//   }
// });

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


const storage = multer.diskStorage({
  destination: './uploads/',
  filename: (req, file, cb) => {
      cb(null, 'image1' + path.extname(file.originalname));
  }
});

const upload = multer({
  storage: storage,
  limits: { fileSize: 7000000 },
  fileFilter: (req, file, cb) => {
      checkFileType(file, cb);
  }
}).single('image');

function checkFileType(file, cb) {
  const filetypes = /jpeg|jpg|png|gif/;
  const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
  const mimetype = filetypes.test(file.mimetype);

  if (extname && mimetype) {
      return cb(null, true);
  } else {
      cb('Error: Images Only!');
  }
}

app.post('/api/upload', async (req, res) => {
  upload(req, res, async (err) => {
      if (err) {
          return res.status(400).json({ message: err });
      } 
      if (req.file == undefined) {
          return res.status(400).json({ message: 'No file selected!' });
      } 

      try {
          const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

          const prompt = "Analyze the image to determine if it contains a leaf. If it does, identify any diseases present on the leaf and provide steps to cure them. If the image does not contain a leaf, indicate that it is not a leaf image.";
          const image = {
              inlineData: {
                  data: Buffer.from(fs.readFileSync(`./uploads/${req.file.filename}`)).toString("base64"),
                  mimeType: "image/jpeg",
              },
          };
      
          const result = await model.generateContent([prompt, image]);
          const text = await result.response.text();
          return res.json({ text });
      } catch (error) {
          console.error('Error processing image with AI model:', error);
          return res.status(500).json({ message: 'An error occurred while processing the image.' });
      }
  });
});



app.use('/uploads', express.static('uploads'));

const PORT = process.env.PORT || 5100;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));



