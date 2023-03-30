import React from 'react'
import styled from 'styled-components';
import Navbar from "./Navbar";
import Earth from "./Earth"
import { Canvas } from '@react-three/fiber';
import { OrbitControls} from '@react-three/drei';

const Section = styled.div`
  height: calc(100vh - 80px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  position: relative;
  overflow: hidden;
  background-color: #000;
  position: relative;
`;


const Container = styled.div`
    height: 100vh;
    scroll-snap-align: center;
    width: 1400px;
    display: flex;
    justify-content: space-between;
`;

const Left = styled.div`
    flex: 2;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 20px;
`;

const Title = styled.h1`
    font-size: 74px;
    color: white;
`;


const Bio = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`;


const Line = styled.img`
    height: 5px;
`;

const Subtitle = styled.h2`
    color: white;
`;


const Desc = styled.p`
    font-size: 24px;
    color: lightgray;
`;

const Button = styled.button`
    background-color: white;
    font-weight: 500;
    width: 100px;
    padding: 10px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
`;


const Right = styled.div`
    flex: 3;
    position: relative;

`;


// const Img = styled.img`
//     width: 350px;
//     height: 350px;
//     object-fit: contain:
//     postion: absolute;
//     top: 0;
//     bottom: 0;
//     left: 0;
//     right: 0;
//     margin: auto;
//     animation: animate 2s infinite ease alternate;
//     z-index: 1;

//     @keyframes animate {
//         to{
//             transform: translateY(35px);
//         }
//     }

// `;


const Hero = () => {

    return (
        <Section>
            <Navbar >
            <Container>
                <Left>
                    <Title>Valeria's Portfolio</Title>
                    <Bio>
                        <Line></Line>
                        <Subtitle>Fullstack Software Developer</Subtitle>
                    </Bio>
                    <Desc>React, JavaScript, Python</Desc>
                    <Button>Contact Me</Button>
                </Left>
                <Right>
                    <Canvas>
                        <OrbitControls enableZoom={false} />
                        <mesh>
                            <Earth />
                        </mesh>
                    </Canvas>
                </Right>
            </Container>
            </Navbar>
        </Section>
    )
}

export default Hero
