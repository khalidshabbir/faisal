import React from 'react'
import Navbar from '../Navbar/Navbar'
import Slick from '../Slickslider/Slick'
import ReactPlayer from 'react-player'
import { NavLink } from 'react-router-dom'
import Whatsapp from '../Whatsapp'
const Aboutus = () => {
  return (
    <>
    <Navbar/>
    <Whatsapp/>
          <div>
              <section className="page-title bg-1">
                  <div className="container">
                      <div className="row">
                          <div className="col-md-12">
                              <div className="block text-center">
                                  <span className="text-white">About Us</span>
                                  <h1 className="text-capitalize mb-5 text-lg">Our Company</h1>
                                  <ul className="list-inline breadcumb-nav">
                                      <li className="list-inline-item"><NavLink className="nav-link text-light" to="/">Home</NavLink></li>
                                      <li className="list-inline-item"><span className="text-white">/</span></li>
                                      <li className="list-inline-item"><NavLink className="nav-link text-light" to="/about-us">About us</NavLink></li>
                                  </ul>
                              </div>
                          </div>
                      </div>
                  </div>
              </section>
              <section className="section ">
                  <div className="container">
                      <div className="row justify-content-center">
                          <div className="col-lg-10">
                              <div className="heading text-center">
                                  <h2>We help entreprenuers <br />starts up and turn <span className="text-color">their ideas into</span> produtcs</h2>
                              </div>
                              <div className="row">
                                  <div className="col-lg-4 col-md-4 col-sm-6">
                                      <div className="counter-item counter--style text-center mb-5 mb-lg-0">
                                          <i className="ti-thumb-up" />
                                          <h2 className="mb-0 mt-3"><span className="counter-stat font-weight-bold">1730</span> +</h2>
                                          <p>Project Done</p>
                                      </div>
                                  </div>
                                  <div className="col-lg-4 col-md-4 col-sm-6">
                                      <div className="counter-item counter--style text-center mb-5 mb-lg-0">
                                          <i className="ti-face-smile" />
                                          <h2 className="mb-0 mt-3"><span className="counter-stat font-weight-bold">125 </span>M </h2>
                                          <p>User Worldwide</p>
                                      </div>
                                  </div>
                                  <div className="col-lg-4 col-md-4 col-sm-6">
                                      <div className="counter-item counter--style text-center">
                                          <i className="ti-cup" />
                                          <h2 className="mb-0 mt-3"><span className="counter-stat font-weight-bold">14</span></h2>
                                          <p>Award Winner </p>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </section>
              <section className="video-block section bg-light">
                  <div className="container">
                      <div className="row align-items-center">
                          <div className="col-lg-6">
                              <div className="heading feature-list">
                                  <h2 className="mb-4">Growing Software Company Since 2008</h2>
                                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint earum, eos esse non error facilis ad,
                                      maiores eum quae vero libero voluptas! Reprehenderit sunt similique, quae quidem voluptatem odit natus.</p>
                                  <ul className="list-unstyled mt-4 mb-5">
                                      <li><i className="ti-check mr-3" />Create and manage any process for your business needs.</li>
                                      <li><i className="ti-check mr-3" />Create and manage any process for your business needs.</li>
                                      <li><i className="ti-check mr-3" />Full functionality without needed to install software.</li>
                                  </ul>
                                  <a href="service.html" className="btn btn-main">All Services<i className="fa fa-angle-right ml-2" /></a>
                              </div>
                          </div>
                          <div className="col-lg-6">
                              <div className="video-img" id="videoimg">
                              <ReactPlayer url='https://youtu.be/YPC0eW1XldE' />
                                
                              </div>
                          </div>
                      </div>
                  </div>
              </section>
              <section className="section team">
                  <div className="container">
                      <div className="row justify-content-center">
                          <div className="col-lg-6">
                              <div className="heading text-center mb-50">
                                  <h2 className="mb-4">Our Team</h2>
                                  <p>Today’s users expect effortless experiences. Don’t let essential people and processes stay stuck in the past. Speed it up, skip the hassles</p>
                              </div>
                          </div>
                      </div>
                      <div className="row">
                          <div className="col-lg-3 col-md-6 col-sm-6">
                              <div className="team-block mb-5 mb-lg-0">
                                  <img src="images/team/03-1.jpg" alt className="img-fluid w-100" />
                                  <h4 className="mt-4 mb-0">John Marshal</h4>
                                  <p>Founder</p>
                              </div>
                          </div>
                          <div className="col-lg-3 col-md-6 col-sm-6">
                              <div className="team-block mb-5 mb-lg-0">
                                  <img src="images/team/01-3.jpg" alt className="img-fluid w-100" />
                                  <h4 className="mt-4 mb-0">Marshal Root</h4>
                                  <p>Marketing Head</p>
                              </div>
                          </div>
                          <div className="col-lg-3 col-md-6 col-sm-6">
                              <div className="team-block mb-5 mb-lg-0">
                                  <img src="images/team/03-1.jpg" alt className="img-fluid w-100" />
                                  <h4 className="mt-4 mb-0">Siamon john</h4>
                                  <p>Co-ordinator</p>
                              </div>
                          </div>
                          <div className="col-lg-3 col-md-6 col-sm-6">
                              <div className="team-block">
                                  <img src="images/team/01-3.jpg" alt className="img-fluid w-100" />
                                  <h4 className="mt-4 mb-0">Rishat Ahmed</h4>
                                  <p>Senior Developer</p>
                              </div>
                          </div>
                      </div>
                  </div>
              </section>
              <section className="section awards bg-light">
                  <div className="container">
                      <div className="row">
                          <div className="col-lg-8">
                              <div className="why-content">
                                  <h2 className="mb-4">Honors and awards</h2>
                                  <p className="mb-5">Dicta cupiditate, incidunt quia obcaecati itaque cumque, nostrum ipsum est voluptatibus, porro
                                      provident a quam quibusdam. Ducimus possimus, nesciunt minima magni aspernatur.</p>
                              </div>
                          </div>
                      </div>
                      <div className="row">
                          <div className="col-lg-2 col-md-3 col-sm-4">
                              <div className="award-img-block mb-4 mb-lg-0">
                                  <div className="award-img">
                                      <img src="images/about/02.png" alt className="img-fluid" />
                                  </div>
                              </div>
                          </div>
                          <div className="col-lg-2 col-md-3 col-sm-4">
                              <div className="award-img-block mb-4 mb-lg-0">
                                  <div className="award-img">
                                      <img src="images/about/03.png" alt className="img-fluid" />
                                  </div>
                              </div>
                          </div>
                          <div className="col-lg-2 col-md-3 col-sm-4">
                              <div className="award-img-block mb-4 mb-lg-0">
                                  <div className="award-img">
                                      <img src="images/about/04.png" alt className="img-fluid" />
                                  </div>
                              </div>
                          </div>
                          <div className="col-lg-2 col-md-3 col-sm-4">
                              <div className="award-img-block mb-4 mb-lg-0">
                                  <div className="award-img">
                                      <img src="images/about/05.png" alt className="img-fluid" />
                                  </div>
                              </div>
                          </div>
                          <div className="col-lg-2 col-md-3 col-sm-4">
                              <div className="award-img-block mb-4 mb-lg-0">
                                  <div className="award-img">
                                      <img src="images/about/06.png" alt className="img-fluid" />
                                  </div>
                              </div>
                          </div>
                          <div className="col-lg-2 col-md-3 col-sm-4">
                              <div className="award-img-block">
                                  <div className="award-img">
                                      <img src="images/about/07.png" alt className="img-fluid" />
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </section>
            <Slick/>
          </div>

    </>
  )
}

export default Aboutus