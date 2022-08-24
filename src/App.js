import './App.css';
import React, { useState } from 'react';
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
  const [currentCategory, setCurrentCategory] = useState('Home')

  const renderCategory = () => {
    if (currentCategory === 'Home') {
      return <>
        <Header/>
        <Particles id='tsparticles'/>
      </>
    }
    if (currentCategory === 'About') {
      return <>
        <About/>
        <Particles id='tsparticles'/>
      </>
    }
    if (currentCategory === 'Portfolio') {
      return <>
        <Projects/>
        <Particles id='tsparticles'/>
      </>
    }
  }

  const handleCategoryChange = (category) => setCurrentCategory(category)

  return (
    <div className='App'>
      <Navigation currentCategory={currentCategory} handleCategoryChange={handleCategoryChange}/>
      {renderCategory()}
    </div>
  )
}

export default App;
