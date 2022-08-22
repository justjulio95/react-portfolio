import React from 'react';
import Particles from "./components/Particles"
import Navigation from './components/Nav';
import Header from './components/Header';
import ContactForm from './components/Contact';
import About from './components/About';
import Projects from './components/Portfolio';
import Footer from './components/Footer';
import './App.css';

function App() {
  
  // const [sectionSelected, setSontactSelected] = useState()

  return (
    <div>
      <Navigation/>
      <Header/>
      <Particles id='tsparticles'/>

      <main>
        {/* <ContactForm></ContactForm> */}
        {/* <Projects></Projects> */}
        <About/>
      </main>

      {/* <Footer></Footer> */}
    </div>
  );
}

export default App;
