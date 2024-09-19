// Projects.jsx
import React from 'react';
import './Projects.css'; // Importing the CSS file

const projectsData = [
  {
    title: 'Python API Project',
    image: 'path/to/python-api-project.jpg', // Update with the correct path
    description: 'A Python-based REST API project that handles user data with CRUD operations.',
  },
  {
    title: 'Project 2',
    image: 'path/to/project2-image.jpg',
    description: 'This is a brief description of Project 2.',
  },
  {
    title: 'E-commerce Website',
    image: 'path/to/ecommerce-website.jpg', // Add the path to the new project image
    description: 'An e-commerce website built using React and Node.js, featuring a shopping cart, payment gateway, and product search.',
  },
  {
    title: 'Portfolio Website',
    image: 'path/to/portfolio-website.jpg', // Add the path to the new project image
    description: 'A personal portfolio website showcasing my skills, projects, and contact information. Built using React and styled-components.',
  },
];

const Projects = () => {
  return (
    <div className="projects-section">
      <h2 className="projects-heading">My Projects</h2> {/* Project heading */}
      <div className="projects-grid-container">
        {projectsData.map((project, index) => (
          <div className="project-card" key={index}>
            <div className="project-image-container">
              <img src={project.image} alt={`${project.title} front page`} className="project-image" />
              <div className="overlay">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
