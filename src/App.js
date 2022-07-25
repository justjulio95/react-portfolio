import React from 'react';
import Header from './components/Header';
import ContactForm from './components/Contact';
import About from './components/About';
import Projects from './components/Portfolio';
import Footer from './components/Footer';
import './App.css';

function App() {
  
  // const [contactSelected, setContactSelected] = useState(false)

  return (
    <div>
      <Header></Header>

      <main>
        <ContactForm></ContactForm>
        <Projects></Projects>
        <About></About>
      </main>

      <Footer></Footer>
    </div>
  );
}

export default App;
