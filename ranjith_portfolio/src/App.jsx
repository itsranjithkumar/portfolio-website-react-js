import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import './App.css'
import Skills from './components/Skills/Skills'
import WorkExperience from './components/WorkExperience/WorkExperience'
import ContactMe from './components/ContactMe/ContactMe'
import Footer from './components/Footer/Footer'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';




const App = () => {
  return (
    <>
    <Navbar />
    <div className="container" id="home">

    <Hero />
    <Skills />
    <WorkExperience/>
    <ContactMe/>
    </div>
    <Footer/>
    </>
  )
}

export default App
