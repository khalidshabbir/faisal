import React from 'react'
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'
import { NavLink } from 'react-router-dom'
import Whatsapp from '../Whatsapp'
const Services = () => {
  return (
    <>
<div>
    <Navbar/>
    <Whatsapp/>
  <section className="page-title bg-1">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="block text-center">
            <span className="text-white">Our services</span>
            <h1 className="text-capitalize mb-5 text-lg">What We Do</h1>
            <ul className="list-inline breadcumb-nav">
            <li className="list-inline-item"><NavLink className="nav-link text-light" to="/">Home</NavLink></li>
                                      <li className="list-inline-item"><span className="text-white">/</span></li>
                                      <li className="list-inline-item"><NavLink className="nav-link text-light" to="/services">Services</NavLink></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="section service-2">
    <div className="container">
      <div className="row">
        <div className="col-lg-6">
          <div className="service-img mb-5 mb-lg-0">
            <img src="images/service/service-1.jpg" alt className="img-fluid" />
          </div>
        </div>
        <div className="col-lg-6">
          <div className="service-info ">
            <span className="text-color font-weight-bold">01</span>
            <h3 className="text-md mb-4 mt-2">
              Custom Software development
            </h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi voluptatum, nobis quos dolores reiciendis unde. Est obcaecati aspernatur pariatur aliquid quos repellendus, amet architecto similique, cumque nisi earum, culpa, ipsa!</p>
          </div>
        </div>
      </div>
      <div className="content-padding position-relative">
        <div className="row">
          <div className="col-lg-6">
            <div className="service-info mb-5 mb-lg-0">
              <span className="text-color font-weight-bold">02</span>
              <h3 className="text-md mb-4 mt-2">
                Software Maintenance
              </h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi voluptatum, nobis quos dolores reiciendis unde. Est obcaecati aspernatur pariatur aliquid quos repellendus, amet architecto similique, cumque nisi earum, culpa, ipsa!</p>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="service-img">
              <img src="images/service/service-3.jpg" alt className="img-fluid" />
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-6">
          <div className="service-img mb-5 mb-lg-0">
            <img src="images/service/service-4.jpg" alt className="img-fluid" />
          </div>
        </div>
        <div className="col-lg-6">
          <div className="service-info">
            <span className="text-color font-weight-bold">03</span>
            <h3 className="text-md mb-4 mt-2">
              Web App Development
            </h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi voluptatum, nobis quos dolores reiciendis unde. Est obcaecati aspernatur pariatur aliquid quos repellendus, amet architecto similique, cumque nisi earum, culpa, ipsa!</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="section case-study">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <div className="case-study-content text-center mb-5">
            <h2 className="mb-4">How we works</h2>
            <p>There are many variations of lorem passages of Lorem Ipsum available, but the majority have suffered. All the Lorem Ipsum generators.</p>
          </div>
        </div>
      </div>
      <div className="case-timeline">
        <div className="case-timeline-divider" />
        <div className="case-timeline-dot" />
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="case-img ">
              <img src="images/about/process-3.jpg" alt className="img-fluid" />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="case-content">
              <h4 className="mb-3">Competitor Research</h4>
              <p>Nihil fugit officia esse vero, animi tenetur ullam, dolor aperiam minus aliquid enim laudantium fuga! Commodi voluptas, deleniti distinctio quam totam vitae.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="case-timeline">
        <div className="case-timeline-divider" />
        <div className="case-timeline-dot" />
        <div className="row align-items-center">	
          <div className="col-lg-6 order-2 order-lg-1">
            <div className="case-content">
              <h4 className="mb-3">Making Functional Strategy</h4>
              <p>Nihil fugit officia esse vero, animi tenetur ullam, dolor aperiam minus aliquid enim laudantium fuga! Commodi voluptas, deleniti distinctio quam totam vitae.</p>
            </div>
          </div>
          <div className="col-lg-6  order-1 order-lg-2">
            <div className="case-img">
              <img src="images/about/process-2.jpg" alt className="img-fluid" />
            </div>
          </div>
        </div>
      </div>
      <div className="case-timeline">
        <div className="case-timeline-divider" />
        <div className="case-timeline-dot" />
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="case-img">
              <img src="images/about/process-1.jpg" alt className="img-fluid" />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="case-content">
              <h4 className="mb-3">Project Outline</h4>
              <p>Nihil fugit officia esse vero, animi tenetur ullam, dolor aperiam minus aliquid enim laudantium fuga! Commodi voluptas, deleniti distinctio quam totam vitae.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="case-timeline">
        <div className="case-timeline-divider" />
        <div className="case-timeline-dot" />
        <div className="row align-items-center">
          <div className="col-lg-6 order-2 order-lg-1">
            <div className="case-content">
              <h4 className="mb-3">Final Delivery</h4>
              <p>Nihil fugit officia esse vero, animi tenetur ullam, dolor aperiam minus aliquid enim laudantium fuga! Commodi voluptas, deleniti distinctio quam totam vitae.</p>
            </div>
          </div>
          <div className="col-lg-6  order-1 order-lg-2">
            <div className="case-img">
              <img src="images/about/structure_sass.png" alt className="img-fluid" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="section service">
    <div className="container">
      <div className="row">
        <div className="col-lg-10">
          <div className="heading">
            <h2 className="mb-4">Industry Leading Managed <br />Services &amp; Staffing Solutions</h2>
            <p>Quos recusandae dolore, consequuntur nemo hic nisi perferendis. Vel praesentium magnam architecto delectus blanditiis doloremque, deleniti aperiam ab adipisci!</p>
          </div>
        </div>
      </div>
      <div className="row align-items-center">
        <div className="col-lg-4 col-md-6">
          <div className="service-item-list">
            <i className="ti-panel" />
            <p>Flexible Engagement <br />Models </p>
          </div>
          <div className="service-item-list">
            <i className="ti-desktop" />
            <p>Custom Software <br />Development</p>
          </div>
          <div className="service-item-list">
            <i className="ti-light-bulb" />
            <p>Product Innovation &amp;<br />Technology</p>
          </div>
        </div>
        <div className="col-lg-4 col-md-6">
          <div className="service-item-list">
            <i className="ti-mobile" />
            <p>Mobility<br /> Service</p>
          </div>
          <div className="service-item-list">
            <i className="ti-check-box" />
            <p>Quality <br />Assurance</p>
          </div>
          <div className="service-item-list">
            <i className="ti-dashboard" />
            <p>Enterprise <br />Solution</p>
          </div>
        </div>
        <div className="col-lg-4 col-md-6">
          <div className="service-item-list">
            <i className="ti-headphone-alt" />
            <p>Integrated &amp; Dedicated<br /> Teams</p>
          </div>
          <div className="service-item-list">
            <i className="ti-bar-chart-alt" />
            <p>Big data and<br /> analytics</p>
          </div>
          <div className="service-item-list">
            <i className="ti-cloud-up" />
            <p>Cloud backup <br />System</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="cta-2 bg-light">
    <div className="container">
      <div className="cta-block py-5">
        <div className="row align-items-center ">
          <div className="col-lg-8">
            <span className="text-color">For Every type business</span>
            <h2 className="mt-2 mb-4 mb-lg-0">Entrust your project to our best team of professionals</h2>
          </div>
          <div className="col-lg-4">
            <a href="contact.html" className="btn btn-main btn-round-full float-lg-right">Contact Us</a>
          </div>
        </div>
      </div>
    </div>
  </section>
  <Footer/>
</div>

    </>
  )
}

export default Services