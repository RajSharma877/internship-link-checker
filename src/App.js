import React, { useState } from "react";
import "./App.css";
import LinkForm from "./LinkForm";
import LinkResult from "./LinkResult";

function App() {
  const [result, setResult] = useState("");

  const handleLinkSubmit = async (link) => {
    try {
      const response = await fetch("http://localhost:5000/validate-link", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ link }),
      });

      const data = await response.json();
      setResult(data.result);
    } catch (error) {
      console.error("Error validating link:", error);
    }
  };

  return (
    <div className="App">
      <h1>Internship Link Checker</h1>
      <LinkForm onLinkSubmit={handleLinkSubmit} />
      <LinkResult result={result} />
    </div>
  );
}

export default App;
