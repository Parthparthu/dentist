"use client";

import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { 
  Environment, 
  Float, 
  MeshTransmissionMaterial, 
  ContactShadows,
  Lightformer
} from "@react-three/drei";
import * as THREE from "three";

import { RoundedBox } from "@react-three/drei";

// A premium, highly realistic procedural 3D tooth mimicking a 3-rooted molar
function RealisticTooth(props: any) {
  const groupRef = useRef<THREE.Group>(null);

  // Generate a seamless procedural 4-rooted molar geometry that perfectly matches the reference
  const toothGeometry = React.useMemo(() => {
    // Ultra-high poly for a perfectly smooth, premium porcelain look
    const geo = new THREE.IcosahedronGeometry(1, 200); 
    const posAttribute = geo.attributes.position;
    const v = new THREE.Vector3();
    
    for (let i = 0; i < posAttribute.count; i++) {
      v.fromBufferAttribute(posAttribute, i);
      
      let x = v.x;
      let y = v.y;
      let z = v.z;
      
      let r = Math.sqrt(x * x + z * z);
      let theta = Math.atan2(z, x);
      
      // lobes is 1 at the 4 corners (the roots/cusps), and -1 at the 4 flat sides (the gaps)
      const lobes = Math.cos(4 * theta); 
      
      if (y > 0) {
        // --- Crown (Top Half) ---
        y *= 0.6; // Flatten the overall top hemisphere
        
        // Create the bulbous, plump crown with smooth vertical grooves that flow into the root gaps
        const groove = Math.max(0, -lobes) * 0.15 * (1.0 - y); // Grooves are deepest at the neck, fade near the top
        r *= 1.35 - groove;
        
        // 4 ultra-smooth rolling cusps
        const edgeFactor = Math.pow(Math.min(1, r / 1.35), 2); // 0 at center, 1 at edge
        const cuspHeight = Math.max(0, lobes); 
        
        // Raise the corners gently to form cusps
        y += cuspHeight * edgeFactor * 0.2;
        
        // Create a gentle, very shallow basin in the center
        y -= (1 - edgeFactor) * 0.1;
        
      } else {
        // --- Roots (Bottom Half) ---
        const rootFactor = Math.abs(y); // 0 at gumline (neck), 1 at bottom tip
        
        // Neck constriction (creates that beautiful 'waist' before the roots flare)
        r *= 0.9 + (0.1 * Math.cos(rootFactor * Math.PI * 0.5));
        
        // Pinch the 4 sides extremely deeply to separate the 4 roots perfectly
        const pinch = Math.max(0, -lobes); 
        const pinchDepth = Math.pow(rootFactor, 0.4) * 0.98; // Pinch gets very deep quickly
        r *= 1.0 - (pinch * pinchDepth);
        
        // Taper the roots gracefully to smooth, rounded points
        r *= 1.0 - (Math.pow(rootFactor, 1.8) * 0.6);
        
        // Add a prominent outward flare/splay to the roots so they spread elegantly like the reference
        r += Math.max(0, lobes) * Math.sin(rootFactor * Math.PI) * 0.3;
        
        // Elongate the roots downwards
        y *= 1.7;
      }
      
      // Convert cylindrical back to cartesian coordinates
      x = r * Math.cos(theta);
      z = r * Math.sin(theta);
      
      posAttribute.setXYZ(i, x, y, z);
    }
    
    geo.computeVertexNormals();
    return geo;
  }, []);

  useFrame((state) => {
    if (groupRef.current) {
      // Dynamic, highly responsive mouse reaction
      // Rotation
      const targetRotX = (state.pointer.y * Math.PI) / 4;
      const targetRotY = (state.pointer.x * Math.PI) / 4 + state.clock.getElapsedTime() * 0.5;
      groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, targetRotX, 0.08);
      groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, targetRotY, 0.08);
      
      // Position (floating towards mouse)
      const targetPosX = state.pointer.x * 0.8;
      const targetPosY = state.pointer.y * 0.8;
      groupRef.current.position.x = THREE.MathUtils.lerp(groupRef.current.position.x, targetPosX, 0.05);
      groupRef.current.position.y = THREE.MathUtils.lerp(groupRef.current.position.y, targetPosY, 0.05);
    }
  });

  return (
    <group {...props}>
      <Float speed={2.5} rotationIntensity={0.2} floatIntensity={1.5}>
        <group ref={groupRef}>
          <mesh geometry={toothGeometry} scale={0.9} castShadow receiveShadow>
            <meshPhysicalMaterial 
              color="#ffffff" 
              roughness={0.08} 
              metalness={0.05} 
              clearcoat={1} 
              clearcoatRoughness={0.02} 
              envMapIntensity={2.5}
            />
          </mesh>
        </group>
      </Float>
    </group>
  );
}

export default function HeroScene() {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none">
      <Canvas 
        camera={{ position: [0, 0, 6], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
        dpr={[1, 2]}
      >
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
        
        {/* Position the object to the right on desktop, center on mobile */}
        <group position={[0, 0, 0]} rotation={[0, -0.2, 0]}>
          <RealisticTooth />
        </group>

        {/* Soft shadow on the "floor" */}
        <ContactShadows 
          position={[0, -2.5, 0]} 
          opacity={0.4} 
          scale={10} 
          blur={2.5} 
          far={4} 
          color="#0f766e" 
        />

        {/* Custom lighting environment for the glass refraction */}
        <Environment resolution={256}>
          <group rotation={[-Math.PI / 4, -0.3, 0]}>
            <Lightformer intensity={4} rotation-x={Math.PI / 2} position={[0, 5, -9]} scale={[10, 10, 1]} />
            <Lightformer intensity={2} rotation-y={Math.PI / 2} position={[-5, 1, -1]} scale={[20, 0.1, 1]} />
            <Lightformer rotation-y={Math.PI / 2} position={[-5, -1, -1]} scale={[20, 0.5, 1]} />
            <Lightformer rotation-y={-Math.PI / 2} position={[10, 1, 0]} scale={[20, 1, 1]} color="#0f766e" />
          </group>
        </Environment>
      </Canvas>
    </div>
  );
}
