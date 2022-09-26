import React from 'react'

const Footer = () => {
  return (
    <>
       <footer className="footer section">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3 mr-auto col-sm-6">
                                <div className="widget mb-5 mb-lg-0">
                                    <div className="logo mb-4">
                                        <h3>Orbitor</h3>
                                    </div>
                                    <p>Tempora dolorem voluptatum nam vero assumenda voluptate, facilis ad eos obcaecati tenetur veritatis eveniet distinctio possimus.</p>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-6 col-sm-6">
                                <div className="widget mb-5 mb-lg-0">
                                    <h4 className="text-capitalize mb-4">Company</h4>
                                    <ul className="list-unstyled footer-menu lh-35">
                                        <li><a href="#">About</a></li>
                                        <li><a href="#">Services</a></li>
                                        <li><a href="#">Team</a></li>
                                        <li><a href="#">Contact</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6">
                                <div className="widget mb-5 mb-lg-0">
                                    <h4 className="text-capitalize mb-4">Support</h4>
                                    <ul className="list-unstyled footer-menu lh-35">
                                        <li><a href="#">Terms &amp; Conditions</a></li>
                                        <li><a href="#">Privacy Policy</a></li>
                                        <li><a href="#">Support</a></li>
                                        <li><a href="#">FAQ</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6">
                                <div className="widget widget-contact mb-5 mb-lg-0">
                                    <h4 className="text-capitalize mb-4">Get in Touch</h4>
                                    <h6><a href="tel:+23-345-67890"> <i className="ti-headphone-alt mr-3" />Support@megakit.com</a></h6>
                                    <h6><a href="mailto:support@gmail.com"> <i className="ti-mobile mr-3" />+23-456-6588</a></h6>
                                    <ul className="list-inline footer-socials mt-5">
                                        <li className="list-inline-item"><a href="https://www.facebook.com/themefisher"><i className="ti-facebook mr-2" /></a></li>
                                        <li className="list-inline-item"><a href="https://twitter.com/themefisher"><i className="ti-twitter mr-2" /></a></li>
                                        <li className="list-inline-item"><a href="https://www.pinterest.com/themefisher/"><i className="ti-linkedin mr-2 " /></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="footer-btm py-4 mt-5">
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="copyright">
                                        © Copyright Reserved to <span className="text-color">Orbitor</span> by <a href="https://themefisher.com/" target="_blank">Themefisher</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
    </>
  )
}

export default Footer