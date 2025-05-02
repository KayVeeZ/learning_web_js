// src/components/Neuron.jsx
import { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";

export default function Neuron({ position }) {
  const ref = useRef();
  const [hovered, setHovered] = useState(false);

  useFrame(() => {
    ref.current.material.emissiveIntensity = hovered ? 2 : 0.5;
  });

  return (
    <mesh
      position={position}
      ref={ref}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      <sphereGeometry args={[0.4, 32, 32]} />
      <meshStandardMaterial color="#111" emissive="#00ffff" emissiveIntensity={0.5} />
    </mesh>
  );
}
