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
      <header>
        <Navbar />
      </header>
      <main className="container">
        <Suspense fallback={<div>Loading...</div>}>
          <section id="home">
            <Hero />
          </section>

          <section id="skills">
            <h2>Skills</h2>
            <Skills />
          </section>

          <section id="work-experience">
            <h2>Work Experience</h2>
            <WorkExperience />
          </section>

          <section id="resume">
            <DownloadCV />
          </section>

          <section id="github-streak">
            <h2>GitHub Streak</h2>
            <GithubStreak />
          </section>

          <section id="contact-me">
            <h2>Contact Me</h2>
            <ContactMe />
          </section>
        </Suspense>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
