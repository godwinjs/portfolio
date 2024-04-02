import React, { useState, useEffect } from 'react';
import ReactGA from 'react-ga';
import Header from './Components/Header';
import Footer from './Components/Footer';
import About from './Components/About';
import Resume from './Components/Resume';
import Contact from './Components/Contact';
import Portfolio from './Components/Portfolio';
import AOS from 'aos';

const App = () => {

  const [resume, setResume] = useState([])
  

    ReactGA.initialize('UA-110570651-1');
    ReactGA.pageview(window.location.pathname);

  
    useEffect(() => {
      AOS.init()
      const getResumeData = async () => {
    
        const res = await fetch('/resumeData.json')
        const data  = await res.json();
        setResume(data)
      }
      getResumeData()
    }, [])
  
    
  
      return (
        
        <div className="App">
          <Header data={resume.main}/>
          <About data={resume.main}/>
          {/* <Resume data={resume.resume}/> */}
          <Portfolio data={resume.portfolio}/>
          <Contact data={resume.main}/>
          <Footer data={resume.main}/>
        </div>
        
      )
}

export default App
