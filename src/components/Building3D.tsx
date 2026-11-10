import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, Lightformer, ContactShadows, Edges, Float } from "@react-three/drei";
import { useRef } from "react";
import type { Group } from "three";

const ORANGE = "#f39a2b";
const NAVY = "#1b2030";

function Tower({ x, z, floors, w, d, accent }: { x: number; z: number; floors: number; w: number; d: number; accent?: boolean }) {
  const h = 0.42;
  return (
    <group position={[x, 0, z]}>
      {Array.from({ length: floors }).map((_, i) => (
        <group key={i} position={[0, i * h, 0]}>
          <mesh position={[0, 0.02, 0]} castShadow receiveShadow>
            <boxGeometry args={[w + 0.12, 0.05, d + 0.12]} />
            <meshStandardMaterial color="#e9e4dc" roughness={0.6} />
          </mesh>
          <mesh position={[0, h / 2, 0]}>
            <boxGeometry args={[w, h - 0.05, d]} />
            <meshPhysicalMaterial color="#9fb3c8" roughness={0.08} metalness={0.2} transmission={0.4} transparent opacity={0.55} />
            <Edges color="#ffffff" threshold={15} />
          </mesh>
          {accent && i % 2 === 0 && (
            <mesh position={[w / 2 + 0.07, h / 2, 0]}>
              <boxGeometry args={[0.06, h, d * 0.9]} />
              <meshStandardMaterial color={ORANGE} roughness={0.4} emissive={ORANGE} emissiveIntensity={0.15} />
            </mesh>
          )}
        </group>
      ))}
      <mesh position={[-w / 2 - 0.05, (floors * h) / 2, d / 2 - 0.1]} castShadow>
        <boxGeometry args={[0.1, floors * h, 0.2]} />
        <meshStandardMaterial color={NAVY} roughness={0.5} />
      </mesh>
    </group>
  );
}

function Scene() {
  const ref = useRef<Group>(null);
  useFrame((state, delta) => {
    if (!ref.current) return;
    const dt = Math.min(delta, 0.05);
    ref.current.rotation.y += dt * 0.12;
    ref.current.rotation.x = state.pointer.y * 0.06;
  });
  return (
    <group ref={ref} position={[0, -1.6, 0]}>
      <Float speed={1} rotationIntensity={0} floatIntensity={0.25}>
        <Tower x={0} z={0} floors={9} w={1.3} d={1.1} accent />
        <Tower x={1.55} z={0.5} floors={5} w={1.2} d={1.4} />
        <Tower x={-1.4} z={0.6} floors={3} w={1.1} d={1.6} accent />
        <mesh position={[0.1, 0.01, 0.4]} receiveShadow>
          <boxGeometry args={[5, 0.04, 3.4]} />
          <meshStandardMaterial color="#2a2f3d" roughness={0.9} />
        </mesh>
      </Float>
    </group>
  );
}

export default function Building3D() {
  return (
    <Canvas
      shadows
      dpr={[1, 1.75]}
      camera={{ position: [6, 3.2, 6.5], fov: 34 }}
      onCreated={({ gl }) => gl.domElement.parentElement?.setAttribute("data-scene-ready", "true")}
    >
      <ambientLight intensity={0.4} />
      <directionalLight position={[5, 8, 4]} intensity={2.2} castShadow shadow-mapSize={[1024, 1024]} />
      <pointLight position={[-4, 2, -2]} intensity={20} color={ORANGE} />
      <Scene />
      <ContactShadows position={[0, -1.62, 0]} opacity={0.5} scale={12} blur={2.6} far={4} />
      <Environment>
        <Lightformer intensity={2} position={[0, 5, 0]} scale={[10, 10, 1]} />
        <Lightformer intensity={1.2} color="#f8b46a" position={[-5, 1, -1]} rotation-y={Math.PI / 2} scale={[20, 1, 1]} />
        <Lightformer intensity={0.8} color="#9cb6ff" position={[5, 1, 1]} rotation-y={-Math.PI / 2} scale={[20, 1, 1]} />
      </Environment>
    </Canvas>
  );
}
