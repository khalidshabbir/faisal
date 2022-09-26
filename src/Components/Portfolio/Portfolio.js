import React from 'react'
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'
import { NavLink } from 'react-router-dom'
import Whatsapp from '../Whatsapp'
const Portfolio = () => {
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
                                  <span className="text-white">portfolio</span>
                                  <h1 className="text-capitalize mb-5 text-lg">Our Works</h1>
                                  <ul className="list-inline breadcumb-nav">
                                      <li className="list-inline-item"><a href="index.html" className="text-white">Home</a></li>
                                      <li className="list-inline-item"><span className="text-white">/</span></li>
                                      <li className="list-inline-item"><a href="#" className="text-white-50">portfolio</a></li>
                                  </ul>
                              </div>
                          </div>
                      </div>
                  </div>
              </section>
              {/* section portfolio start */}
              <section className="section portfolio">
                  <div className="container">
                      <div className="row justify-content-center">
                          <div className="col-lg-8">
                              <div className="heading text-center">
                                  <h2 className="mb-4">Let’s Check Some Works</h2>
                                  <p>We have the best experts to elevate your business to the next level, try is and you will see! We have the best experts to elevate your </p>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="container">
                      <div className="row ">
                          <div className="col-lg-4 col-md-6">
                              <div className="portflio-item position-relative mb-4">
                              <NavLink className="nav-link" to="/portfoliodetails">
                                      <img src="images/portfolio/1.jpg" alt className="img-fluid w-100" />
                                      <div className="overlay-item"><i className="ti-link" /></div>
                                      <div className="portfolio-item-content">
                                          <h3 className="mb-0 text-white">Project california</h3>
                                          <p className="text-white-50">Web Development</p>
                                      </div>
                                  </NavLink>
                              </div>
                          </div>
                          <div className="col-lg-4 col-md-6">
                              <div className="portflio-item position-relative mb-4">
                              <NavLink className="nav-link" to="/portfoliodetails">
                                      <img src="images/portfolio/2.jpg" alt className="img-fluid w-100" />
                                      <div className="overlay-item">
                                          <i className="ti-link" />
                                      </div>
                                      <div className="portfolio-item-content">
                                          <h3 className="mb-0 text-white">Project california</h3>
                                          <p className="text-white-50">Web Development</p>
                                      </div>
                                  </NavLink>
                              </div>
                          </div>
                          <div className="col-lg-4 col-md-6">
                              <div className="portflio-item position-relative mb-4">
                              <NavLink className="nav-link" to="/portfoliodetails">
                                      <img src="images/portfolio/3.jpg" alt className="img-fluid w-100" />
                                      <div className="overlay-item">
                                          <i className="ti-link" />
                                      </div>
                                      <div className="portfolio-item-content">
                                          <h3 className="mb-0 text-white">Project california</h3>
                                          <p className="text-white-50">Web Development</p>
                                      </div>
                                  </NavLink>
                              </div>
                          </div>
                          <div className="col-lg-4 col-md-6">
                              <div className="portflio-item position-relative mb-4">
                              <NavLink className="nav-link" to="/portfoliodetails">
                                      <img src="images/portfolio/4.jpg" alt className="img-fluid w-100" />
                                      <div className="overlay-item">
                                          <i className="ti-link" />
                                      </div>
                                      <div className="portfolio-item-content">
                                          <h3 className="mb-0 text-white">Project california</h3>
                                          <p className="text-white-50">Web Development</p>
                                      </div>
                                  </NavLink>
                              </div>
                          </div>
                          <div className="col-lg-4 col-md-6">
                              <div className="portflio-item position-relative  mb-4">
                              <NavLink className="nav-link" to="/portfoliodetails">
                                      <img src="images/portfolio/5.jpg" alt className="img-fluid w-100" />
                                      <div className="overlay-item">
                                          <i className="ti-link" />
                                      </div>
                                      <div className="portfolio-item-content">
                                          <h3 className="mb-0 text-white">Project california</h3>
                                          <p className="text-white-50">Web Development</p>
                                      </div>
                                  </NavLink>
                              </div>
                          </div>
                          <div className="col-lg-4 col-md-6">
                              <div className="portflio-item position-relative mb-4">
                              <NavLink className="nav-link" to="/portfoliodetails">
                                      <img src="images/portfolio/6.jpg" alt className="img-fluid w-100" />
                                      <div className="overlay-item">
                                          <i className="ti-link" />
                                      </div>
                                      <div className="portfolio-item-content">
                                          <h3 className="mb-0 text-white">Project california</h3>
                                          <p className="text-white-50">Web Development</p>
                                      </div>
                                  </NavLink>
                              </div>
                          </div>
                      </div>
                  </div>
              </section>
          </div>

    <Footer/>
    </>
  )
}

export default Portfolio