import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Skills from './components/Skills/Skills';
import WorkExperience from './components/WorkExperience/WorkExperience';
import ContactMe from './components/ContactMe/ContactMe';
import Footer from './components/Footer/Footer';
import GithubStreak from './components/GithubStreak/GithubStreak';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <div className="container" id="home">
        <Hero />
        <Skills />
        <WorkExperience />
        <GithubStreak />
        <ContactMe />
      </div>
      <Footer />
    </div>
  );
}

export default App;
