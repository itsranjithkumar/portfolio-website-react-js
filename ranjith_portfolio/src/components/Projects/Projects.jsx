import React from 'react';
import './Projects.css'; // Importing the CSS file

const projectsData = [
  {
    title: 'Python API Project',
    image: './FastAPI_b.png', // Update with the correct path
    description: 'Created complete Backend API’s and unit testing for a social media platform using FastAPI, Docker, PostgreSQL, Postman, JWT authentication, etc.',
    link: 'https://github.com/itsranjithkumar/python-api'
  },
  
  {
    title: 'React-login validation',
    image: 'public/assets/login1.jpg',
    description: 'Developed using React for a dynamic UI, React Hook Form for efficient form handling, Yup for validation, and styled using CSS.',
    link: 'https://github.com/itsranjithkumar/react-js-from-validation/tree/main/app'
  },
  {
    title: 'React-Fitness-website',
    image: 'public/assets/fitness5.png', // Add the path to the new project image
    description: 'Designed and developed a gym application using React and JavaScript. This website consists of two pages: Home and Exercises. Built and deployed on Netlify.',
    link: 'https://github.com/itsranjithkumar/React-Fitness-app-'
  },
  {
    title: 'React-Amazon clone',
    image: 'public/assets/amazon.png', // Add the path to the new project image
    description: 'Developed a fully functional Amazon clone using React for building the user interface, creating reusable components like product listings, shopping cart, and checkout.',
    link: 'https://github.com/itsranjithkumar/REACT-NATIVE'
  },
];

const Projects = () => {
  return (
    <div className="projects-section">
      <h2 className="projects-heading">My Projects</h2> {/* Project heading */}
      <div className="projects-grid-container">
        {projectsData.map((project, index) => (
          <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-card-link" key={index}> {/* Moved the anchor to wrap the card */}
            <div className="project-card">
              <div className="project-image-container">
                <img src={project.image} alt={`${project.title} front page`} className="project-image" />
                <div className="overlay">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Projects;
