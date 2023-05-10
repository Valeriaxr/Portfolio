import React from 'react'
import styled from 'styled-components';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import "react-vertical-timeline-component/style.min.css";
import experience from '../skills/experience';



const Section = styled.div`
  scroll-snap-align: center;
  color: white;
  font-size: 20px;
  margin-left: 25px;
  margin-top: 290px;
  display: flex;
  overflow-y: scroll;
  postion: flex;
`;


// const SectionHeadText = styled.h2`
//   font-size: 36px;
//   font-weight: bold;
//   color: #333;
// `;

const TimelineContent = styled.div`
  background: #1d1836;
  color: #fff;
  padding: 20px;
  border-radius: 5px;
`;

const TimelineDate = styled.p`
  font-size: 14px;
  color: #888;
  margin-bottom: 5px;

  @media (max-width: 768px) {

    margin-left: 30px;


  }
`;

const TimelineTitle = styled.h3`
  font-size: 24px;
  font-weight: bold;
  color: #fff;
  margin-bottom: 10px;
`;

const TimelineSubtitle = styled.p`
  font-size: 16px;
  font-weight: 600;
  color: #ccc;
  margin-bottom: 20px;
`;

const TimelinePoint = styled.li`
  font-size: 14px;
  color: #fff;
  margin-left: 10px;
  margin-bottom: 5px;
`;


const IconContainer = styled.div`
  overflow: hidden;


  @media (max-width: 768px) {
    display: none;


  }

`;




const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{ background: '#1d1836', padding: 0, color: '#fff' }}
      contentArrowStyle={{ borderRight: '7px solid #232631' }}
      date={<TimelineDate>{experience.date}</TimelineDate>}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className="flex justify-center items-center w-full h-full rounded-full overflow-hidden">
        <IconContainer>
          <img
            src={experience.icon}
            alt={experience.company_name}
            style={{ width: '50px', height: '50px', paddingTop: "11px", paddingRight: '0%', paddingLeft: '15%', paddingBottom: '1px'}}
          />
        </IconContainer>
        </div>

      }
    >
      <TimelineContent>

        <TimelineTitle className='text-white text-[24px] font-bold'>{experience.title}</TimelineTitle>

        <TimelineSubtitle className='text-secondary text-[16px] font-semibold'
          style={{ margin: 0,  marginTop: '-10px'}}>{experience.company_name}</TimelineSubtitle>
        <ul className='mt-5 list-disc ml-5 space-y-2'  style={{ marginTop: '10px' }}>
          {experience.points.map((point, index) => (
            <TimelinePoint className='text-white-100 text-[14px] pl-1 tracking-wider' key={`experience-point-${index}`}>
              {point}
            </TimelinePoint>
          ))}
        </ul>
      </TimelineContent>
    </VerticalTimelineElement>
  );
};



const Resume = () => {


  if (!Array.isArray(experience)) {
    return null;
  }
  return (
    <Section id="resume">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {/* <SectionHeadText text-center>Resume</SectionHeadText> */}
          </motion.div>

          <VerticalTimeline className='mt-20 flex flex-col'>
            {experience.map((experience, index) => (
              <ExperienceCard
                key={`experience-${index}`}
                experience={experience}
              />
            ))}
      </VerticalTimeline>
    </Section>
  );
};


export default Resume;
