// src/components/Axon.jsx
import { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export default function Axon({ start, end, trigger, delay = 0 }) {
  const curve = new THREE.QuadraticBezierCurve3(
    new THREE.Vector3(...start),
    new THREE.Vector3(
      (start[0] + end[0]) / 2,
      (start[1] + end[1]) / 2 + 2,
      (start[2] + end[2]) / 2
    ),
    new THREE.Vector3(...end)
  );

  const points = curve.getPoints(50);
  const geometry = new THREE.BufferGeometry().setFromPoints(points);

  const impulseRef = useRef();
  const startTime = useRef(null);
  const [trail, setTrail] = useState([]);

  useFrame(({ clock }) => {
    if (!trigger) return;

    const t = clock.elapsedTime;

    if (startTime.current === null) startTime.current = t;
    const elapsed = t - startTime.current;

    const speed = 0.5;
    const progress = (elapsed - delay) * speed;

    if (progress >= 0 && progress <= 1 && impulseRef.current) {
      const point = curve.getPoint(progress);
      impulseRef.current.position.copy(point);

      // Add new trail point
      setTrail((prev) => [
        ...prev.slice(-10), // keep trail short
        { position: point.clone(), timestamp: t },
      ]);
    }
  });

  return (
    <>
      <line geometry={geometry}>
        <lineBasicMaterial color="#00ffff" />
      </line>

      {trigger && (
        <>
          <mesh ref={impulseRef}>
            <sphereGeometry args={[0.12, 16, 16]} />
            <meshStandardMaterial color="#00f0ff" emissive="#00ffff" emissiveIntensity={2} />
          </mesh>

          {trail.map(({ position, timestamp }, i) => {
            const age = Date.now() / 1000 - timestamp;
            const opacity = Math.max(0, 1 - age * 2);
            return (
              <mesh key={i} position={position}>
                <sphereGeometry args={[0.08, 8, 8]} />
                <meshStandardMaterial
                  color="#00ffff"
                  emissive="#00ffff"
                  emissiveIntensity={opacity}
                  transparent
                  opacity={opacity}
                />
              </mesh>
            );
          })}
        </>
      )}
    </>
  );
}
