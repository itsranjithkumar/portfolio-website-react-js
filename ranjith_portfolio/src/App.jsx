import React, { Suspense } from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Skills from './components/Skills/Skills';
import WorkExperience from './components/WorkExperience/WorkExperience';
import ContactMe from './components/ContactMe/ContactMe';
import Footer from './components/Footer/Footer';
import GithubStreak from './components/GithubStreak/GithubStreak';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import DownloadCV from "./components/DownloadCV";

import './App.css';

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <div className="container">
      <Suspense fallback={<div>Loading...</div>}>
        {/* Home Section */}
        <section id="home">
          <Hero />
        </section>

        {/* Skills Section */}
        <section id="skills">
          <Skills />
        </section>

        {/* Work Experience Section */}
        <section id="work-experience">
          <WorkExperience />
        </section>

        {/* GitHub Streak Section */}
        <section id="resume">
          <DownloadCV />
        </section>

          <section id="github-streak">
            {/* <h2>GitHub Streak</h2> */}
            <GithubStreak />
          </section>

          <section id="contact-me">
            {/* <h2>Contact Me</h2> */}
            <ContactMe />
          </section>
          </Suspense>
        {/* </Suspense> */}
      {/* </main> */}
      <footer>
        <Footer />
      </footer>
    </div>
    </div>


  );
};

export default App;
