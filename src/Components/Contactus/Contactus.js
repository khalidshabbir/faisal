import React from 'react'
import { useState } from 'react'
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'
import Whatsapp from '../Whatsapp'
import emailjs from '@emailjs/browser';
const Contactus = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [emailSent, setEmailSent] = useState(false);
    const submit = () => {
      console.log(name+"thsi is email")
      if (name && email && message) {
        const serviceId = 'service_gqj5avb';
        const templateId = 'template_jls8vhy';
        const userId = 'rruPKbEwwgWT-UbOz';
        const templateParams = {
            name,
            email,
            message
        };

        emailjs.send(serviceId, templateId, templateParams, userId)
            .then(response => console.log(response))
            .then(error => console.log(error));
          setName('');
          setEmail('');
          setMessage('');
          setEmailSent(true);
      } else {
          alert('Please fill in all fields.');
      }
  }
  return (
    <>

          <>
          <Whatsapp/>
          <Navbar/>
              <section className="page-title bg-1">
            
                  <div className="container">
                      <div className="row">
                          <div className="col-md-12">
                              <div className="block text-center">
                                  <span className="text-white">Contact Us</span>
                                  <h1 className="text-capitalize mb-5 text-lg">Get in Touch</h1>
                                  <ul className="list-inline breadcumb-nav">
                                      <li className="list-inline-item"></li>
                                      <li className="list-inline-item"><span className="text-white">/</span></li>
                                      <li className="list-inline-item"><a href="#" className="text-white-50">Contact Us</a></li>
                                  </ul>
                              </div>
                          </div>
                      </div>
                  </div>
              </section>
              {/* contact form start */}
              <section className="contact-form-wrap section">
                  <div className="container">
                      <div className="row">
                          <div className="col-lg-12 col-md-12 col-sm-12">
                              <span className="text-color">Send a message</span>
                              <h3 className="text-md mb-5">Contact Form</h3>
                              <div className="row">
                                  <div className="col-lg-8">
                                  <div className="form_group mb-3" >
                        <div>
                      
                            <input type="text" placeholder="Your Name" className="form-control" value={name} onChange={e => setName(e.target.value)} />

                        </div>
                        <div className="mt-3">
                            
                            <input type="email"className="form-control" placeholder="Your email address" value={email} onChange={e => setEmail(e.target.value)} />

                        </div>
                    </div>

                    <div className="form_group textarea_wrapper">
                        <div>
                        
                            <textarea placeholder="Your message" className="form-control" cols="30" rows="4" value={message} onChange={e => setMessage(e.target.value)}></textarea>

                        </div>
                       
                    </div>
                    <button className="btn btn-main mt-3" onClick={submit}>Send Message</button>

                

      
        <span className={emailSent ? 'visible' : null}></span>


                                    
                                  </div>
                                  <div className="col-lg-4">
                                      <div className="short-info mt-5 mt-lg-0">
                                          <ul className="list-unstyled">
                                              <li>
                                                  <h5>Call Us</h5>
                                                  +88 01672 506 744
                                              </li>
                                              <li>
                                                  <h5>Email Us</h5>
                                                  contact@mail.com
                                              </li>
                                              <li>
                                                  <h5>Location Map</h5>
                                                  North Main Street,Brooklyn Australia
                                              </li>
                                          </ul>
                                          <ul className="social-icons list-inline mt-5">
                                              <li className="list-inline-item">
                                                  <a href="http://www.themefisher.com"><i className="fab fa-facebook-f" /></a>
                                              </li>
                                              <li className="list-inline-item">
                                                  <a href="http://www.themefisher.com"><i className="fab fa-twitter" /></a>
                                              </li>
                                              <li className="list-inline-item">
                                                  <a href="http://www.themefisher.com"><i className="fab fa-linkedin-in" /></a>
                                              </li>
                                          </ul>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div className="row mt-5 mb-5">
                          
                             <iframe className='w-100' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3432.728045976266!2d73.14691831505716!3d30.64162108166896!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3922b6e4dde0c501%3A0xc37ea3d85326203!2sCOMSATS%20University%20Islamabad%20-%20Sahiwal%20Campus!5e0!3m2!1sen!2s!4v1664193287264!5m2!1sen!2s" width={600} height={450} style={{border: 0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
                         <div className='col-12'>
                            </div>    

                             
                      
                      </div>
                      <div className="row">
                          <div className="col-lg-4 col-md-6">
                              <div className="contact-content pl-lg-5 mt-5 mt-lg-0 mb-5 mb-lg-0">
                                  <h4 className="mb-4">Corporate Office</h4>
                                  <ul className="address-block list-unstyled">
                                      <li>
                                          <i className="ti-location-pin mr-3" />North Main Street,Brooklyn Australia
                                      </li>
                                      <li>
                                          <i className="ti-email mr-3" />Email: contact@mail.com
                                      </li>
                                      <li>
                                          <i className="ti-mobile mr-3" />Phone:+88 01672 506 744
                                      </li>
                                  </ul>
                              </div>
                          </div>
                          <div className="col-lg-4 col-md-6">
                              <div className="contact-info mb-5 mb-lg-0 mt-md-5 mt-lg-0">
                                  <h4 className="mb-4">USA Location</h4>
                                  <ul className="address-block list-unstyled">
                                      <li>
                                          <i className="ti-location-pin mr-3" />North Main Street,Brooklyn Australia
                                      </li>
                                      <li>
                                          <i className="ti-email mr-3" />Email: contact@mail.com
                                      </li>
                                      <li>
                                          <i className="ti-mobile mr-3" />Phone:+88 01672 506 744
                                      </li>
                                  </ul>
                              </div>
                          </div>
                          <div className="col-lg-4 col-md-6">
                              <div className="contact-info ">
                                  <h4 className="mb-4">Europe</h4>
                                  <ul className="address-block list-unstyled">
                                      <li>
                                          <i className="ti-location-pin mr-3" />North Main Street,Brooklyn Australia
                                      </li>
                                      <li>
                                          <i className="ti-email mr-3" />Email: contact@mail.com
                                      </li>
                                      <li>
                                          <i className="ti-mobile mr-3" />Phone:+88 01672 506 744
                                      </li>
                                  </ul>
                              </div>
                          </div>
                      </div>
                  </div>
              </section>
              <Footer/>
          </>

    </>
  )
}

export default Contactus