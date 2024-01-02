import React from 'react';
import 'aos/dist/aos.css';

const About = ({ data }) => {

    if(data){
      var name = data.name;
      var profilepic = "images/"+ data.image;
      var bio = data.bio;
      var street = data.address.street;
      var city = data.address.city;
      var state = data.address.state;
      var zip = data.address.zip;
      var phone = data.phone;
      var email = data.email;
      // var resumeDownload = data.resumedownload;
    }

    return (
      
      <section data-aos="fade-right" data-aos-duration="1000" id="about">
      <div className="row">
         <div className="three columns">
            <img className="profile-pic" src={profilepic} alt="Bruno" />
         </div>
         <div className="nine columns main-col">
            <h2>About Me</h2>

            <p>{bio}</p>
            <div className="row">
               <div className="columns contact-details">
                  <h2>Contact Details</h2>
                  <p className="address">
						   <span>{name}</span><br />
						   <span>{street}<br />
						         {city} {state}, {zip}
                   </span><br />
						   <span>{phone}</span><br />
                     <span>{email}</span>
					   </p>
               </div>
               <div className="columns download">
                  <p>
                     <a href='https://drive.google.com/file/d/1HNfR9tgCK_OmZk4JsOUGT908lCC0w0_k/view?usp=sharing' className="button"><i className="fa fa-download"></i>Download Resume</a>
                  </p>
               </div>
            </div>
         </div>
      </div>

   </section>
    );
  
}

export default About;
