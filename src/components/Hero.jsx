import React from "react";
import styled from "styled-components";
import Navbar from "./Navbar";
// import Butterflies from "./Butterflies";
// import { Canvas } from '@react-three/fiber';
// import { OrbitControls, Stage, Float } from '@react-three/drei';


const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: auto;
  justify-content: space-between;

  @media only screen and (max-width: 768px) {
    height: 100vh;
    overflow-x: hidden;
  }
`;


const Container = styled.div`
  height: 100%;
  scroll-snap-align: center;
  width: 1400px;
  display: flex;
  justify-content: space-between;

  @media only screen and (max-width: 768px) {
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

const Mid = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 15px;
  margin-left: 90px;
  margin-right: 50px;
  align-items: center;
  justify-content: center;

  @media only screen and (max-width: 768px) {
    flex: 1;
    align-items: center;
    width: 150%;
  }
`;

const Title = styled.h1`
  font-size: 50px;
  color: white;
  line-height: 0.7;

  @media only screen and (max-width: 768px) {
    text-align: center;
    width: 90%;
    margin-left: -30px;
    font-size: 40px;
  }
`;

const Sub = styled.div`
  display: flex;
  font-size: 15px;
  align-items: center;
  gap: 10px;
`;


const Subtitle = styled.h2`
  color: #1D1836;

  @media only screen and (max-width: 768px) {

    margin-left: -25px;

  }
`;

const Desc = styled.p`
  font-size: 20px;
  color: white;
  width: 55%;
  line-height: 1.3;
  text-align: center;

  @media only screen and (max-width: 768px) {
    padding: 20px;
    text-align: center;
    margin-right: 30px;

  }
`;

const Button = styled.button`
  background-color: #1D1836;
  color: white;
  font-weight: 500;
  width: 100px;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  z-index: 999;


  @media only screen and (max-width: 768px) {
    padding: 15px;
    text-align: center;
    margin-right: 30px;

  }
`;


// const ButterContainer = styled.div`
//   position: absolute;
//   bottom: 55%;
//   right: 15%;

//   @media only screen and (max-width: 768px) {
//     height: 58vh;
//     right: 3%;

//   }
// `

// const ButterContainerTwo = styled.div`
//   position: absolute;
//   bottom: 30%;
//   right: 69%;

//   @media only screen and (max-width: 768px) {
//     display: none;

//   }
// `



const pageSelect = (selector) => {
  console.log("clicked:", selector);
  const element = document.querySelector(selector);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};



const Hero=()=> {

  return (
    <>
    <Section id='hero'>
      <Navbar />
      <Container>
        <Mid>
          <Title>Valeria&nbsp;Ramirez</Title>
          <Sub>
            <Subtitle>Software Developer</Subtitle>
          </Sub>
          <Desc>
            I'm a full-stack software developer with experience in a variety of technologies.
            I'm passionate about developing scalable and efficient web applications, and I'm skilled
            in using domain-driven design principles to create robust and maintainable systems.
          </Desc>
          <Button onClick={() => pageSelect('#contact')}>Contact Me</Button>
        </Mid>


      {/* <ButterContainer>
        <Canvas camera={{ position: [0, 0, 0.1] }}>
            <ambientLight intensity={0.5} />
            <Stage environment="city" intensity={0.9}>
              <Float
                  speed={2} // Animation speed, defaults to 1
                  rotationIntensity={4} // XYZ rotation intensity, defaults to 1
                  floatIntensity={9} // Up/down float intensity, works like a multiplier with floatingRange,defaults to 1
                  floatingRange={[1, 1]} // Range of y-axis values the object will float within, defaults to [-0.1,0.1]
                >
                <Butterflies scale={3} position={[18,-3, 6]}/>
              <OrbitControls enableZoom={false} />
              </Float>
          </Stage>
        </Canvas>
      </ButterContainer>

      <ButterContainerTwo>
        <Canvas>
            <ambientLight intensity={0.5} />
            <Stage environment="park" intensity={0.6}>
              <Float
                  speed={2} // Animation speed, defaults to 1
                  rotationIntensity={2} // XYZ rotation intensity, defaults to 1
                  floatIntensity={7} // Up/down float intensity, works like a multiplier with floatingRange,defaults to 1
                  floatingRange={[1, 1]} // Range of y-axis values the object will float within, defaults to [-0.1,0.1]
                >
                <Butterflies position={[-70,-90,-85]}/>
              <OrbitControls enableZoom={false} />
            </Float>
          </Stage>
        </Canvas>
      </ButterContainerTwo> */}
      </Container>
    </Section>
  </>
  );
};


export default Hero;
