import React from 'react';
import { useForm } from '@formspree/react';

const Contact = ({ data }) => {
   const [state, handleSubmit] = useForm("mnqloger");

   if (state.succeeded) {
      return <h5 style={{textAlign: 'center', alignItems: 'center', color: 'white', fontSize: '400', margin: '30px'}}>Thanks for contacting me. I've recieved your message and will get back to you!</h5>;
  }
    if(data) {
      var name = data.name;
      var street = data.address.street;
      var city = data.address.city;
      //var state = data.address.state;
      var zip = data.address.zip;
      var phone= data.phone;
      var email = data.email;
      var message = data.contactmessage;
    }

    return (
      <section id="contact">

         <div className="row section-head">

            <div className="two columns header-col">

               <h1><span>Get In Touch.</span></h1>

            </div>

            <div className="ten columns">
                  <p className="lead">{message}</p>
            </div>
         </div>

         <div className="row">
            <div className="eight columns">
				<form onSubmit={handleSubmit} id="fs-frm" name="simple-contact-form" acceptCharset="utf-8" action="https://formspree.io/f/mnqloger" method="post">
               <fieldset id="fs-frm-inputs">
                  <label htmlFor="full-name">Full Name</label>
                  <input type="text" name="name" id="full-name" placeholder="First and Last" required />
                  <label htmlFor="email-address">Email Address</label>
                  <input type="email" name="_replyto" id="email-address" placeholder="email@domain.tld" required />
                  <label htmlFor="message">Message</label>
                  <textarea rows="5" name="message" id="message" placeholder="" required></textarea>
                  <input type="hidden" name="_subject" id="email-subject" value="Contact Form Submission" />
               </fieldset>
                  <input type="submit" value="Submit" />
            </form>

           <div id="message-warning"> Error</div>
				   <div id="message-success">
                  <i className="fa fa-check"></i>Your message was sent, thank you!<br />
				   </div>
           </div>


            <aside className="four columns footer-widgets">
               <div className="widget widget_contact">

					   <h4>Address and Phone</h4>
					   <p className="address">
						   {name}<br />
						   {street} <br />
						   {city}, {zip}<br />
						   <span>{phone}</span><br/>
                     {email}
					   </p>
				   </div>

               <div className="widget widget_tweets">
                  <h4 className="widget-title" >Latest Tweets</h4>
                  <ul id="twitter">
                     <li>
                     
                     </li>
                  </ul>
		         </div>
            </aside>
      </div>
   </section>
    );
  
}

export default Contact;
