import React, { useState, useEffect } from "react";
import "../Fieldbot/Fieldbot.css";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import image1 from "../Image/feildbot1.avif";
import { Line } from "react-chartjs-2";
import image2 from "../Image/irri1.jpg";
import image3 from "../Image/irri2.jpeg";
import { styled } from "@mui/material/styles";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

function Fieldbot() {
  const [sensorData, setSensorData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://final-1-jkbd.onrender.com/api/fieldbot", {
          method: "GET",
        });
        const data = await response.json();
        setSensorData(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  const AntSwitch = styled(Switch)(({ theme }) => ({
    width: 28,
    height: 16,
    padding: 0,
    display: "flex",
    "&:active": {
      "& .MuiSwitch-thumb": {
        width: 15,
      },
      "& .MuiSwitch-switchBase.Mui-checked": {
        transform: "translateX(9px)",
      },
    },
    "& .MuiSwitch-switchBase": {
      padding: 2,
      "&.Mui-checked": {
        transform: "translateX(12px)",
        color: "#fff",
        "& + .MuiSwitch-track": {
          opacity: 1,
          backgroundColor:
            theme.palette.mode === "dark" ? "#177ddc" : "#1890ff",
        },
      },
    },
    "& .MuiSwitch-thumb": {
      boxShadow: "0 2px 4px 0 rgb(0 35 11 / 20%)",
      width: 12,
      height: 12,
      borderRadius: 6,
      transition: theme.transitions.create(["width"], {
        duration: 200,
      }),
    },
    "& .MuiSwitch-track": {
      borderRadius: 16 / 2,
      opacity: 1,
      backgroundColor:
        theme.palette.mode === "dark"
          ? "rgba(255,255,255,.35)"
          : "rgba(0,0,0,.25)",
      boxSizing: "border-box",
    },
  }));

  const soil = Math.round((Number(sensorData.soil) / 1023) * 100);
  const soil1 = Math.round((Number(sensorData.soil1) / 1023) * 100);
  const soil2 = Math.round((Number(sensorData.soil2) / 1023) * 100);
  const soil3 = Math.round((Number(sensorData.soil3) / 1023) * 100);
  const soil4 = Math.round((Number(sensorData.soil4) / 1023) * 100);
  const soil5 = Math.round((Number(sensorData.soil5) / 1023) * 100);
  const soil6 = Math.round((Number(sensorData.soil6) / 1023) * 100);

  const chartData = {
    labels: [
      sensorData.time,
      sensorData.time1,
      sensorData.time2,
      sensorData.time3,
      sensorData.time4,
      sensorData.time5,
      sensorData.time6,
    ],
    datasets: [
      {
        label: "Soil Moisture (%)",
        data: [soil, soil1, soil2, soil3, soil4, soil5, soil6],
        borderColor: "rgb(234, 80, 73)",
        backgroundColor: "rgb(234, 80, 73,0.3)",
        fill: "start",
      },
    ],
  };

  const chartData1 = {
    labels: [
      sensorData.time,
      sensorData.time1,
      sensorData.time2,
      sensorData.time3,
      sensorData.time4,
      sensorData.time5,
      sensorData.time6,
    ],
    datasets: [
      {
        label: "Water level (m)",
        data: [
          sensorData.water_level,
          sensorData.water_level1,
          sensorData.water_level2,
          sensorData.water_level3,
          sensorData.water_level4,
          sensorData.water_level5,
          sensorData.water_level6,
        ],
        borderColor: "rgb(46, 141, 78)",
        backgroundColor: "rgb(46, 141, 78,0.3)",
        fill: "start",
      },
    ],
  };

  const options = {
    scales: {
      y: {
        min: 0,
        max: 100,
        title: {
          display: false,
          text: "Soil Moisture (%)",
          font: {
            family: "Poppins",
            size: 15,
          },
        },
        ticks: {
          stepSize: 25,
          font: {
            family: "Poppins",
            size: 13,
          },
        },
      },
      x: {
        title: {
          display: false,
          text: "Time (hours)",
          font: {
            family: "Poppins",
            size: 15,
          },
        },
        ticks: {
          font: {
            family: "Poppins",
            size: 13,
          },
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  const options1 = {
    scales: {
      y: {
        min: 0,
        max: 100,
        title: {
          display: false,
          text: "Water level (m)",
          font: {
            family: "Poppins",
            size: 15,
          },
        },
        ticks: {
          stepSize: 25,
          font: {
            family: "Poppins",
            size: 13,
          },
        },
      },
      x: {
        title: {
          display: false,
          text: "Time (hours)",
          font: {
            family: "Poppins",
            size: 15,
          },
        },
        ticks: {
          font: {
            family: "Poppins",
            size: 13,
          },
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return (
    <div>
      <Navbar />

      <div className="field1">
        <div className="field2">
          <div className="field3">
            <div className="field4">
              <h1>
                Welcome to{" "}
                <span style={{ color: "rgb(234,80,73)" }}>Field Bot</span>
              </h1>
              <p>
                Field Bot is your digital assistant for all things agriculture.
                Whether you're a seasoned farmer or just starting out, Field Bot
                is here to help you optimize your farming practices and maximize
                your yields.
              </p>
              <button>Explore</button>
            </div>
          </div>
          <div className="field3" style={{ justifyContent: "end" }}>
            <img src={image1} alt="farmer" />
          </div>
        </div>
      </div>

      <div className="field6">
        <div className="field5">
          <img src={image2} />
        </div>
        <div className="field5 field100">
          <h2>Heading: Precision Irrigation: Your Crops' Thirst Quenched</h2>
          <p>
            Precision Irrigation is the key to optimizing water usage for
            maximum crop yield. By providing real-time data on soil moisture and
            water levels, farmers can make informed irrigation decisions,
            conserving precious water resources while ensuring plant health.
            This data-driven approach not only boosts crop production but also
            reduces water costs and minimizes environmental impact. Empower
            yourself to cultivate healthier crops and sustain a thriving
            ecosystem with precision irrigation.
          </p>
        </div>
      </div>

      <div className="dash1" style={{ marginTop: "3%", marginBottom: "0" }}>
        <h2>Sensor Data Over Time</h2>
        <p>Visual representation of sensor data over time</p>
        <div className="dash2" style={{ marginBottom: "0" }}>
          <div className="dash50">
            <h3>Soil Moisture</h3>
            <Line data={chartData} options={options} />
          </div>
          <div className="dash50" style={{ marginBottom: "0%" }}>
            <h3>Water level</h3>
            <Line data={chartData1} options={options1} />
          </div>
        </div>
      </div>

      <div className="dash6" style={{ marginBottom: "5%", marginTop: "0" }}>
        <h2>Irrigation Status</h2>
        <p>Irrigation Efficiency and Schedule</p>
        <div className="dash7">
          <div className="dash8">
            <p>Water level</p>
            <p
              style={{
                color: "green",
                fontSize: "30px",
                fontWeight: "700",
                textAlign: "center",
              }}
            >
              {sensorData.water_level}
            </p>
            <p style={{ color: "#4F7D96" }}>Current Value</p>
          </div>
          <div className="dash8">
            <p>Irrigation Status</p>
            <p
              style={{
                fontSize: "30px",
                fontWeight: "700",
                textAlign: "center",
                color: "rgb(70, 70, 70)",
              }}
            >
              {sensorData.irrigation == 1 ? (
                <p
                  style={{
                    color: "green",
                    fontSize: "30px",
                    fontWeight: "700",
                    textAlign: "center",
                  }}
                >
                  On
                </p>
              ) : (
                <p
                  style={{
                    color: "rgb(234, 80, 73)",
                    fontSize: "30px",
                    fontWeight: "700",
                    textAlign: "center",
                  }}
                >
                  Off
                </p>
              )}
            </p>
            <p style={{ color: "#4F7D96" }}>
              Last Irrigation : {sensorData.irrigationtime}
            </p>
          </div>
          <div className="dash8">
            <p>Manually control irrigation</p>
            <FormGroup style={{margin:'9%'}}>
              <Stack direction="row" spacing={1} alignItems="center">
                <Typography>Off</Typography>
                <AntSwitch
                  defaultChecked
                  inputProps={{ "aria-label": "ant design" }}
                />
                <Typography>On</Typography>
              </Stack>
            </FormGroup>
            <p style={{ color: "#4F7D96" }}>On/Off using the switches</p>
          </div>
        </div>
      </div>

      <div className="field13" style={{ columnGap: "10%" }}>
        <div className="field12 field100">
          <h2>Comprehensive Field Monitoring for Optimal Growth</h2>
          <p>
            Beyond water management, our system offers real-time insights into
            critical field conditions. Detect potential threats early with
            accurate monitoring of fire, smoke, and soil pH levels. Stay
            informed, make proactive decisions, and safeguard your crops from
            unforeseen challenges.Early fire detection for rapid response ,
            Smoke monitoring for air quality assessment , Soil pH analysis for
            nutrient optimization
          </p>
        </div>
        <div className="field12">
          <img src={image3} width="100%" />
        </div>
      </div>

      <div className="dash6" style={{ marginBottom: "5%" }}>
        <h2>Current Environmental Conditions</h2>
        <p>Overall Sensor Status: Current pH, Fire, and Gas Detection</p>
        <div className="dash7">
          <div className="dash8">
            <p>pH Value</p>
            <p
              style={{
                color: "green",
                fontSize: "30px",
                fontWeight: "700",
                textAlign: "center",
              }}
            >
              {sensorData.phvalue}
            </p>
            <p style={{ color: "#4F7D96" }}>Current Value</p>
          </div>
          <div className="dash8">
            <p>Gas Detection Status</p>
            <p
              style={{
                fontSize: "30px",
                fontWeight: "700",
                textAlign: "center",
                color: "rgb(70, 70, 70)",
              }}
            >
              {sensorData.gas == 0 ? (
                <p
                  style={{
                    color: "green",
                    fontSize: "30px",
                    fontWeight: "700",
                    textAlign: "center",
                  }}
                >
                  Safe
                </p>
              ) : (
                <p
                  style={{
                    color: "rgb(234, 80, 73)",
                    fontSize: "30px",
                    fontWeight: "700",
                    textAlign: "center",
                  }}
                >
                  Not Safe
                </p>
              )}
            </p>
            <p style={{ color: "#4F7D96" }}>Current Value</p>
          </div>
          <div className="dash8">
            <p>Fire Detection Status</p>
            <p>
              {sensorData.gas == 0 ? (
                <p
                  style={{
                    color: "green",
                    fontSize: "30px",
                    fontWeight: "700",
                    textAlign: "center",
                  }}
                >
                  No Fire Detected
                </p>
              ) : (
                <p
                  style={{
                    color: "rgb(234, 80, 73)",
                    fontSize: "30px",
                    fontWeight: "700",
                    textAlign: "center",
                  }}
                >
                  Fire Detected
                </p>
              )}
            </p>
            <p style={{ color: "#4F7D96" }}>Current Value</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Fieldbot;
