import { OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from '@react-three/fiber';
import React from 'react';
import Earth from './Earth';
import { Suspense } from "react";




const EarthThree= () => {
    return (
        <>
        <Canvas>
            <Suspense fallback={null}>
            <Stage environment="city" intensity={0.6}>
            <Earth/>
            </Stage>
            <OrbitControls enableZoom={false} />
            </Suspense>
        </Canvas>
        </>
    );
};



export default EarthThree;
