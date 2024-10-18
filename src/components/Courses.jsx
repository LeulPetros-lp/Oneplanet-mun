import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

function Courses() {
  // Owl Carousel settings
  const options = {
    loop: true,
    margin: 30,
    nav: true,
    dots: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  };

  return (
    <div>
      <section className="our-courses" id="courses">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-heading">
                <h2>Our Popular Courses</h2>
              </div>
            </div>
            <div className="col-lg-12">
              <OwlCarousel className="owl-theme" {...options}>
                <div className="item">
                  <img src="assets/images/course-01.jpg" alt="Course One" />
                  <div className="down-content">
                    <h4>Morbi tincidunt elit vitae justo rhoncus</h4>
                    <div className="info">
                      <div className="row">
                        <div className="col-8">
                          <ul>
                            <li><i className="fa fa-star" /></li>
                            <li><i className="fa fa-star" /></li>
                            <li><i className="fa fa-star" /></li>
                            <li><i className="fa fa-star" /></li>
                            <li><i className="fa fa-star" /></li>
                          </ul>
                        </div>
                        <div className="col-4"><span>$160</span></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <img src="assets/images/course-02.jpg" alt="Course Two" />
                  <div className="down-content">
                    <h4>Curabitur molestie dignissim purus vel</h4>
                    <div className="info">
                      <div className="row">
                        <div className="col-8">
                          <ul>
                            <li><i className="fa fa-star" /></li>
                            <li><i className="fa fa-star" /></li>
                            <li><i className="fa fa-star" /></li>
                          </ul>
                        </div>
                        <div className="col-4"><span>$180</span></div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Add more items here */}
              </OwlCarousel>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Courses;
