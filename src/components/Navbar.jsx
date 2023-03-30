import React from 'react'
import styled from 'styled-components';


const Section = styled.div`
    display: flex;
    justify-content: center;


`;

const Container = styled.div`
    width: 1400px;
    display flex;
    justify-content: space-between;
    align-items: center;
    background-color: clear;
    padding: 10px 0px;
`;

const Links = styled.div`
    display: flex;
    align-items: center;
    gap: 50px;
`;

const Logo = styled.img`
    height: 130px;
`;


const List = styled.ul`
    display: flex;
    gap: 20px;
    list-style: none;
    cursor: pointer;
    position: absolute;
    top: 40px;
    right:1150px;
`;


const ListItem = styled.li`
    cursor: pointer;
    color: white;
`;

const Icons = styled.div`
    display: flex;
    align-items: center;
    gap: 5px;
`;


const Icon = styled.img`
    height: 20px;
    cursor: pointer;
    position: relative;
    top: -20px;
`;


const Button = styled.button`
    width: 100px;
    padding: 5px;
    background-color: black;
    color: white;
    border: none;
    border-radius; 30px;
    cursor: pointer;
    position: relative;
    top: -20px;
    left: 0;


`;




const Navbar = () => {
    return (
        <Section>
            <Container>
                <Links>
                    <Logo src="./VR.png" />
                    <List>
                        <ListItem>Projects</ListItem>
                        <ListItem>Resume</ListItem>
                        <ListItem>Contact</ListItem>
                    </List>
                </Links>
                    <Icons>
                        <Icon src="./glass.png"/>
                        <Button>Contact Me</Button>
                    </Icons>
            </Container>
        </Section>
    )
}

export default Navbar
