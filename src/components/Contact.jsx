import styled from 'styled-components';
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';



const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;

`

const Container = styled.div`
    width: 100%;
    height: 100%;
    display flex;
    justify-content: space-between;
    gap: 50px;

`;


const Cent = styled.div`
  flex: 1;
  display flex;
  align-items: center;
  justify-content: center;
  @media only screen and (max-width: 768px) {
    justify-content: center;
  }
`;


const Title = styled.h1`
  font-weight: 200;
  color: white;
`;

const Form = styled.form`
  width: 500px;
  display: flex;
  flex-direction: column;
  gap: 25px;

  @media only screen and (max-width: 768px) {
    width: 300px;
  }
`;


const Input = styled.input`
  padding: 20px;
  border: none;
  background-color: white;
  border-radius: 5px;
`;


const TextArea = styled.textarea`
  padding: 20px;
  border: none;
  border-radius: 5px;
`;


const Button = styled.button`
  background-color: #1D1836;
  color: white;
  border: none;
  font-weight: bold;
  cursor: pointer;
  border-radius: 5px;
  padding: 20px;



`;



const Contact = () => {

  const ref = useRef()
  const [success, setSuccess] = useState(null)

  const handleSubmit =e=>{
    e.preventDefault()


    emailjs.sendForm('service_j6djqiz', 'template_miksu4q', ref.current, 'sfLvfIAeMkkpqa_xH')
    .then((result) => {
        console.log(result.text);
        setSuccess(true)

    }, (error) => {
        console.log(error.text);
        setSuccess(false)
    });
  };


  return (

    <Section id="contact">
        <Container>
          <Cent>
            <Form ref={ref} onSubmit={handleSubmit}>
              <Title>Contact Me</Title>
              <Input placeholder="Name" name="name"/>
              <Input placeholder="Email" name="email" />
              <TextArea placeholder="Write your message" name="message" rows={10} />
              <Button type="submit">Send</Button>
              {success && (
                <div style={{ color: "white" }}>
                  Your message has been sent!
                </div>
              )}
            </Form>
          </Cent>
        </Container>
        </Section>

  )
}

export default Contact;
