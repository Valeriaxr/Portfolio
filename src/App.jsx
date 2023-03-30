import Contact from "./components/Contact"
import Hero from "./components/Hero"
import Resume from "./components/Resume"
import Projects from "./components/Projects"
import Test from "./components/Test"
import styled from 'styled-components';
import './components/index.css';
import { OrbitControls, Stars } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';





const Container = styled.div`
  min-height: 100vh;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  overflow-y: auto;
  background-color: black;
  scrollbar-width: none;
  &::-webkit-scrollbar{
    display: none;
  }
`;

const CanvasContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
`;



function App() {

  return (
    <>
   <CanvasContainer>
    <Canvas >
        <Stars />
        <OrbitControls enableZoom={false} />
      </Canvas>
    </CanvasContainer>
    <Container>
        <Hero/>
        <Projects />
        <Resume/>
        <Contact/>
        <Test/>
      </Container>
    </>
  );
}

export default App;




// scroll-snap-type: y mandatory;
// scroll-behavior: smooth;
// scroll-snap-align: center;
