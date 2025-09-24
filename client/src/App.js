import React, { useEffect, useState } from "react";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    // Call backend API
    fetch("/").then(res => res.text()).then(data => setMessage(data));
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>React + Node.js Project 🚀</h1>
      <p>Backend says: {message}</p>
    </div>
  );
}

export default App;
