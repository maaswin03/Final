import React, { useState } from "react";
import axios from "axios";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import "../Chatbot/Chatbot.css";

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = { text: input, sender: "user" };
    setMessages([...messages, userMessage]);

    try {
      const res = await axios.post("https://final-04do.onrender.com/chatbot", {
        prompt: input,
      });
      const botMessage = {
        text: res.data.text
          .split("\n")
          .map((paragraph) => paragraph.replace(/\*/g, ""))
          .join("\n"),
        sender: "bot",
      };

      setMessages((prevMessages) => [...prevMessages, botMessage]);
    } catch (error) {
      console.error("Error:", error);
      const errorMessage = {
        text: "Sorry, there was an error processing your request.",
        sender: "bot",
      };
      setMessages((prevMessages) => [...prevMessages, errorMessage]);
    }

    setInput("");
  };

  return (
    <div>
      <Navbar />
      <div className="crop6">
        <div className="crop7">
          <h1>Chatbot</h1>
          <p>Clear your queries here</p>
        </div>
      </div>

      <div className="chatbot1">
        <div className="chatbot-container">
          <div className="chat-window">
            {messages.map((msg, index) => (
              <div key={index} className={`chat-message ${msg.sender}`}>
                <p>{msg.text}</p>
              </div>
            ))}
          </div>
          <div className="chat-input-container">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your message..."
            />
            <button onClick={handleSendMessage}>Send</button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Chatbot;
