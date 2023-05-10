import Contact from "./components/Contact"
import Hero from "./components/Hero"
import Resume from "./components/Resume"
import Projects from "./components/Projects"
import styled from 'styled-components';







const Container = styled.div`
  min-height: 100vh;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  overflow-y: auto;
  background-color: rgb(10, 0, 5);
  scrollbar-width: none;
  &::-webkit-scrollbar{
    display: none;
  }
`;




function App() {

  return (

    <Container>
      <Hero />
      <Projects />
      <Resume />
      <Contact />
    </Container>
  );
}

export default App;
