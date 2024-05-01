import React from 'react'

const Banner = () => {
  return (
    <div>
      <header className="header slider-fade">
            <div className="owl-carousel owl-theme">
            {/* The opacity on the image is made with "data-overlay-dark="number". You can change it using the numbers 0-9. */}
            <div
                className="text-center item bg-img"
                data-overlay-dark={6}
                data-background="img/slider/banner-4.webp"
                loading="lazy"
            >
                <div className="v-middle caption">
                    <div className="container">
                    <div className="row">
                        <div className="col-md-10 offset-md-1">
                        <span>
                            <i className="star-rating" />
                            <i className="star-rating" />
                            <i className="star-rating" />
                            <i className="star-rating" />
                        </span>
                        <h4>Luxury Airport Hotel </h4>
                        <h1>Enjoy a Luxury Experience</h1>
                        <div className="butn-light mt-30 mb-30">
                            {" "}
                            <a href="/Room" data-scroll-nav={1}>
                                <span>Rooms &amp; Suites</span>
                            </a>{" "}
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
            <div
                className="text-center item bg-img"
                data-overlay-dark={6}
                data-background="img/slider/19.webp"
                loading="lazy"
            >
                <div className="v-middle caption">
                    <div className="container">
                    <div className="row">
                        <div className="col-md-10 offset-md-1">
                        <span>
                            <i className="star-rating" />
                            <i className="star-rating" />
                            <i className="star-rating" />
                            <i className="star-rating" />
                        </span>
                        <h4>Unique Place to Relax &amp; Enjoy</h4>
                        <h1>The Perfect Base For You</h1>
                        <div className="butn-light mt-30 mb-30">
                            {" "}
                            <a href="/" data-scroll-nav={1}>
                            <span>Rooms &amp; Suites</span>
                            </a>{" "}
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
            <div
                className="text-center item bg-img"
                data-overlay-dark={6}
                data-background="img/slider/rooftop.webp"
                loading="lazy"
            >
                <div className="v-middle caption">
                    <div className="container">
                    <div className="row">
                        <div className="col-md-10 offset-md-1">
                        <span>
                            <i className="star-rating" />
                            <i className="star-rating" />
                            <i className="star-rating" />
                            <i className="star-rating" />
                        </span>
                        <h4>The Ultimate Luxury Experience</h4>
                        <h1>Luxury Boutique Airport Hotel</h1>
                        <div className="butn-light mt-30 mb-30">
                            {" "}
                            <a href="/" data-scroll-nav={1}>
                            <span>Rooms &amp; Suites</span>
                            </a>{" "}
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
            </div>
            {/* slider reservation */}
            <div className="reservation">
            <a href="tel:93058 04900">
                <div className="icon d-flex justify-content-center align-items-center">
                <i className="flaticon-call" />
                </div>
                <div className="call">
                <span>93058 04900</span> <br />
                Reservation
                </div>
            </a>
            </div>
        </header>
    </div>
  )
}

export default Banner
