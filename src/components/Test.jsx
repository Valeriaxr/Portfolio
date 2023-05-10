import { Canvas } from '@react-three/fiber';
import { Environment, OrbitControls} from '@react-three/drei';
import React from 'react';
import styled from 'styled-components';
import Butterflies from './Butterflies';

const Container = styled.div`
  height: 100vh;
  width: 100%;
  scroll-snap-align: center;
`;


const Test = () => {
    return (
        <Container>
            <Canvas>
            <spotLight position={[0, 23, 0]} angle={1.3} penumbra={1} castShadow intensity={1} shadow-bias={-0.0001} />
            <ambientLight intensity={2} />
            <Environment preset='warehouse'/>

                <OrbitControls enableZoom={true} />
                <directionalLight position={[3,8,1]} />
                {/* <Butterfly rotation-x={Math.PI * 0.05} scale={0.05} position={[0,-2.5,0]}/>
                <Butterfly scale={7} position={[-10,-3,-6]}/>
                <Butterfly scale={7} position={[10,-4,-10]}/> */}
                <Butterflies scale={7} position={[12,-14,-10]}/>

            </Canvas>

        </Container>

    );
};

export default Test;
