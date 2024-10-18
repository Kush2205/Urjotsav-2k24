import React from 'react'
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from "three"
import Cyl from "../Cyl";
import { Bloom, EffectComposer, ToneMapping } from '@react-three/postprocessing'


export default function Sponsors(props) {
    return (
        <>
        <div className='flex flex-col h-[100vh] bg-black bg-opacity-30'>
            <h3 className="font-Space text-center font-semibold text-3xl md:mb-[-6%] lg:mb-[3] md:text-4xl lg:text-5xl text-white">
                     OUR SPONSORS
            </h3>
            <div className='mb-14 h-full'>
                <Canvas camera={{ fov: 35, position: [0, 0, 10] }} className='h-full'>
                    <ambientLight />
                    <Cyl />
                    <EffectComposer>
                        <Bloom intensity={0.8} luminanceThreshold={0} luminanceSmoothing={0} />
                        <ToneMapping adaptive />
                    </EffectComposer>
                </Canvas>
            </div>  
        </div>
        </>
    )
}
