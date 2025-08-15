import React from "react";

export default function App() {
  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      height: "100vh",
      backgroundColor: "#f0f8ff",
      fontFamily: "Arial, sans-serif"
    }}>
      <h1 style={{ color: "#333" }}>Odd Jobs Board</h1>
      <div style={{ display: "flex", gap: "20px" }}>
        <button style={{
          padding: "20px 40px",
          fontSize: "1.5rem",
          borderRadius: "50px",
          backgroundColor: "#ff6f61",
          color: "white",
          border: "none",
          cursor: "pointer"
        }}>Post</button>
        <button style={{
          padding: "20px 40px",
          fontSize: "1.5rem",
          borderRadius: "50px",
          backgroundColor: "#6b5b95",
          color: "white",
          border: "none",
          cursor: "pointer"
        }}>The Board</button>
      </div>
    </div>
  );
}
