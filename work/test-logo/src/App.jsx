// src/App.jsx
import { useState } from "react";
import NeuralNetwork3D from "./components/NeuralNetwork3D";

function App() {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      {!loaded ? (
        <NeuralNetwork3D onFinish={() => setLoaded(true)} />
      ) : (
        <header
          style={{
            height: "100vh",
            background: "#0e0e0e",
            color: "white",
            padding: "2rem",
          }}
        >
          <h1>🧠 Brain Logo in Navbar</h1>
          <p>Main app content here...</p>
        </header>
      )}
    </>
  );
}

export default App;
