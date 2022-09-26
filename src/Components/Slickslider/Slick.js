import React from 'react'
import Slider from "react-slick";
const Slick = () => {
    var settings = {
        dots: false,
        infinite: false,
        autoplay: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
    }
  return (
    <>
       <section className="section testimonial">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8">
                                <div className="heading">
                                    <h2 className="mb-4">What they say about us</h2>
                                    <p>They are truely amazing in the industry ,molestiae expedita aspernatur officia, similique minima laudantium. Corrupti ipsa perspiciatis commodi nesciunt rerum mollitia enim voluptate!</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container-fluid" id='portfolio-gallery'>
                        <div className="row">
                            <div className="col-lg-12 testimonial-wrap">
                            <Slider {...settings}>
                                <div className="testimonial-block">
                                    <p>
                                        Maiores quasi placeat harum itaque, ducimus cumque quas expedita hic. Qui ullam iste provident mollitia expedita facilis fuga repellat.
                                    </p>
                                    <div className="client-info d-flex align-items-center">
                                        <div className="client-img">
                                            <img src="images/team/testimonial1.jpg" alt className="img-fluid" />
                                        </div>
                                        <div className="info">
                                            <h6>John Partho</h6>
                                            <span>Newyork USA</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="testimonial-block">
                                    <p>
                                        Maiores quasi placeat harum itaque, ducimus cumque quas expedita hic. Qui ullam iste provident mollitia expedita facilis fuga repellat.
                                    </p>
                                    <div className="client-info d-flex align-items-center">
                                        <div className="client-img">
                                            <img src="images/team/testimonial2.jpg" alt className="img-fluid" />
                                        </div>
                                        <div className="info">
                                            <h6>John Partho</h6>
                                            <span>Newyork USA</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="testimonial-block">
                                    <p>
                                        Maiores quasi placeat harum itaque, ducimus cumque quas expedita hic. Qui ullam iste provident mollitia expedita facilis fuga repellat.
                                    </p>
                                    <div className="client-info d-flex align-items-center">
                                        <div className="client-img">
                                            <img src="images/team/testimonial1.jpg" alt className="img-fluid" />
                                        </div>
                                        <div className="info">
                                            <h6>John Partho</h6>
                                            <span>Newyork USA</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="testimonial-block">
                                    <p>
                                        Maiores quasi placeat harum itaque, ducimus cumque quas expedita hic. Qui ullam iste provident mollitia expedita facilis fuga repellat.
                                    </p>
                                    <div className="client-info d-flex align-items-center">
                                        <div className="client-img">
                                            <img src="images/team/testimonial2.jpg" alt className="img-fluid" />
                                        </div>
                                        <div className="info">
                                            <h6>John Partho</h6>
                                            <span>Newyork USA</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="testimonial-block">
                                    <p>
                                        Maiores quasi placeat harum itaque, ducimus cumque quas expedita hic. Qui ullam iste provident mollitia expedita facilis fuga repellat.
                                    </p>
                                    <div className="client-info d-flex align-items-center">
                                        <div className="client-img">
                                            <img src="images/team/testimonial1.jpg" alt className="img-fluid" />
                                        </div>
                                        <div className="info">
                                            <h6>John Partho</h6>
                                            <span>Newyork USA</span>
                                        </div>
                                    </div>
                                </div>
                                </Slider>
                            </div>
                        </div>
                    </div>
                </section></>
  )
}

export default Slick