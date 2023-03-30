import React from 'react'
import styled from 'styled-components';
import projects from '../Skills/index.js';
import { motion } from 'framer-motion';



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
  background: white;
`;

const ProjectName = styled.h2`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;
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
  display: flex;
  flex-wrap: wrap;
  margin-top: 10px;

`;


const Section = styled.div`
  overflow: hidden;
`

const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50 px;
  scroll-snap-align: center;
  overflow-y: scroll;
  position: relative;
  z-index: 1;
`;

const Top = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px;
`;

const Title = styled.h1`
  font-size: 30px;
  color: white;
`;


const Bio = styled.div`
  display: flex;
  font-size: 15px;
  color: white;
  align-items: center;
  margin-top: 30px;
  gap: 10px;
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
      <Section >
          <Container >

            <Top>
                <Title>Projects</Title>
                <Bio>
                  Each project description is shown with the attached link in the github
                  repository. Click on the link to view a live demonstration of each site.
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
      <Card whileHover={{ scale: 1.05 }}>
        <div>
          <ProjectName>{project.name}</ProjectName>
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
