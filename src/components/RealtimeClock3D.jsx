import React, { useRef, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Text } from "@react-three/drei";
import * as THREE from "three";

// Component for clock hands
const ClockHand = ({ angle, length, width, color, position = [0, 0, 0.1] }) => {
  const meshRef = useRef();

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.z = -angle + Math.PI / 2;
    }
  });

  return (
    <mesh ref={meshRef} position={position}>
      <boxGeometry args={[width, length, 0.05]} />
      <meshStandardMaterial color={color} />
    </mesh>
  );
};

// Component for hour markers
const HourMarker = ({ hour }) => {
  const angle = hour * 30 * (Math.PI / 180);
  const x = Math.cos(angle - Math.PI / 2) * 2.8;
  const y = Math.sin(angle - Math.PI / 2) * 2.8;

  return (
    <group>
      {/* Hour marker line */}
      <mesh position={[x * 0.9, y * 0.9, 0.05]} rotation={[0, 0, angle]}>
        <boxGeometry args={[0.1, 0.3, 0.05]} />
        <meshStandardMaterial color="#333" />
      </mesh>

      {/* Hour number */}
      <Text
        position={[x, y, 0.1]}
        fontSize={0.3}
        color="#333"
        anchorX="center"
        anchorY="middle"
      >
        {hour === 0 ? 12 : hour}
      </Text>
    </group>
  );
};

// Component for minute markers
const MinuteMarker = ({ minute }) => {
  const angle = minute * 6 * (Math.PI / 180);
  const x = Math.cos(angle - Math.PI / 2) * 2.6;
  const y = Math.sin(angle - Math.PI / 2) * 2.6;

  // Only show markers for non-hour positions
  if (minute % 5 === 0) return null;

  return (
    <mesh position={[x, y, 0.05]} rotation={[0, 0, angle]}>
      <boxGeometry args={[0.05, 0.15, 0.03]} />
      <meshStandardMaterial color="#666" />
    </mesh>
  );
};

// Main clock face component
const ClockFace = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      // Get Vietnam time (UTC+7)
      const now = new Date();
      const vietnamTime = new Date(now.getTime() + 7 * 60 * 60 * 1000);
      setTime(vietnamTime);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const hours = time.getUTCHours() % 12;
  const minutes = time.getUTCMinutes();
  const seconds = time.getUTCSeconds();

  // Calculate angles for hands
  const secondAngle = seconds * 6 * (Math.PI / 180);
  const minuteAngle = (minutes * 6 + seconds * 0.1) * (Math.PI / 180);
  const hourAngle = (hours * 30 + minutes * 0.5) * (Math.PI / 180);

  return (
    <group>
      {/* Clock base/face */}
      <mesh position={[0, 0, 0]}>
        <cylinderGeometry args={[3.2, 3.2, 0.2, 64]} />
        <meshStandardMaterial color="#f8f8f8" />
      </mesh>

      {/* Clock rim */}
      <mesh position={[0, 0, 0]}>
        <cylinderGeometry args={[3.3, 3.3, 0.25, 64]} />
        <meshStandardMaterial color="#333" />
      </mesh>

      {/* Inner clock face */}
      <mesh position={[0, 0, 0.11]}>
        <cylinderGeometry args={[3.0, 3.0, 0.02, 64]} />
        <meshStandardMaterial color="#ffffff" />
      </mesh>

      {/* Hour markers */}
      {Array.from({ length: 12 }, (_, i) => (
        <HourMarker key={i} hour={i} />
      ))}

      {/* Minute markers */}
      {Array.from({ length: 60 }, (_, i) => (
        <MinuteMarker key={i} minute={i} />
      ))}

      {/* Clock hands */}
      <ClockHand
        angle={hourAngle}
        length={1.5}
        width={0.15}
        color="#333"
        position={[0, 0, 0.15]}
      />

      <ClockHand
        angle={minuteAngle}
        length={2.2}
        width={0.1}
        color="#333"
        position={[0, 0, 0.16]}
      />

      <ClockHand
        angle={secondAngle}
        length={2.5}
        width={0.05}
        color="#e74c3c"
        position={[0, 0, 0.17]}
      />

      {/* Center dot */}
      <mesh position={[0, 0, 0.18]}>
        <cylinderGeometry args={[0.15, 0.15, 0.05, 16]} />
        <meshStandardMaterial color="#333" />
      </mesh>

      {/* Digital time display */}
      <Text
        position={[0, -1.5, 0.2]}
        fontSize={0.25}
        color="#333"
        anchorX="center"
        anchorY="middle"
      >
        {time.toLocaleTimeString("vi-VN", {
          timeZone: "Asia/Ho_Chi_Minh",
          hour12: false,
        })}
      </Text>

      {/* Date display */}
      <Text
        position={[0, -1.9, 0.2]}
        fontSize={0.15}
        color="#666"
        anchorX="center"
        anchorY="middle"
      >
        {time.toLocaleDateString("vi-VN", {
          timeZone: "Asia/Ho_Chi_Minh",
          day: "2-digit",
          month: "2-digit",
          year: "numeric",
        })}
      </Text>
    </group>
  );
};

// Main component
const RealtimeClock3D = ({ className, style }) => {
  return (
    <div
      className={className}
      style={{
        width: "100%",
        height: "100%",
        position: "relative",
        ...style,
      }}
    >
      <Canvas
        camera={{ position: [0, 0, 6], fov: 60 }}
        shadows
        style={{ background: "transparent" }}
      >
        {/* Lighting */}
        <ambientLight intensity={0.8} />
        <directionalLight
          position={[10, 10, 5]}
          intensity={1.2}
          castShadow
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
        />
        <pointLight position={[-10, -10, -5]} intensity={0.4} color="#ffffff" />

        {/* Clock */}
        <ClockFace />

        {/* Controls */}
        <OrbitControls
          enablePan={false}
          enableZoom={true}
          enableRotate={true}
          minDistance={3}
          maxDistance={10}
          autoRotate={false}
          enableDamping={true}
          dampingFactor={0.05}
        />
      </Canvas>
    </div>
  );
};

export default RealtimeClock3D;
