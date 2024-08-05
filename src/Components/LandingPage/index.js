// src/components/LandingPage.js

import React from 'react';
import BoxComponent from '../boxComponent';
import Logo from '../../assets/image1.png';
import Logo2 from '../../assets/image2.png'
import Logo3 from '../../assets/image3.png'
import Logo4 from '../../assets/image4.png'
import Logo5 from '../../assets/image5.png'
import Logo6 from '../../assets/image6.png'
import MyNavbar from '../Navbar/Navbar';

import FooterSection from '../Footer';
import VideoBoxComponent from '../Videobox';
import './index.css'
const content = {
  button: 'Start Now',
  order: 'box-order-2',
  image: { src: Logo, alt: 'Logo' },
  heading: 'AI Voice Assistant for Teachers and Students',
  paragraph: `Welcome to the future of education with Aishaala, the revolutionary AI voice assistant crafted to elevate the learning experience for both teachers and students. 
  Poweredby Mobishaala Technologies, Aishaala brings unparalleled efficiency and personalization to educational settings.`
};

const content2 = {
  button: 'Get Started',
  order: 'box-order-1',
  image: { src: Logo2, alt: 'Logo2' },
  heading: 'Intelligent Teaching Support',
  paragraph: `Aishaala offers real-time voice and chat assistance for teachers, simplifying lesson planning and classroom management. 
  With its personalized training and multilingual capabilities, Aishaala customizes lesson plans to fit unique teaching needs and supports various languages, 
  making education more accessible and effective.`
};

const content3 = {
  button: 'Get Started',
  order: 'box-order-2',
  image: { src: Logo3, alt: 'Logo3' },
  heading: 'Personalized Student Assistance',
  paragraph: `Enhance learning with Aishaala’s student-focused features. Our AI provides tailored help and a revision mode that adapts to each student’s learning style. 
  Interactive Q&A and writing assistance empower students with instant answers and valuable feedback, making study sessions more productive and engaging.`
};

const content4 = {
  button: 'Get Started',
  order: 'box-order-1', // Adjust this if you want a different order
  image: { src: Logo4, alt: 'Logo4' }, // Replace with the actual image source
  heading: 'Effortless Navigation of Knowledge',
  paragraph: `Aishaala streamlines access to a vast array of educational resources. Students can use voice commands to easily navigate through videos, books, notes, and test papers. 
  This capability enables quick location of relevant content and efficient management of diverse study materials.`
};

const content5 = {
  button: 'Get Started',
  order: 'box-order-2', // Adjust this if you want a different order
  image: { src: Logo5, alt: 'Logo5' }, // Replace with the actual image source
  heading: 'Customized Knowledge Integration',
  paragraph: `Integrate specialized knowledge seamlessly with Aishaala. Our AI assistant is fine-tuned to align with specific curricula and institutional needs, 
  ensuring that the content delivered is relevant and tailored to the educational focus of your institution.`
};

const content6 = {
  button: 'Get Started',
  order: 'box-order-1', // Adjust this if you want a different order
  image: { src: Logo6, alt: 'Logo6' }, // Replace with the actual image source
  heading: 'Engaging Adaptive Testing',
  paragraph: `Revolutionize test preparation with Aishaala’s adaptive testing feature. The AI provides dynamic quizzes and practice sessions that adjust in real-time to students’ performance. 
  Gamified elements make learning enjoyable while effectively assessing and enhancing student capabilities.`
};

  
  

const LandingPage = () => {
  return (
     <div className='landingpage'>
    <MyNavbar/>
    <VideoBoxComponent content={content} />
    <BoxComponent content={content2} />
    <BoxComponent content={content3} />
    <BoxComponent content={content4} />
    <BoxComponent content={content5} />
    <BoxComponent content={content6} />
    <FooterSection/>
    </div>
  );
};

export default LandingPage;
