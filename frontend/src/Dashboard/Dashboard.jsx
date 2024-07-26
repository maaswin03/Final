import React from "react";
import Navbar from "../Components/Navbar";
import "../Dashboard/Dashboard.css";
import { useState, useEffect } from "react";
import Footer from "../Components/Footer";
import { Line } from "react-chartjs-2";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  ArcElement,
  BarElement,
  Legend,
  Filler,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  BarElement,
  LinearScale,
  LineElement,
  PointElement,
  ArcElement,
  Title,
  Filler,
  Tooltip,
  Legend
);

function Dashboard() {
  const [sensorData, setSensorData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://final-1-jkbd.onrender.com/api/dashboard", {
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

  const difftemperature = Math.round(
    Number(sensorData.temperature) - Number(sensorData.temperature1)
  );
  const diffhumidity = Math.round(
    Number(sensorData.humidity) - Number(sensorData.humidity1)
  );
  const difflight = Math.round(
    Number(sensorData.light) - Number(sensorData.light1)
  );
  const diffspeed = Math.round(
    Number(sensorData.speed) - Number(sensorData.speed1)
  );

  const starttemperature = Math.round(sensorData.temperature) - 3;
  const endtemperature = Math.round(sensorData.temperature) + 3;

  const startspeed = Math.round(sensorData.speed) - 3;
  const endspeed = Math.round(sensorData.speed) + 3;

  const soil = Math.round((Number(sensorData.soil) / 1023) * 100);
  const soil1 = Math.round((Number(sensorData.soil1) / 1023) * 100);
  const soil2 = Math.round((Number(sensorData.soil2) / 1023) * 100);
  const soil3 = Math.round((Number(sensorData.soil3) / 1023) * 100);
  const soil4 = Math.round((Number(sensorData.soil4) / 1023) * 100);
  const soil5 = Math.round((Number(sensorData.soil5) / 1023) * 100);
  const soil6 = Math.round((Number(sensorData.soil6) / 1023) * 100);

  const diffsoil = Math.round(Number(soil) - Number(soil1));

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
        label: "Temperature (°C)",
        data: [
          sensorData.temperature,
          sensorData.temperature1,
          sensorData.temperature2,
          sensorData.temperature3,
          sensorData.temperature4,
          sensorData.temperature5,
          sensorData.temperature6,
        ],
        borderColor: "rgb(46, 141, 78)",
        backgroundColor: "rgb(46, 141, 78,0.3)",
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
        label: "Humidity (%)",
        data: [
          sensorData.humidity,
          sensorData.humidity1,
          sensorData.humidity2,
          sensorData.humidity3,
          sensorData.humidity4,
          sensorData.humidity5,
          sensorData.humidity6,
        ],
        borderColor: "rgb(46, 141, 78)",
        backgroundColor: "rgb(46, 141, 78,0.3)",
        fill: "start",
      },
    ],
  };

  const chartData2 = {
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

  const chartData3 = {
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
        label: "Light Intensity (Lux)",
        data: [
          sensorData.light,
          sensorData.light1,
          sensorData.light2,
          sensorData.light3,
          sensorData.light4,
          sensorData.light5,
          sensorData.light6,
        ],
        borderColor: "rgb(234, 80, 73)",
        backgroundColor: "rgb(234, 80, 73,0.3)",
        fill: "start",
      },
    ],
  };

  // const chartData4 = {
  //   labels: [
  //     sensorData.time,
  //     sensorData.time1,
  //     sensorData.time2,
  //     sensorData.time3,
  //     sensorData.time4,
  //     sensorData.time5,
  //   ],
  //   datasets: [
  //     {
  //       label: "Nitrogen (N)",
  //       data: [
  //         sensorData.n,
  //         sensorData.n1,
  //         sensorData.n2,
  //         sensorData.n3,
  //         sensorData.n4,
  //         sensorData.n5,
  //       ],
  //       borderColor: "rgb(46, 141, 78)",
  //       backgroundColor: "rgb(46, 141, 78,0.2)",
  //       fill:'start'
  //     },
  //     {
  //       label: "Phosphorus (P)",
  //       data: [
  //         sensorData.p,
  //         sensorData.p1,
  //         sensorData.p2,
  //         sensorData.p3,
  //         sensorData.p4,
  //         sensorData.p5,
  //       ],
  //       borderColor: "rgb(234, 80, 73)",
  //       backgroundColor: "rgb(234, 80, 73,0.2)",
  //       fill: "start",
  //     },
  //     {
  //       label: "Potassium (K)",
  //       data: [
  //         sensorData.k,
  //         sensorData.k1,
  //         sensorData.k2,
  //         sensorData.k3,
  //         sensorData.k4,
  //         sensorData.k5,
  //       ],
  //       borderColor: "rgba(75, 192, 192, 1)",
  //       backgroundColor: "rgba(75, 192, 192, 0.2)",
  //     },
  //   ],
  // };

  const chartData4 = {
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
        label: "Nitrogen (N)",
        data: [
          sensorData.n,
          sensorData.n1,
          sensorData.n2,
          sensorData.n3,
          sensorData.n4,
          sensorData.n5,
          sensorData.n6,
        ],
        borderColor: "rgb(46, 141, 78)",
        backgroundColor: "rgba(46, 141, 78, 0.5)",
        fill: "start",
      },
      {
        label: "Phosphorus (P)",
        data: [
          sensorData.p,
          sensorData.p1,
          sensorData.p2,
          sensorData.p3,
          sensorData.p4,
          sensorData.p5,
          sensorData.p5,
        ],
        borderColor: "rgb(234, 80, 73)",
        backgroundColor: "rgba(234, 80, 73, 0.5)",
        fill: "start",
      },
      {
        label: "Potassium (K)",
        data: [
          sensorData.k,
          sensorData.k1,
          sensorData.k2,
          sensorData.k3,
          sensorData.k4,
          sensorData.k5,
          sensorData.k6,
        ],
        borderColor: "rgba(75, 192, 192, 1)",
        backgroundColor: "rgba(75, 192, 192, 0.5)",
      },
    ],
  };

  const chartData5 = {
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
        label: "Light Intensity (Lux)",
        data: [
          sensorData.speed,
          sensorData.speed1,
          sensorData.speed2,
          sensorData.speed3,
          sensorData.speed4,
          sensorData.speed5,
          sensorData.speed6,
        ],
        borderColor: "rgba(75, 192, 192)",
        backgroundColor: "rgba(75, 192, 192, 0.5)",
        fill: "start",
      },
    ],
  };

  const options = {
    scales: {
      y: {
        min: 25,
        max: 45,
        title: {
          display: false,
          text: "Temperature (°C)",
          font: {
            family: "Poppins",
            size: 15,
          },
        },
        ticks: {
          stepSize: 5,
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
        min: 50,
        max: 70,
        title: {
          display: false,
          text: "Humidity (%)",
          font: {
            family: "Poppins",
            size: 15,
          },
        },
        ticks: {
          stepSize: 5,
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

  const options2 = {
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

  const options3 = {
    scales: {
      y: {
        min: 700,
        max: 800,
        title: {
          display: false,
          text: "Light Intensity (Lux)",
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

  const options4 = {
    scales: {
      y: {
        min: 0,
        max: 200,
        title: {
          display: false,
          text: "N , P , and K values in soil (ppm)",
          font: {
            family: "Poppins",
            size: 15,
          },
        },
        ticks: {
          stepSize: 50,
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
        display: true,
        position: "top",
      },
    },
  };

  const options5 = {
    scales: {
      y: {
        min: 0,
        max: 200,
        title: {
          display: false,
          text: "Wind Speed (cm/s)",
          font: {
            family: "Poppins",
            size: 15,
          },
        },
        ticks: {
          stepSize: 50,
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

      <div className="dash1">
        <h2>Sensor Data Over Time</h2>
        <p>Visual representation of sensor data over time</p>
        <div className="dash2" style={{ marginBottom: "3%" }}>
          <div className="dash50">
            <h3>Temperature</h3>
            <Line data={chartData} options={options} />
          </div>
          <div className="dash50">
            <h3>Humidity</h3>
            <Line data={chartData1} options={options1} />
          </div>
        </div>
        <div className="dash2" style={{ marginBottom: "3%" }}>
          <div className="dash50">
            <h3>Soil Moisture</h3>
            <Line data={chartData2} options={options2} />
          </div>
          <div className="dash50">
            <h3>Light Intensity</h3>
            <Line data={chartData3} options={options3} />
          </div>
        </div>
        <div className="dash2">
          <div className="dash50">
            <h3>Soil Quailty</h3>
            <Bar data={chartData4} options={options4} />
          </div>
          <div className="dash50">
            <h3>Wind Speed</h3>
            <Line data={chartData5} options={options5} />
          </div>
        </div>
      </div>

      <div className="dash1">
        <h2>Dashboard</h2>
        <p>Real-time monitoring of your fields</p>
        <div className="dash2">
          <div className="dash3">
            <p>Temperature</p>
            <p
              style={{
                fontSize: "30px",
                fontWeight: "bolder",
                marginTop: "1%",
                marginBottom: "5%",
                textAlign: "center",
              }}
            >
              {difftemperature >= 0 ? (
                <span style={{ color: "green" }}>
                  +{difftemperature}
                  &uarr;
                </span>
              ) : (
                <span style={{ color: "rgb(234, 80, 73)" }}>&darr;</span>
              )}
              {sensorData.temperature} {"\u00B0"}C
            </p>
            {difftemperature >= 0 ? (
              <p style={{ color: "green" }}>
                +{difftemperature}
                {"\u00B0"}C
              </p>
            ) : (
              <p style={{ color: "rgb(234, 80, 73)" }}>
                {difftemperature}
                {"\u00B0"}C
              </p>
            )}
          </div>

          <div className="dash3">
            <p>Humidity</p>
            <p
              style={{
                fontSize: "30px",
                fontWeight: "bolder",
                marginTop: "1%",
                marginBottom: "5%",
                textAlign: "center",
              }}
            >
              {diffhumidity >= 0 ? (
                <span style={{ color: "green" }}>&uarr;</span>
              ) : (
                <span style={{ color: "rgb(234, 80, 73)" }}>{diffhumidity} %</span>
              )}
              {sensorData.humidity} %
            </p>
            {diffhumidity >= 0 ? (
              <p style={{ color: "green" }}>+{diffhumidity} %</p>
            ) : (
              <p style={{ color: "rgb(234, 80, 73)" }}>{diffhumidity} %</p>
            )}
          </div>

          <div className="dash3">
            <p>Light Intensity</p>
            <p
              style={{
                fontSize: "30px",
                fontWeight: "bolder",
                marginTop: "1%",
                marginBottom: "5%",
                textAlign: "center",
              }}
            >
              {difflight >= 0 ? (
                <span style={{ color: "green" }}>&uarr;</span>
              ) : (
                <span style={{ color: "rgb(234, 80, 73)" }}>&darr;</span>
              )}
              {sensorData.light} Lux
            </p>
            {difflight >= 0 ? (
              <p style={{ color: "green" }}>+{difflight} Lux</p>
            ) : (
              <p style={{ color: "rgb(234, 80, 73)" }}>{difflight} Lux</p>
            )}
          </div>

          <div className="dash3">
            <p>Soil Moisture</p>
            <p
              style={{
                fontSize: "30px",
                fontWeight: "bolder",
                marginTop: "1%",
                marginBottom: "5%",
                textAlign: "center",
              }}
            >
              {diffsoil >= 0 ? (
                <span style={{ color: "green" }}>&uarr;</span>
              ) : (
                <span style={{ color: "rgb(234, 80, 73)" }}>&darr;</span>
              )}
              {soil} %
            </p>
            {diffsoil >= 0 ? (
              <p style={{ color: "green" }}>+{diffsoil} %</p>
            ) : (
              <p style={{ color: "rgb(234, 80, 73)" }}>{diffsoil} %</p>
            )}
          </div>

          <div className="dash3">
            <p>Wind Speed</p>
            <p
              style={{
                fontSize: "30px",
                fontWeight: "bolder",
                marginTop: "1%",
                marginBottom: "5%",
                textAlign: "center",
              }}
            >
              {diffspeed >= 0 ? (
                <span style={{ color: "green" }}>&uarr;</span>
              ) : (
                <span style={{ color: "rgb(234, 80, 73)" }}>&darr;</span>
              )}
              {sensorData.speed} CM/S
            </p>
            {diffspeed >= 0 ? (
              <p style={{ color: "green" }}>+{diffspeed} CM/S</p>
            ) : (
              <p style={{ color: "rgb(234, 80, 73)" }}>{diffspeed} CM/S</p>
            )}
          </div>
        </div>
      </div>

      <div className="dash4">
        <h2>Current Location</h2>
        <p>Real-time location of your fields</p>
        <div className="dash5">
          <iframe
            src={`https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3916.340156854884!2d${sensorData.longitude}!3d${sensorData.latitude}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1714217822268!5m2!1sen!2sin`}
            width="100%"
            height="450"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

      <div className="dash6">
        <h2>Detailed Weather Report</h2>
        <p>Comprehensive weather information and forecasts</p>
        <div className="dash7">
          <div className="dash8">
            <p>Temperature Over Time</p>
            <p style={{ fontSize: "30px", fontWeight: "700" , textAlign:'center' , color:'#4F7D96'}}>
              {starttemperature}
              {"\u00B0"}C - {endtemperature}
              {"\u00B0"}C
            </p>
            <p style={{ color: "rgb(70, 70, 70)"}}>24 Hours</p>
          </div>
          <div className="dash8">
            <p>Precipitation Over Time</p>
            <p style={{ fontSize: "30px", fontWeight: "700" , textAlign:'center' , color:'#4F7D96'}}>
              0.5mm - 5mm
            </p>
            <p style={{ color: "rgb(70, 70, 70)" }}>24 Hours</p>
          </div>
          <div className="dash8">
            <p>Wind Speed Over Time</p>
            <p style={{ fontSize: "30px", fontWeight: "700" , textAlign:'center' , color:'#4F7D96'}}>
              {startspeed}MPH - {endspeed}MPH
            </p>
            <p style={{ color: "rgb(70, 70, 70)" }}>24 Hours</p>
          </div>
        </div>
      </div>

      <div className="dash9">
        <div className="dash10">
          <h2>Historical Data</h2>
          <p>Analyzing historical data reveals trends and insights</p>
          <div className="dash11">
            <table className="historical-table">
              <tbody>
                <tr id="dash12" style={{border:'none'}}>
                  <td>Date</td>
                  <td>Temperature</td>
                  <td>Humidity</td>
                  <td>Light Intensity</td>
                  <td>Soil Moisture</td>
                  <td>Wind Speed</td>
                </tr>

                <tr>
                  <td>{sensorData.time}</td>
                  <td style={{ color: "#4F7D96" }}>
                    {sensorData.temperature} {"\u00B0"}C
                  </td>
                  <td style={{ color: "#4F7D96" }}>{sensorData.humidity} %</td>
                  <td style={{ color: "#4F7D96" }}>{sensorData.light} Lux</td>
                  <td style={{ color: "#4F7D96" }}>{soil} %</td>
                  <td style={{ color: "#4F7D96" }}>{sensorData.speed} MPH</td>
                </tr>

                <tr>
                  <td>{sensorData.time1}</td>
                  <td style={{ color: "#4F7D96" }}>
                    {sensorData.temperature1} {"\u00B0"}C
                  </td>
                  <td style={{ color: "#4F7D96" }}>{sensorData.humidity1} %</td>
                  <td style={{ color: "#4F7D96" }}>{sensorData.light1} Lux</td>
                  <td style={{ color: "#4F7D96" }}>{soil1} %</td>
                  <td style={{ color: "#4F7D96" }}>{sensorData.speed1} MPH</td>
                </tr>
                <tr>
                  <td>{sensorData.time2}</td>
                  <td style={{ color: "#4F7D96" }}>
                    {sensorData.temperature2} {"\u00B0"}C
                  </td>
                  <td style={{ color: "#4F7D96" }}>{sensorData.humidity2} %</td>
                  <td style={{ color: "#4F7D96" }}>{sensorData.light2} Lux</td>
                  <td style={{ color: "#4F7D96" }}>{soil2} %</td>
                  <td style={{ color: "#4F7D96" }}>{sensorData.speed2} MPH</td>
                </tr>
                <tr>
                  <td>{sensorData.time3}</td>
                  <td style={{ color: "#4F7D96" }}>
                    {sensorData.temperature3} {"\u00B0"}C
                  </td>
                  <td style={{ color: "#4F7D96" }}>{sensorData.humidity3} %</td>
                  <td style={{ color: "#4F7D96" }}>{sensorData.light3} Lux</td>
                  <td style={{ color: "#4F7D96" }}>{soil3} %</td>
                  <td style={{ color: "#4F7D96" }}>{sensorData.speed3} MPH</td>
                </tr>
                <tr>
                  <td>{sensorData.time4}</td>
                  <td style={{ color: "#4F7D96" }}>
                    {sensorData.temperature4} {"\u00B0"}C
                  </td>
                  <td style={{ color: "#4F7D96" }}>{sensorData.humidity4} %</td>
                  <td style={{ color: "#4F7D96" }}>{sensorData.light4} Lux</td>
                  <td style={{ color: "#4F7D96" }}>{soil4} %</td>
                  <td style={{ color: "#4F7D96" }}>{sensorData.speed4} MPH</td>
                </tr>
                <tr>
                  <td>{sensorData.time5}</td>
                  <td style={{ color: "#4F7D96" }}>
                    {sensorData.temperature5} {"\u00B0"}C
                  </td>
                  <td style={{ color: "#4F7D96" }}>{sensorData.humidity5} %</td>
                  <td style={{ color: "#4F7D96" }}>{sensorData.light5} Lux</td>
                  <td style={{ color: "#4F7D96" }}>{soil5} %</td>
                  <td style={{ color: "#4F7D96" }}>{sensorData.speed5} MPH</td>
                </tr>
                <tr style={{border:'none'}}>
                  <td>{sensorData.time6}</td>
                  <td style={{ color: "#4F7D96" }}>
                    {sensorData.temperature6} {"\u00B0"}C
                  </td>
                  <td style={{ color: "#4F7D96" }}>{sensorData.humidity6} %</td>
                  <td style={{ color: "#4F7D96" }}>{sensorData.light6} Lux</td>
                  <td style={{ color: "#4F7D96" }}>{soil6} %</td>
                  <td style={{ color: "#4F7D96" }}>{sensorData.speed6} MPH</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Dashboard;
