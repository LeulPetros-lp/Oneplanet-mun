import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

function Services() {
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
            <section className="services">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <OwlCarousel className="owl-theme" {...options}>
                                <div className="item">
                                    <div className="icon">

                                    </div>
                                    <div className="down-content">
                                        <h4>Best Education</h4>
                                        <p>Suspendisse tempor mauris a sem elementum bibendum. Praesent facilisis massa non vestibulum.</p>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="icon">

                                    </div>
                                    <div className="down-content">
                                        <h4>Best Teachers</h4>
                                        <p>Suspendisse tempor mauris a sem elementum bibendum. Praesent facilisis massa non vestibulum.</p>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="icon">

                                    </div>
                                    <div className="down-content">
                                        <h4>Best Students</h4>
                                        <p>Suspendisse tempor mauris a sem elementum bibendum. Praesent facilisis massa non vestibulum.</p>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="icon">

                                    </div>
                                    <div className="down-content">
                                        <h4>Online Meeting</h4>
                                        <p>Suspendisse tempor mauris a sem elementum bibendum. Praesent facilisis massa non vestibulum.</p>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="icon">

                                    </div>
                                    <div className="down-content">
                                        <h4>Best Networking</h4>
                                        <p>Suspendisse tempor mauris a sem elementum bibendum. Praesent facilisis massa non vestibulum.</p>
                                    </div>
                                </div>
                            </OwlCarousel>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Services;
