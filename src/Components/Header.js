import React from 'react';
// import ParticlesBg from "particles-bg";
import ReactJsTyping from 'reactjs-typing-effect';
import 'animate.css/animate.min.css';
import Lottie from 'react-lottie';
import animationData from '../lotties/manpc.json';

const Header = ({ data }) => {
   const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: animationData,
      rendererSettings: {
         preserveAspectRatio: "xMidYMid slice"
      }
   };

   if (data) {
      var github = data.github;
      var name = data.name;
      var networks = data.social.map(network => {
         return <li key={network.name}>
            <a href={network.url}><i className={network.className}></i></a>
         </li>
      })
   }

   const listOfString = ['Fun fact: I love movies', 'Happy Frontend Engineer', 'I Build complex projects with react']

   return (
      <header id="home">
         {/* <ParticlesBg type="light" bg={true} /> */}
         <nav id="nav-wrap">
            <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
            <a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a>

            <ul id="nav" className="nav">
               <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
               <li><a className="smoothscroll" href="#about">About</a></li>
               <li><a className="smoothscroll" href="#resume">Resume</a></li>
               <li><a className="smoothscroll" href="#portfolio">Works</a></li>
               <li><a className="smoothscroll" href="#contact">Contact</a></li>
            </ul>
         </nav>

         <div className="row banner">
            <div className='lottie-bg'>
               <Lottie options={defaultOptions} className='img-fluid' />

            </div>
            {/* <Lottie options={defaultOptions} className='img-fluid' height={400} width={400} /> */}


            <div style={{ fontSize: 30, color: '#ffffff', zIndex: '100' }} className="banner-text animate__animated animate__bounceIn">
               <img className='responsive-headline' src='/images/hng-brand-logo.png' alt='HNG Brand Logo' />
               <h1 className="responsive-headline">Hi, I'm {name}</h1>
               <ReactJsTyping style={{ color: '#372F28'}} className='liststring type' StringList={listOfString} speed={900} />
               <hr />
               <ul className="social">
                  {/* <a href={project} className="button btn project-btn"><i className="fa fa-book"></i>This Project</a> */}
                  <a href={github} className="button btn github-btn"><i className="fa fa-github"></i>My Github</a>

                  <div className="row">
                     <div className="twelve columns">
                        <div style={{ marginRight: '30px', }} className="social-links">
                           {networks}
                        </div>
                     </div>
                  </div>
               </ul>

            </div>
         </div>


         <p className="scrolldown">
            <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
         </p>

      </header>
   );
}

export default Header;
