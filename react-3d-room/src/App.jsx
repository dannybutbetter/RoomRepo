import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

export default function LandingPage() {
  const [showRoom, setShowRoom] = React.useState(false);

  return (
    <div className="bg-white text-gray-900 min-h-screen flex items-center justify-center px-6">#
      {showRoom ? (
        <div className="w-full h-screen">
          <Canvas camera={{ position: [0, 2, 5], fov: 60 }}>
            <ambientLight intensity={0.5} />
            <directionalLight position={[5, 5, 5]} intensity={1} />
            <mesh>
              <boxGeometry args={[5, 0.1, 5]} />
              <meshStandardMaterial color="#e0e0e0" />
            </mesh>
            <OrbitControls />
          </Canvas>
        </div>
      ) : (
        <main className="max-w-2xl text-center">
          <h1 className="text-5xl font-bold mb-6">Room Repo</h1>
          <p className="text-lg text-gray-600 mb-8">
            A quick, creative solution to designing your personal space.
          </p>
          <button
            onClick={() => setShowRoom(true)}
            className="inline-block bg-black text-white px-6 py-3 rounded-2xl text-sm hover:bg-gray-800 transition"
          >
            Get Started
          </button>
        </main>
      )}
    </div>
  );
}
