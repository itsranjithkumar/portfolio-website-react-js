import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
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
const Certificate = lazy(() => import('./components/Certificate/Certificate'));
const CertificatePage = lazy(() => import('./components/Certificate/CertificatePage'));

const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <main className="container">
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route path="/" element={
                <>
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

                  <section id="github-streak">
                    <GithubStreak />
                  </section>

                  <section id="contact-me">
                    <ContactMe />
                  </section>

                  {/* Certificate section added to the home page */}
                  <section id="certificate">
                    <Certificate />
                  </section>
                </>
              } />
              {/* Route for detailed certificate page */}
              <Route path="/certificate" element={<CertificatePage />} />
            </Routes>
          </Suspense>
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    </Router>
  );
};

export default App;
