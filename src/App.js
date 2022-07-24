import React from 'react';
import Header from './components/Header';
import ContactForm from './components/Contact';
import About from './components/About';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div>
      <Header></Header>

      <main>
        <ContactForm></ContactForm>
        <About></About>
      </main>

      <Footer></Footer>
    </div>
  );
}

export default App;
