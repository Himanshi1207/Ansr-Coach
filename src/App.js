import './App.css';
import React from 'react'
import Navbar from './components/navbar/navbar';
import Slider from './components/slider/slider';
import Footer from './components/footer/footer';
import Contact from './components/contact us/contact';
import About from './components/about us/about';
import Partners from './components/our partners/partners';
import Stories from './components/our stories/stories';
import Reach from './components/reach/reach';

function App() {
  
  return (
    <div id='main'>
      <Navbar />
      <Slider/>
      <About/>
      <Reach/>
      <Stories/>
      <Contact/>
      <Partners/>
      <Footer/>
    </div>
  );
}

export default App;
