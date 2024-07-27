import React, { useState } from "react";
import axios from "axios";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import "../CropDoctor/CropDoctor.css";

function CropDoctor() {
  const [cropName, setCropName] = useState("");
  const [price, setPrice] = useState("");
  const [fertilizerType, setFertilizerType] = useState("Natural");
  const [diseaseResponse, setDiseaseResponse] = useState("");
  const [cleanedDiseaseResponse, setCleanedDiseaseResponse] = useState("");
  const [cleanedFertilizerResponse, setCleanedFertilizerResponse] = useState("");


  const handleDiseaseSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append("file", e.target[0].files[0]);

      const res = await axios.post("https://final-04do.onrender.com/disease", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      setDiseaseResponse(res.data.text);

      const cleanedRes = res.data.text
        .split("\n")
        .map((paragraph) => paragraph.replace(/\*/g, ""))
        .join("\n");
      setCleanedDiseaseResponse(cleanedRes);
    } catch (error) {
      console.error("Error:", error);
    }
  };


  const handleFertilizerSubmit = async (e) => {
    e.preventDefault();

    const formattedResponse = `Crop Name: ${cropName}, Desired Price: ${price}, Fertilizer Type: ${fertilizerType}`;

    try {
      const res = await axios.post("https://final-04do.onrender.com/cropfertilizer", {
        prompt: formattedResponse,
      });
      const responseText = res.data.text;

      const cleanedResponse = responseText.replace(/\*/g, "");

      setCleanedFertilizerResponse(cleanedResponse);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div>
      <Navbar />

      <div className="crop6">
        <div className="crop7">
          <h1>Crop Disease Detection</h1>
          <p>Get to know about your crop disease</p>
        </div>
      </div>

      <div className="crop21">
        <form onSubmit={handleDiseaseSubmit}>
          <div className="crop22">
            <input type="file" required />
          </div>
          <button type="submit" style={{ marginBottom: "3%" }}>
          know about your crop disease
          </button>
        </form>
        <div className="crop22" style={{ whiteSpace: 'pre-line' }}>
          {cleanedDiseaseResponse ? (
            <p>{cleanedDiseaseResponse}</p>
          ) : (
            <p>
              Please upload a file and click the button above to get your crop
              disease recommendation
            </p>
          )}
        </div>
      </div>

      <div className="crop6">
        <div className="crop7">
          <h1>Fertilizer Recommendation</h1>
          <p>Get to know about your fertilizer</p>
        </div>
      </div>

      <div className="crop21" style={{marginBottom:'10%'}}>
        <form onSubmit={handleFertilizerSubmit}>
          <div className="crop40">
            <div className="crop41">
              <p>Crop Name</p>
              <input
                type="text"
                placeholder="Enter Crop Name"
                value={cropName}
                onChange={(e) => setCropName(e.target.value)}
                required
              />
            </div>
            <div className="crop41">
              <p>Desired Price</p>
              <input
                type="text"
                placeholder="Enter your desired price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="crop40">
            <div className="crop41">
              <p>Fertilizer Type</p>
              <select
                name="fertilizerType"
                id="fertilizerType"
                value={fertilizerType}
                onChange={(e) => setFertilizerType(e.target.value)}
                style={{ marginBottom: "0%" }}
              >
                <option value="Natural">Natural</option>
                <option value="Hybrid">Hybrid</option>
              </select>
            </div>
          </div>

          <button type="submit" style={{ marginBottom: "3%" }}>
            Get your Fertilizer Recommendation
          </button>
        </form>
        <div className="crop22" style={{ whiteSpace: 'pre-line' }}>
          {cleanedFertilizerResponse ? (
            <p>{cleanedFertilizerResponse}</p>
          ) : (
            <p>
              Please fill out the form above and click the button to get your
              fertilizer recommendation. All recommendations are based on collected real-time data.
            </p>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default CropDoctor;
