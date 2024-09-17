import React, { Suspense, lazy } from 'react';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import './App.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Hero = lazy(() => import('./components/Hero/Hero'));
const Skills = lazy(() => import('./components/Skills/Skills'));
const WorkExperience = lazy(() => import('./components/WorkExperience/WorkExperience'));
const ContactMe = lazy(() => import('./components/ContactMe/ContactMe'));
const GithubStreak = lazy(() => import('./components/GithubStreak/GithubStreak'));
const DownloadCV = lazy(() => import('./components/GithubStreak/DownloadCV'));

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
