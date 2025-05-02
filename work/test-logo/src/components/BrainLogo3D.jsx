// src/components/BrainLogo3D.jsx
import { useRef, useState, useEffect } from "react";
import { useFrame } from "@react-three/fiber";

export default function BrainLogo3D({ position = [6.5, -3, 0], triggerAt = 3.5, onArrive }) {
  const ref = useRef();
  const [active, setActive] = useState(false); // Active state for animation
  const [moving, setMoving] = useState(false);
  const triggeredRef = useRef(false);

  useFrame(({ clock }) => {
    const t = clock.elapsedTime;

    // Trigger animation after the final impulse reaches
    if (!triggeredRef.current && t > triggerAt) {
      triggeredRef.current = true;
      setActive(true); // Start glowing and shrinking
      setTimeout(() => setMoving(true), 800); // Begin moving after the glow
    }

    if (moving && ref.current) {
      ref.current.position.y += 0.05; // Move upward
      ref.current.scale.multiplyScalar(0.96); // Shrink scale

      if (ref.current.scale.x < 0.1 && onArrive) {
        onArrive(); // Notify app to transition
      }
    }
  });

  return (
    <mesh ref={ref} position={position} scale={[1.5, 1.5, 1.5]}>
      <sphereGeometry args={[0.6, 32, 32]} />
      <meshStandardMaterial
        color="#8800ff"
        emissive={active ? "#ff00ff" : "#220022"} // Glow when active
        emissiveIntensity={active ? 2 : 0.2} // Glow intensity
      />
    </mesh>
  );
}
