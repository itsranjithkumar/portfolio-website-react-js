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
const Projects = lazy(() => import('./components/Projects/Projects'));
const Certificate = lazy(() => import('./components/WorkExperience/Certificates/Certificate')); // Importing Certificates component lazily

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <main className="container">
        <Suspense fallback={<div>Loading...</div>}>
          <section id="home">
            <Hero />
          </section>

          <section id="skills">
            <Skills />
          </section>

          <section id="work-experience">
            <WorkExperience />
          </section>

          <section id="projects">
            <Projects />
          </section>

          <section id="resume">
            <DownloadCV />
          </section>

          <section id="certificates"> {/* Adding the Certificates section */}
            <Certificate />
          </section>

          <section id="github-streak">
            <GithubStreak />
          </section>

          <section id="contact-me">
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
