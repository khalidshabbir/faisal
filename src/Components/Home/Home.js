import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import CountUp from 'react-countup';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import Slick from '../Slickslider/Slick';
import Whatsapp from '../Whatsapp';
import Slider from "react-slick";
import Team from '../Team/Team';
const Home = () => {
 
    return (
        <>


            <div>
                <Navbar />
                <Whatsapp />
                {/* Slider Start */}
                <section className="banner d-flex align-items-center">
                    <div className="banner-img-part" />
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-10 col-md-12 col-xl-8">
                                <div className="block">
                                    <span className="text-uppercase text-sm letter-spacing ">The most powerful Solution</span>
                                    <h1 className="mb-3 mt-3">Digital experience with Orbitor</h1>
                                    <p className="mb-5">Veritatis earum aliquid doloribus molestias, eveniet molestiae aperiam ratione. Facilis velit voluptatibus impedit eligendi delectus illo earum voluptatum, laudantium molestiae!</p>
                                    <a href="about.html" target="_blank" className="btn btn-main">Learn more about Digicon<i className="fa fa-angle-right ml-2" /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section about">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4 col-md-6 ">
                                <div className="about-item mb-5 mb-lg-5">
                                    <div className="icon">
                                        <i className="ti-light-bulb" />
                                    </div>
                                    <div className="content">
                                        <h4 className="mt-3 mb-3">Custom Effective Software development</h4>
                                        <p className="mb-4">Saepe nulla praesentium eaque omnis perferendis a doloremque.</p>
                                        <a href="#"> Read More </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="about-item mb-5 mb-lg-5">
                                    <div className="icon">
                                        <i className="ti-panel" />
                                    </div>
                                    <div className="content">
                                        <h4 className="mt-3 mb-3">Analyse Your Expensees On Every Device</h4>
                                        <p className="mb-4">Saepe nulla praesentium eaque omnis perferendis a doloremque.</p>
                                        <a href="#"> Read More </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="about-item">
                                    <div className="icon">
                                        <i className="ti-headphone-alt" />
                                    </div>
                                    <div className="content">
                                        <h4 className="mt-3 mb-3">Creating a dedicated IT business growth</h4>
                                        <p className="mb-4">Saepe nulla praesentium eaque omnis perferendis a doloremque.</p>
                                        <a href="#"> Read More </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section process">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-5">
                                <div className="process-block pl-4">
                                    <span className="text-uppercase text-sm letter-spacing">Why choose us</span>
                                    <h2 className="mb-4 mt-3">We help you to make work easy</h2>
                                    <p className="mb-4">We understand what your business means to you,your requirements considering trends.Smet nemo excepturi voluptas eligendi .</p>
                                </div>
                            </div>
                            <div className="col-lg-7 col-xs-12 col-md-12">
                                <div className="row">
                                    <div className="col-lg-6 col-md-6 col-sm-6">
                                        <div className="icon-block text-center mb-4 mb-lg-0">
                                            <i className="ti-light-bulb" />
                                            <h5>Data analysis</h5>
                                            <p>A complete web app solution for business</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-6">
                                        <div className="icon-block text-center mt-4 mb-4 mb-lg-0">
                                            <i className="ti-panel" />
                                            <h5>Web Development</h5>
                                            <p>A complete web app solution for business</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-6">
                                        <div className="icon-block text-center">
                                            <i className="ti-search" />
                                            <h5>Content Mangement</h5>
                                            <p>A complete web app solution for business</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-6">
                                        <div className="icon-block text-center mt-4">
                                            <i className="ti-rocket" />
                                            <h5>Mobility</h5>
                                            <p>A complete web app solution for business</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className='pt-0 mb-5'>
                    <div className="container">
                        <div className=" ">
                            <div className="title wow fadeInUp ">
                                <h2> service</h2>
                                <h1>Optimize Every Touchpoint in the Customer Experience</h1>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem<br /> Ipsum has been the industry's </p>
                            </div>
                        </div>
                        <div className="row about_row  py-40">
                            {/*#about-text start */}
                            <div className="who_we_area col-md-4 col-sm-6 col-4pad wow fadeInUp">
                                <div className="service-1">
                                    <div className="servise-top wow fadeInUp">
                                        <img src="images2/icone-1.png" />
                                    </div>
                                    <h2 className="unify"> Marketing </h2>
                                    <p className="bottom-s">It is a long established fact that a reader will be distracted by the <br /> readable.</p>
                                    <div className="top-banner wow fadeInRight" style={{ visibility: 'visible', animationName: 'fadeInRight' }}>
                                        <a id="#services" href="#services" className="btn btn-default btn_text_cap   wow fadeInUp  js-scroll-trigger" data-wow-delay=" 0.5s" style={{ visibility: 'visible', animationDelay: '0.5s', animationName: 'fadeInUp' }}><span className="skew_14">Learn more </span></a>
                                    </div>
                                </div>
                            </div>
                            <div className="who_we_area col-md-4 col-sm-6 col-4pad wow fadeInUp">
                                <div className="service-1">
                                    <div className="servise-top wow fadeInUp">
                                        <img src="images2/icone-2.png" />
                                    </div>
                                    <h2 className="unify"> Analyze </h2>
                                    <p className="bottom-s">It is a long established fact that a reader will be distracted by the<br /> readable. </p>
                                    <div className="top-banner wow fadeInRight" style={{ visibility: 'visible', animationName: 'fadeInRight' }}>
                                        <a id="#services" href="#services" className="btn btn-default  btn_text_cap wow fadeInUp  js-scroll-trigger" data-wow-delay=" 0.5s" style={{ visibility: 'visible', animationDelay: '0.5s', animationName: 'fadeInUp' }}><span className="skew_14">Learn more </span></a>
                                    </div>
                                </div>
                            </div>
                            <div className="who_we_area col-md-4 col-sm-6 col-4pad wow fadeInUp">
                                <div className="service-1">
                                    <div className="servise-top wow fadeInUp">
                                        <img src="images2/icone-3.png" />
                                    </div>
                                    <h2 className="unify"> Marketing </h2>
                                    <p className="bottom-s">It is a long established fact that a reader will be distracted by the<br /> readable. </p>
                                    <div className="top-banner wow fadeInRight" style={{ visibility: 'visible', animationName: 'fadeInRight' }}>
                                        <a id="#services" href="#services" className="btn btn-default btn_text_cap wow fadeInUp  js-scroll-trigger" data-wow-delay=" 0.5s" style={{ visibility: 'visible', animationDelay: '0.5s', animationName: 'fadeInUp' }}><span className="skew_14">Learn more </span></a>
                                    </div>
                                </div>
                            </div>
                            <div className="who_we_area col-md-4 col-sm-6 col-4pad wow fadeInUp">
                                <div className="service-1">
                                    <div className="servise-top wow fadeInUp">
                                        <img src="images2/icone-3.png" />
                                    </div>
                                    <h2 className="unify"> Marketing </h2>
                                    <p className="bottom-s">It is a long established fact that a reader will be distracted by the<br /> readable. </p>
                                    <div className="top-banner wow fadeInRight" style={{ visibility: 'visible', animationName: 'fadeInRight' }}>
                                        <a id="#services" href="#services" className="btn btn-default btn_text_cap wow fadeInUp  js-scroll-trigger" data-wow-delay=" 0.5s" style={{ visibility: 'visible', animationDelay: '0.5s', animationName: 'fadeInUp' }}><span className="skew_14">Learn more </span></a>
                                    </div>
                                </div>
                            </div>
                            <div className="who_we_area col-md-4 col-sm-6 col-4pad wow fadeInUp">
                                <div className="service-1">
                                    <div className="servise-top wow fadeInUp">
                                        <img src="images2/icone-3.png" />
                                    </div>
                                    <h2 className="unify"> Marketing </h2>
                                    <p className="bottom-s">It is a long established fact that a reader will be distracted by the<br /> readable. </p>
                                    <div className="top-banner wow fadeInRight" style={{ visibility: 'visible', animationName: 'fadeInRight' }}>
                                        <a id="#services" href="#services" className="btn btn-default btn_text_cap wow fadeInUp  js-scroll-trigger" data-wow-delay=" 0.5s" style={{ visibility: 'visible', animationDelay: '0.5s', animationName: 'fadeInUp' }}><span className="skew_14">Learn more </span></a>
                                    </div>
                                </div>
                            </div>
                            <div className="who_we_area col-md-4 col-sm-6 col-4pad wow fadeInUp">
                                <div className="service-1">
                                    <div className="servise-top wow fadeInUp">
                                        <img src="images2/icone-3.png" />
                                    </div>
                                    <h2 className="unify"> Marketing </h2>
                                    <p className="bottom-s">It is a long established fact that a reader will be distracted by the<br /> readable. </p>
                                    <div className="top-banner wow fadeInRight" style={{ visibility: 'visible', animationName: 'fadeInRight' }}>
                                        <a id="#services" href="#services" className="btn btn-default btn_text_cap wow fadeInUp  js-scroll-trigger" data-wow-delay=" 0.5s" style={{ visibility: 'visible', animationDelay: '0.5s', animationName: 'fadeInUp' }}><span className="skew_14">Learn more </span></a>
                                    </div>
                                </div>
                            </div>
                            {/*#End service-text  */}
                        </div>
                    </div>

                </section>
                <section className="section cta">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-5">
                                <div className="cta-content bg-white p-5 rounded">
                                    <h3 className="mb-4">Assurance Service In Software<span className="text-color-primary"> Testing</span> </h3>
                                    <p className="mb-30">An Independent Validation and Testing services from SISAR. Helps to reduce software development efforts</p>
                                    <a href="project.html" className="btn btn-main">Portfolio<i className="fa fa-angle-right ml-2" /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <Slick />
                {/* section portfolio start */}
                <section className="section portfolio pb-0">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8">
                                <div className="heading">
                                    <h2 className="mb-4">We’ve Done Lot’s of Work, Let’s Check Some From Here</h2>
                                    <p>We have the best experts to elevate your business to the next level, try is and you will see! We have the best experts to elevate your </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container-fluid">
                        <div className="row portfolio-gallery">
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
                {/* section portfolio END */}
                {/* section Counter Start */}
                <section className="section counter">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3 col-md-6 col-sm-6">
                                <div className="counter-item text-center mb-5 mb-lg-0">
                                    <h2 className="mb-0"><span id='counterstat' className="counter-stat font-weight-bold"><CountUp start={0}
                                        end={500}></CountUp> </span> +</h2>
                                    <p>Project Done</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6">
                                <div className="counter-item text-center mb-5 mb-lg-0">
                                    <h2 className="mb-0"><span id='counterstat' className="counter-stat font-weight-bold"><CountUp start={0}
                                        end={1000}></CountUp> </span>M </h2>
                                    <p>User Worldwide</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6">
                                <div className="counter-item text-center mb-5 mb-lg-0">
                                    <h2 className="mb-0"><span id='counterstat' className="counter-stat font-weight-bold">39</span></h2>
                                    <p>Availble Country</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6">
                                <div className="counter-item text-center">
                                    <h2 className="mb-0"><span className="counter-stat font-weight-bold"><CountUp start={0}
                                        end={7000}></CountUp> </span></h2>
                                    <p>Award Winner </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            
                {/* section Counter End  */}
               <Team/>
                {/* footer Start */}
                <Footer />
            </div>


        </>
    )
}

export default Home