import React from 'react';
import 'aos/dist/aos.css';
import './portfolio.css'


const Portfolio = ({ data }) => {

  if (data) {
    var projects = data.projects.map(projects => {
      var projectImage = 'images/portfolio/' + projects.image;

      return (
        // should be <li>
        <div name={projects.title} className="columns portfolio-item">
          <div className="item-wrap">
            <a href={projects.url} title={projects.title}>
              <img alt={projects.title} src={projectImage} />
              <div className="overlay">
                <div className="portfolio-item-meta">
                  <h5>{projects.title}</h5>
                  <p>{projects.category}</p>
                </div>
              </div>
            </a>
          </div>
        </div>
      )
    })

    console.log(projects)
  }

  return (
    <section data-aos="zoom-in" data-aos-duration="1000" id="portfolio">
      <h1>Check Out Some of My Works.</h1>
      <div className='container'>
        <ul className="cards">
          {data && data.projects.map((item, i) => (
            <li key={i}>
              <a href={item.url} className="cardTag">
                <img src={`images/portfolio/` + item.image} className="card__image" alt="" />
                <div className="card__overlay">
                  <div className="card__header">
                    <svg className="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>
                    {/* <img className="card__thumb" src="https://i.imgur.com/7D7I6dI.png" alt="" /> */}
                    <div className="card__header-text">
                      <h3 className="card__title">{item.title}</h3>
                      <span className="card__status">{item.category}</span>
                    </div>
                  </div>
                  <p className="card__description"></p>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
    // <section data-aos="zoom-in" data-aos-duration="1000" id="portfolio">

    //   <div className="row">

    //     <div className="twelve columns collapsed">

    //       <h1>Check Out Some of My Works.</h1>

    //       <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
    //         {projects}
    //       </div>
    //     </div>
    //   </div>
    // </section>
  );
}

export default Portfolio;
