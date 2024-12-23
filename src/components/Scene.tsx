import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Environment, Float } from '@react-three/drei';
import * as THREE from 'three';

export function Scene() {
    const tableRef = useRef<THREE.Group>(null);
    useFrame((state) => {
        if (tableRef.current) {
            tableRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.2;
        }
    });
    return (
        <>
            <Environment preset="sunset" />
            <ambientLight intensity={0.5} />
            <directionalLight position={[10, 10, 5]} intensity={1} />

            <Float
                speed={1.5}
                rotationIntensity={0.5}
                floatIntensity={0.5}
            >
                <group ref={tableRef}>
                    <mesh position={[0, 0, 0]} castShadow>
                        <boxGeometry args={[2, 0.1, 1]} />
                        <meshStandardMaterial color="#8B4513" />
                    </mesh>

                    {/* Wine Glass */}
                    <mesh position={[-0.5, 0.3, 0]} castShadow>
                        <cylinderGeometry args={[0.1, 0.1, 0.3, 32]} />
                        <meshStandardMaterial color="#87CEEB" transparent opacity={0.6} />
                    </mesh>

                    {/* Plate */}
                    <mesh position={[0.5, 0.15, 0]} castShadow>
                        <cylinderGeometry args={[0.3, 0.3, 0.05, 32]} />
                        <meshStandardMaterial color="white" />
                    </mesh>
                </group>
            </Float>
        </>
    );
}