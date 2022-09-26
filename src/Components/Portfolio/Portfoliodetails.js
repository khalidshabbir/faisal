import React from 'react'
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'
import Whatsapp from '../Whatsapp'

const Portfoliodetails = () => {
  return (
    <>
    <Whatsapp/>
    <Navbar/>

          <div>
              <section className="page-title bg-1">
                  <div className="container">
                      <div className="row">
                          <div className="col-md-12">
                              <div className="block text-center">
                                  <span className="text-white">Single details</span>
                                  <h1 className="text-capitalize mb-5 text-lg">Project Details</h1>
                                  <ul className="list-inline breadcumb-nav">
                                      <li className="list-inline-item"><a href="index.html" className="text-white">Home</a></li>
                                      <li className="list-inline-item"><span className="text-white">/</span></li>
                                      <li className="list-inline-item"><a href="#" className="text-white-50">Single details</a></li>
                                  </ul>
                              </div>
                          </div>
                      </div>
                  </div>
              </section>
              <section className="section case-study">
                  <div className="container">
                      <div className="row">
                          <div className="row">
                              <div className="col-lg-6">
                                  <div className="case-img">
                                      <img src="images/about/about.jpg" alt className="img-fluid" />
                                  </div>
                              </div>
                              <div className="col-lg-6 col-md-8">
                                  <div className="case-content pl-4 mt-4 mt-lg-0">
                                      <h3 className="mb-3">Engaging content and flexible User experience help to grow more</h3>
                                      <p>Accusamus necessitatibus harum nobis quam omnis tempora cupiditate nihil, vero dolorum porro atque. Suscipit assumenda, minus tempora aliquid, ratione minima optio nihil.</p>
                                      <ul className="list-unstyled project-info-list">
                                          <li><strong>Project Name: </strong>Business Accounting</li>
                                          <li><strong>Client: </strong>Company Name Inc.</li>
                                          <li><strong>Project Start Date:</strong> February 18, 2018</li>
                                          <li><strong>Project Completion Date:</strong> January 25, 2018</li>
                                          <li><strong>Project url:</strong> www.example.com</li>
                                      </ul>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </section>
              <section className="section pt-0">
                  <div className="container">
                      <div className="row">
                          <div className="col-lg-4 col-md-6">
                              <div className="mb-5 mb-lg-0">
                                  <img src="images/about/process-1.jpg" alt className="img-fluid" />
                                  <h4 className="mt-3">Our Strategies</h4>
                                  <p>Ducimus recusandae molestias, suscipit neque, sit inventore. Totam, adipisci eos numquam libero. Quasi dolore pariatur alias eligendi!</p>
                              </div>
                          </div>
                          <div className="col-lg-4 col-md-6">
                              <div className="mb-5 mb-lg-0">
                                  <img src="images/about/process-2.jpg" alt className="img-fluid" />
                                  <h4 className="mt-3">Our Challenges</h4>
                                  <p>Eveniet nisi eius qui necessitatibus exercitationem, quam suscipit harum, nostrum reprehenderit nobis error</p>
                              </div>
                          </div>
                          <div className="col-lg-4 col-md-6">
                              <div className="mb-0">
                                  <img src="images/about/process-3.jpg" alt className="img-fluid" />
                                  <h4 className="mt-3">Our Success</h4>
                                  <p>Eveniet nisi eius qui necessitatibus exercitationem, quam suscipit harum, nostrum reprehenderit nobis error</p>
                              </div>
                          </div>
                      </div>
                  </div>
              </section>
              <section className="section single-testimonial bg-gray">
                  <div className="container">
                      <div className="row justify-content-center">
                          <div className="col-lg-8">
                              <div className="single-testimonial-block text-center">
                                  <h2 className="mb-4">Testimonial</h2>
                                  <img src="images/team/testimonial1.jpg" alt className="img-fluid rounded-circle" />
                                  <div className="info mb-4 mt-4">
                                      <h6 className="mb-0">John Partho</h6>
                                      <span>Newyork USA</span>
                                  </div>
                                  <p>
                                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio ex atque pariatur consequuntur maiores asperiores laudantium repellendus dolore quia eaque reprehenderit aliquam, quisquam similique dignissimos quas culpa eum fugit. Dolore.
                                  </p>
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

export default Portfoliodetails