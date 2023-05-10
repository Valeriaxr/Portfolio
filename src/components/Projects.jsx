import React from 'react'
import styled from 'styled-components';
import projects from '../skills/projects.js';
import { motion } from 'framer-motion';
// import Butterflies from "./Butterflies";
// import { Canvas } from '@react-three/fiber';
// import { Environment, OrbitControls, Stage, Float } from '@react-three/drei';





const Card = styled(motion.div)`
  height: 250px;
  width: 350px;
  color: black;
  border-radius: 10px;
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px;
  margin-top: -20px;
  background: white;

  @media only screen and (max-width: 768px) {

    border-radius: 5%;
    padding: 5px;

  }
`;

const ProjectName = styled.h2`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;
  color: #1D1836;
`;

const ProjectDescription = styled.p`
  font-size: 14px;
  color: #333;
  margin-bottom: 10px;
`;

const Tag = styled.span`
  font-size: 12px;
  color: black;
  background-color: ${(props) => props.color};
  padding: 5px 10px;
  border-radius: 5px;
  margin-right: 5px;
`;

const TagsContainer = styled.div`
  flex-wrap: wrap;
`;


const Section = styled.div`
  overflow: hidden;
  margin-top: -30px;

`

const Container = styled.div`
  margin: 0 auto;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
  scroll-margin-top: 100px;
  scroll-snap-align: center;
  overflow-y: scroll;
  scrollbar-width: none;
  position: relative;
  overflow-x: hidden;
  z-index: 1;


  @media only screen and (max-width: 768px) {

    overflow-x: hidden;

  }



`;

const Top = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px;
  margin-top: 30px;
  scroll-margin-top: 100px;

  @media only screen and (max-width: 768px) {

    overflow-x: hidden;

  }

`;

const Title = styled.h1`
  font-size: 40px;
  color: white;


  @media only screen and (max-width: 768px) {

    overflow-x: hidden;

  }

`;


const Bio = styled.div`
  display: flex;
  font-size: 18px;
  color: white;
  align-items: center;
  margin-top: 35px;
  justify-content: space-between;


  @media only screen and (max-width: 768px) {

    text-align: center;

  }
`;

const Bottom = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 30px;
  margin-top: 90px;

`;



const Projects = () => {


  return (
      <Section id='projects' >
          <Container>
            <Top>
                <Title>Projects</Title>
                <Bio>
                  My projects demonstrate my
                  skills in various web development frameworks including React, Three.js
                  and FastApi.
                  Each project description is accompanied by a link to the corresponding GitHub
                  repository, where you can view the source code, contribute, or even use it as a
                  starting point for your own project. I regularly update the page with modifications
                  to existing projects and the addition of new ones, so be sure to check back often to see what's new.
                </Bio>
            </Top>
            <Bottom>
              {projects.map((project, index) => (
                <ProjectCard key={index} project={project} />
              ))}
            </Bottom>
        </Container>
      </Section>
    )
}


const ProjectCard = ({ project }) => {
  return (

    <a href={project.source_code_link} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
      <Card whileHover={{ scale: 1.05 }} style={{ marginBottom: '20px'}}>
        <div>
          <ProjectName style={{ color: '#3c325c' }}>{project.name}</ProjectName>
          <ProjectDescription>{project.description}</ProjectDescription>
        </div>

        <TagsContainer>
          {project.tags.map((tag, index) => (
            <Tag key={index} color={tag.color}>
              {tag.name}
            </Tag>
          ))}
        </TagsContainer>
      </Card>
    </a>
  );
};

export default Projects;
