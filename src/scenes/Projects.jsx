import React from 'react';
import useMediaQuery from '../hooks/useMediaQuery';
import { motion } from 'framer-motion';
import LineGradient from "../components/LineGradient";

const Projects = () => {
  const isAboveLarge = useMediaQuery('(min-width: 1060px)');

  // Define an array of data for each project pair
  const projectData = [
    {
      imageSrc: 'assets/IR intern screenshot.png',
      title: 'IR Intern Project',
      description: 'This project includes utilizing PowerBi, Qualatics Survey, Web Design with deployment, and Python to manage data and have it appear on the University of Portland website.',
    },
    {
      imageSrc: 'assets/backus agrilabs screenshot.png',
      title: 'Web Design/Development for Backus Agrilabs',
      description: 'Developed a prototype website for a startup research company called Backus Agrilabs. The company\'s mission is to reduce Oregon food deserts within the Oregon metropolitan area - building a platform is one of the fundamental steps to efficiently keep track of the plant\'s status in a user-friendly interface without purely looking at a database. This also includes user authentication and account creation.',
    },
    {
      imageSrc: 'assets/fit guide screenshot.png',
      title: 'Full Stack React Application - FitGuide',
      description: 'This project helped me learn so much about fetching data from different third-party APIs! I asked a few student at the Beauchamp Gym (located in University of Portland) on their favorite exercise and what muscle group it targets. Despite getting a lot of recommendations on various exercises, lot of students don\'t know on the specific muscle group that it targets. That\; when I decided to create a website where it lists out exercises that targets a specific muscle group that a user can search. Or a user can enter in an exercise and see which muscle group it targets.',
    },
    {
      imageSrc: 'assets/expenses tracker screenshot.png',
      title: 'CRUD Application - Expenses Tracker',
      description: 'For this project, I used Firebase, Tailwind, Vercel, and Next.js to make this application possible. I mainly looked at Firebase Firestore to look at the different documentations on CRUD that allows users to create an item with an associated price. It can also consistently reflect the changes made in the database from the user interface.',
    },
    {
      imageSrc: 'assets/water plant dispenser circuit pic.jpg',
      title: 'Internet of Things - Water Plant Dispenser',
      description: 'The Arduino ESP32 Water Plant Dispenser, integrated with Blynk, is a user-friendly solution that combines technology and plant care. It employs the powerful ESP32 microcontroller to provide remote control and monitoring of plant watering. Users can easily switch between manual and automatic modes through the Blynk app, which displays real-time soil moisture data and allows control over the water pump motor in manual mode. In automatic mode, the system intelligently waters the plants based on customizable moisture thresholds, offering a precise and efficient way to care for plants.',
    },
    {
      imageSrc: 'assets/pomodoro-screenshot.png',
      title: 'Web Application - Pomodoro Web App',
      description: 'For this project, I used HTML, CSS, and Javascript with Youtube IFrameAPI to create a pomodoro website that shows a todo-list and a timer for the user to use. The users can also add and delete items from their own personal todo-list. There\'s also an embedded Youtube tutorial on how to use the application, with additional steps on how to use it effectively.',
    },
    
  ];

  return (
    <div
      id="projects"
      className={`min-h-screen flex flex-col justify-center align-center pt-28`}
    >
      <motion.div
        className={`w-full mx-auto`} // Center horizontally
        style={{ textAlign: 'center' }} // Center vertically
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        <p className="font-playfair font-semibold text-6xl mb-8">
          PROJECTS
        </p>
      </motion.div>


      <LineGradient width="w-4/5 mx-auto" />
      {/* Add space underneath LineGradient */}
      <div className="my-8"></div>


      {projectData.map((project, index) => (
        <div
          key={index}
          style={{ marginBottom: isAboveLarge ? '50px' : '0' }}
        >
          {isAboveLarge ? (
            <>
              {/* Image on the left, text on the right */}
              <div className="w-full order-1">
                <img
                  src={project.imageSrc}
                  alt={`Project ${index + 1}`}
                  className="max-w-full h-auto mx-auto" // Center the image
                />
              </div>
              <div className="w-full p-8 mx-auto"> {/* Center the text */}
                <h1 className="text-4xl font-bold">{project.title}</h1>
                <p className="text-lg mt-4">{project.description}</p>
              </div>
            </>
          ) : (
            <>
              {/* Image above, text below */}
              <div className="w-full">
                <img
                  src={project.imageSrc}
                  alt={`Project ${index + 1}`}
                  className="max-w-full h-auto mx-auto" // Center the image
                />
              </div>
              <div className="w-full p-8 text-center mx-auto"> {/* Center the text */}
                <h1 className="text-4xl font-bold">{project.title}</h1>
                <p className="text-lg mt-4">{project.description}</p>
              </div>
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default Projects;