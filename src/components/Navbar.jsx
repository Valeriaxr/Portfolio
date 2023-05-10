import React from 'react';
import { Link } from 'react-scroll';
import styled from 'styled-components';




const Section = styled.div`
  position: fixed;
  top: 0;
  z-index: 1;
  display: flex;
  justify-content: center;
  margin-left: 90px;

  @media only screen and (max-width: 768px) {
    width: 100%;
    margin-left: 4%;
  }
`;

const Container = styled.div`
  width: 1400px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: transparent;
  padding: 10px 0px;

  @media only screen and (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 10px;

  }
`;

const Links = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;

  @media only screen and (max-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    gap: 15px;
  }
`;

const NavbarLink = styled(Link)`
  color: white;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    color: #3a3a3a;
  }


  @media only screen and (max-width: 768px) {
    display: block;
    padding: 3px;
    font-size: 14px;
    margin-right: 38px;

    &:last-child {
      margin-right: -80;
    }
  }
`;

const Navbar = () => {
  return (
    <Section>
      <Container>
        <Links>
          <NavbarLink to="hero" smooth={true} duration={500}>
            Home
          </NavbarLink>
          <NavbarLink to="projects" smooth={true} duration={500}>
            Projects
          </NavbarLink>
          <NavbarLink to="resume" smooth={true} duration={500}>
            Resume
          </NavbarLink>
          <NavbarLink to="contact" smooth={true} duration={500}>
            Contact
          </NavbarLink>
        </Links>
      </Container>
    </Section>
  );
};

export default Navbar;
