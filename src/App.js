import './App.css';
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Particles from "./components/Particles"
import Navigation from './components/Nav';
import Header from './components/Header';
import ContactForm from './components/Contact';
import About from './components/About';
import Projects from './components/Portfolio';
import Footer from './components/Footer';
import { navLinks } from './utils/navlinks';

function App() {
  
  const categories = navLinks.map((e) => ({ name: e.name }))
  // const [currentCategory, setCurrentCategory] = useState('Home') // change this. Reference Module 21

  // const renderCategory = () => {
  //   if (currentCategory === 'Home') {
  //     return <>
  //       <Header/>
  //       <Particles id='tsparticles'/>
  //     </>
  //   }
  //   if (currentCategory === 'About') {
  //     return <>
  //       <About/>
  //       <Particles id='tsparticles'/>
  //     </>
  //   }
  //   if (currentCategory === 'Portfolio') {
  //     return <>
  //       <Projects/>
  //       <Particles id='tsparticles'/>
  //     </>
  //   }
  // }

  // const handleCategoryChange = (category) => setCurrentCategory(category)
  const [currentPage, setCurrentPage] = useState("");
  //handleCategoryChange={handleCategoryChange}

  // currentCategory={currentCategory
  return (
    <div className='App'>
      {/* {renderCategory()} */}
      <BrowserRouter>
        <Navigation/>
        <Particles id="ts-particles"/>
        <Routes>
          <Route exact path="/" element={<Header/>}/>
          <Route exact path="/home" element={<Header/>}/>
          <Route exact path="/about" element={<About/>}/>
          <Route exact path="/portfolio" element={<Projects/>}/>
          <Route path="/*" element={<Header/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
