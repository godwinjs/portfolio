import React from 'react';
import 'aos/dist/aos.css';

const Resume = ({ data }) => {

  if(data) {
    var education = data.education.map(educate => {
      return <div key={educate.school}><h3>{educate.school}</h3>
      <p className="info">{educate.degree} <span>&bull;</span><em className="date">{educate.graduated}</em></p>
      <p>{educate.description}</p></div>
    })
    var work = data.work.map(item => {
      return <div key={item.company}><h3>{item.company}</h3>
          <p className="info">{item.title}<span>&bull;</span> <em className="date">{item.years}</em></p>
          <p>{item.description}</p>
      </div>
    })
  }

    return (
      <section data-aos="flip-right" data-aos-duration="1000" id="resume">

        <div className="row education">
          <div className="three columns header-col">
              <h1><span>Education</span></h1>
          </div>

          <div className="nine columns main-col">
              <div className="row item">
                <div className="twelve columns">
                  {education}
                </div>
              </div>
          </div>
        </div>


        <div className="row work">

          <div className="three columns header-col">
            <h1><span>Work</span></h1>
          </div>

          <div className="nine columns main-col">
            {work}
          </div>
        </div>


          <section id='languages' className='languages'>
            <h2 className="md text-center my-2">Proficient Languages</h2>
              <div className='container flex'>
                <div className="card">
                <h4>HTML</h4>
                <img src="images/html.png" alt="" />
            </div>
          
            <div className="card">
                <h4>CSS3</h4>
                <img src="images/css3.png" alt="" />
            </div>
          
            <div className="card">
                <h4>JavaScript</h4>
                <img src="images/javascript.png" alt="" />
            </div>
            <div className="card">
                <h4>Materialize</h4>
                <img src="images/materialize.png" alt="" />
            </div>
            <div className='card'>
                <h4>Bootstrap</h4>
                  <img src="images/bootstrap.png" alt="" />
                </div>
            <div className="card">
                <h4>React.js</h4>
                <img src="images/reactjs.png" alt="" />
            </div>
            <div className="card">
                <h4>NodeJs</h4>
                <img src="images/nodejs.png" alt="" />
            </div>
            <div className="card">
                <h4>MongoDB</h4>
                <img src="images/mongo.png" alt="" />
            </div>
            <div className="card">
                <h4>GitHub</h4>
                <img src="images/github-logo.png" alt="" />
            </div>
            <div className="card">
                <h4>Git</h4>
                <img src="images/git.png" alt="" />
            </div>
            </div>
          </section>
      </section>
    );
  
}

export default Resume;
