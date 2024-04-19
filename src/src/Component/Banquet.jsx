import React from 'react'
import {Helmet} from "react-helmet";

const Banquet = () => {
  return (
    <div>
      <Helmet>
            <meta charSet="utf-8" />
            <title>Elegant Event Spaces at Hotel Runway Inn - Host Unforgettable Occasions</title>
            <meta name="description" content="Make your special occasions truly memorable at Hotel Runway Inn. Explore our versatile banquet facilities, perfect for weddings, conferences, and more, amidst the charming ambiance of Varanasi." />
            <link rel="canonical" href="https://www.hotelrunwayinn.com" />
        </Helmet>

<div
    className="banner-header section-padding valign bg-img bg-fixed"
    data-overlay-dark={6}
    data-background="img/images/banner/1.webp"
  >
    <div className="container">
      <div className="row">
        <div className="col-md-12 caption mt-90">
          <span>
            <i className="star-rating" />
            <i className="star-rating" />
            <i className="star-rating" />
            <i className="star-rating" />
          </span>
          <h5>The Runway Inn Hotel</h5>
          <h1>Banquet</h1>
        </div>
      </div>
    </div>
  </div>
    <section className="services section-padding">
            <div className="container">
              <div className="row">
                <div className="col-md-6 p-0 animate-box" data-animate-effect="fadeInLeft">
                  <div className="img left">
                      <a href="/">
                        <img src="img/images/banquet/IMG_2093.1.jpg" alt="" />
                      </a>
                  </div>
                </div>
                <div className="col-md-6 p-0 bg-cream valign animate-box" data-animate-effect="fadeInRight">
                  <div className="content">
                    <div className="cont text-left">
                      <div className="info">
                          <h6>Banquet</h6>
                      </div>
                    <h4>MEHFIL</h4>
                    <p>
                      Looking for the perfect venue for your next official meeting, social gathering, or engagement? Our banquet section, located at ground level, offers a spacious and versatile setting for events with 80-100 guests. The U-shape seating arrangement can comfortably accommodate 25-30 guests, providing a conducive environment for productive meetings or lively social gatherings. With our attention to detail and commitment to excellence, we ensure that every event is a memorable success.
                    </p>
                    {/* <div className="butn-dark">
                        {" "}
                        <a href="/">
                        <span>Learn More</span>
                        </a>{" "}
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
                <div
                className="col-md-6 bg-cream p-0 order2 valign animate-box"
                data-animate-effect="fadeInLeft"
                >
                <div className="content">
                    <div className="cont text-left">
                    <div className="info">
                        <h6>Banquet</h6>
                    </div>
                    <h4> JALSA</h4>
                    <p>
                      Elevate your event experience at our banquet section, situated on Level-3, offering a delightful ambiance and picturesque views. With flexible seating arrangements including theatre style, U-shape, cluster, and classroom, our venue can accommodate approximately 150-250 guests. Whether you're hosting a conference, seminar, or workshop, our versatile space and impeccable service ensure a successful and memorable event.
                    </p>
                    {/* <div className="butn-dark">
                        {" "}
                        <a href="/">
                        <span>Learn More</span>
                        </a>{" "}
                    </div> */}
                    </div>
                </div>
                </div>
                <div
                className="col-md-6 p-0 order1 animate-box"
                data-animate-effect="fadeInRight"
                >
                <div className="img">
                    <a href="/">
                    <img src="img/images/banquet/1.1.png" alt="" />
                    </a>
                </div>
                </div>
            </div>
            </div>
        </section>
    </div>
  )
}

export default Banquet
