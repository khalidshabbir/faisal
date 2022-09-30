import React from 'react'
import Slider from "react-slick";
const Team = () => {
    var settings = {
        dots: false,
        infinite: false,
        autoplay: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
              dots:false
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
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
    <section className='mt-5'>
    <div className="container">
        <div className="">
            <div className="title wow fadeInUp" style={{ visibility: 'visible', animationName: 'fadeInUp' }}>
                <h1>Our Team</h1>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting <br />industry. </p>
            </div>
        </div>
       
       
               
      
            {/*#End service-text  */}
       
    </div>
    <Slider className='container text-center  p-0 mb-5' {...settings}>
      
    <div className="mystyling  w-75  my-3 " >
                <div className="servise-top wow fadeInUp" style={{ visibility: 'visible', animationName: 'fadeInUp' }}>
                    <img src="images2/testimonial-3.jpg" />
                </div>
                <h2 className="unify_about"> Isabella Dowson </h2>
                <h2 className="unify_about"> Designer </h2>
                <p className="bottom-s">It is a long established fact that a reader will be distracted by the <br /> readable.</p>
                <div className="bigpixi-Team-social">
                <li className="list-inline-item"><a href="https://www.facebook.com/themefisher"><i className="ti-facebook mr-2" /></a></li>
                        <li className="list-inline-item"><a href="https://twitter.com/themefisher"><i className="ti-twitter mr-2" /></a></li>
                        <li className="list-inline-item"><a href="https://www.pinterest.com/themefisher/"><i className="ti-linkedin mr-2 " /></a></li>
                </div>
            </div>
    <div className="mystyling w-75  my-3 " >
                <div className="servise-top wow fadeInUp" style={{ visibility: 'visible', animationName: 'fadeInUp' }}>
                    <img src="images2/testimonial-3.jpg" />
                </div>
                <h2 className="unify_about"> Isabella Dowson </h2>
                <h2 className="unify_about"> Designer </h2>
                <p className="bottom-s">It is a long established fact that a reader will be distracted by the <br /> readable.</p>
                <div className="bigpixi-Team-social">
                <li className="list-inline-item"><a href="https://www.facebook.com/themefisher"><i className="ti-facebook mr-2" /></a></li>
                        <li className="list-inline-item"><a href="https://twitter.com/themefisher"><i className="ti-twitter mr-2" /></a></li>
                        <li className="list-inline-item"><a href="https://www.pinterest.com/themefisher/"><i className="ti-linkedin mr-2 " /></a></li>
                </div>
            </div>
    <div className="mystyling w-75  my-3 " >
                <div className="servise-top wow fadeInUp" style={{ visibility: 'visible', animationName: 'fadeInUp' }}>
                    <img src="images2/testimonial-3.jpg" />
                </div>
                <h2 className="unify_about"> Isabella Dowson </h2>
                <h2 className="unify_about"> Designer </h2>
                <p className="bottom-s">It is a long established fact that a reader will be distracted by the <br /> readable.</p>
                <div className="bigpixi-Team-social">
                <li className="list-inline-item"><a href="https://www.facebook.com/themefisher"><i className="ti-facebook mr-2" /></a></li>
                        <li className="list-inline-item"><a href="https://twitter.com/themefisher"><i className="ti-twitter mr-2" /></a></li>
                        <li className="list-inline-item"><a href="https://www.pinterest.com/themefisher/"><i className="ti-linkedin mr-2 " /></a></li>
                </div>
            </div>
    <div className="mystyling  w-75 my-3 " >
                <div className="servise-top wow fadeInUp" style={{ visibility: 'visible', animationName: 'fadeInUp' }}>
                    <img src="images2/testimonial-3.jpg" />
                </div>
                <h2 className="unify_about"> Isabella Dowson </h2>
                <h2 className="unify_about"> Designer </h2>
                <p className="bottom-s">It is a long established fact that a reader will be distracted by the <br /> readable.</p>
                <div className="bigpixi-Team-social">
                <li className="list-inline-item"><a href="https://www.facebook.com/themefisher"><i className="ti-facebook mr-2" /></a></li>
                        <li className="list-inline-item"><a href="https://twitter.com/themefisher"><i className="ti-twitter mr-2" /></a></li>
                        <li className="list-inline-item"><a href="https://www.pinterest.com/themefisher/"><i className="ti-linkedin mr-2 " /></a></li>
                </div>
            </div>
   
               </Slider>
</section>
  )
}

export default Team