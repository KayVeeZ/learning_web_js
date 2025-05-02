// src/components/NeuralNetwork3D.jsx
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Neuron from "./Neuron";
import Axon from "./Axon";
import { useState } from "react";
import BrainLogo3D from "./BrainLogo3D";

const neurons = [
  [5, 2, 0],
  [2, 1, 2],
  [0, 3, 1],
  [-2, 2, -1],
  [-4, 1, 0],
  [-5, -1, 1],
  [-3, -3, -1],
  [-1, -2, 1],
  [1, -1, -1],
  [3, -2, 0],
];

const connections = [
  [0, 1],
  [1, 2],
  [2, 3],
  [3, 4],
  [4, 5],
  [5, 6],
  [6, 7],
  [7, 8],
  [8, 9],
];

export default function NeuralNetwork3D({ onFinish }) {
  const [startImpulse, setStartImpulse] = useState(false);

  const handleClick = () => {
    setStartImpulse(true);
  };

  const handleFinalImpulseReach = () => {
    // This is where we can signal the app to transition
    onFinish();
  };

  return (
    <div style={{ width: "100vw", height: "100vh" }} onClick={handleClick}>
      <Canvas camera={{ position: [0, 0, 20], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1.5} />
        <OrbitControls />

        {neurons.map((pos, i) => (
          <Neuron key={i} position={pos} />
        ))}

        {connections.map(([from, to], i) => (
          <Axon
            key={i}
            start={neurons[from]}
            end={neurons[to]}
            trigger={startImpulse}
            delay={i * 0.3}
          />
        ))}

        <BrainLogo3D
          position={[6.5, -3, 0]}
          triggerAt={connections.length * 0.3} // Last impulse hits here
          onArrive={handleFinalImpulseReach}
        />
      </Canvas>
    </div>
  );
}