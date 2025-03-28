import { OrbitControls } from "@react-three/drei";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { useEffect, useRef, useState } from "react";
import { STLLoader } from "three/examples/jsm/loaders/STLLoader";

function Model({ url }) {
  const meshRef = useRef();
  const geometry = useLoader(STLLoader, url);

  // Rotate the model around its Y-axis
  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.005; // Continuous rotation
    }
  });

  return (
    <mesh ref={meshRef} geometry={geometry} scale={0.5} position={[0, -1.5, 0]}>
      {/* Set model color to white */}
      <meshStandardMaterial
        color="#ffffff" // White color
        emissive="#ffffff" // Optional: white emissive glow
        emissiveIntensity={0.1}
        roughness={0.1}
        metalness={0.5}
      />
    </mesh>
  );
}

export default function ThreeScene() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return <div className="w-full h-full bg-gray-50"></div>;
  }

  return (
    <Canvas
      camera={{ position: [0, 0, 15], fov: 50 }}
      style={{
        width: "100%",
        height: "60vh",
        background: "linear-gradient(135deg, #f0f0f0 0%, #d4d4d4 100%)", // Gradient background
        transition: "background-color 0.5s ease", // Smooth background transition on hover
        borderRadius: "100%", // Rounded corners
      }}
      onPointerEnter={(e) => {
        e.target.style.background = "linear-gradient(135deg, #ffccff 0%, #cc99ff 100%)"; // Hover effect
      }}
      onPointerLeave={(e) => {
        e.target.style.background = "linear-gradient(135deg, #f0f0f0 0%, #d4d4d4 100%)"; // Reset background after hover
      }}
    >
      {/* Lighting setup */}
      <ambientLight intensity={0.3} />
      <pointLight position={[10, 10, 10]} intensity={0.7} color="#ffffff" />
      <pointLight position={[-10, -10, -10]} intensity={0.7} color="#ff00ff" />
      <pointLight position={[0, 5, 0]} intensity={1} color="#00ffff" />
      <pointLight position={[5, -5, -5]} intensity={0.5} color="#ff6347" />

      {/* Model with white color */}
      <Model url="/toad3d.stl" />

      <OrbitControls
        enableZoom={false}
        enablePan={false}
        rotateSpeed={0.5}
        autoRotate={false}
        minPolarAngle={Math.PI / 3}
        maxPolarAngle={Math.PI / 1.5}
      />
    </Canvas>
  );
}
