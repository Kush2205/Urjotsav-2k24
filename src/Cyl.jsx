import React, { useRef, useEffect, useState } from 'react'
import { useTexture } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

const Cyl = () => {
    const tex = useTexture('./sponsors.png');
    const cyl = useRef(null);
    const rotationSpeed = 0.0035;

    const [radius, setRadius] = useState(2); // Initial radius
    const [height, setHeight] = useState(0.5); // Initial height

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 768) {
                // Smaller radius and height for mobile screens
                setRadius(3.7);
                setHeight(1.2);
            } else if (window.innerWidth <= 1024) {
                // Medium radius and height for tablet screens
                setRadius(3);
                setHeight(0.95);
            } else {
                // Adjusted height for desktop screens
                setRadius(5.0);
                setHeight(1.4); // Reduced height
            }
        };

        window.addEventListener('resize', handleResize);
        handleResize(); // Set the initial radius and height based on current screen size
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useFrame(() => {
        cyl.current.rotation.y += rotationSpeed;
    });

    return (
        <group position={[0, 0, 0]} rotation={[-0.24, 1.6, 0.25]}>
            <mesh ref={cyl}>
                <cylinderGeometry args={[radius, radius, height, 60, 60, true]} />
                <meshStandardMaterial map={tex} transparent side={THREE.DoubleSide} />
            </mesh>
        </group>
    );
}

export default Cyl;
