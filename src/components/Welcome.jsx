// import React, { useState, useEffect } from 'react';
// import TypeIt from 'typeit-react';
// import styled from 'styled-components';


// const Container = styled.div`
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     height: 100vh;
//     font-color: white;
// `;

// const WelcomePage = () => {
//   const [typed, setTyped] = useState(false);
//   const [name, setName] = useState('');

//   useEffect(() => {
//     const timeoutId = setTimeout(() => {
//       window.location.href = '/';
//     }, 5000);
//     return () => clearTimeout(timeoutId);
//   }, []);

//   const handleTypingEnd = () => {
//     setTyped(true);
//   }

//   const handleNameChange = (event) => {
//     const setName = event.target.value;
//     setName(newName);
//   }

//   console.log("Name:", name);



//   return (
//     <Container>
//       <TypeIt
//         onEnded={handleTypingEnd}
//         options={{ delay: 100 }}
//         getBeforeInit={(instance) => {
//           instance.type('Type in your name');
//           return instance;
//         }}
//       />
//       {typed && <p>Welcome {name}!</p>}
//       {typed && <input type='text' value={name} onChange={handleNameChange} />}
//       </Container>
//   );
// };

// export default WelcomePage;
