import React from 'react'

const About = () => {
  return (
    <>
    <div className="banner-header section-padding valign bg-img bg-fixed"  data-overlay-dark={6}  data-background="img/images/banner/1.webp">
        <div className="container">
            <div className="row">
                <div className="col-md-12 caption mt-90">
                <span>
                    <i className="star-rating" />
                    <i className="star-rating" />
                    <i className="star-rating" />
                    <i className="star-rating" />
                    <i className="star-rating" />
                </span>
                <h5>Hotel Runway Inn </h5>
                <h1>About</h1>
                </div>
            </div>
        </div>
        </div>
        <section className="about section-padding">
            <div className="container">
                <div className="row">
                <div
                    className="col-md-6 mb-30 animate-box"
                    data-animate-effect="fadeInUp"
                >
                    {/* <span>
                            <i class="star-rating"></i>
                            <i class="star-rating"></i>
                            <i class="star-rating"></i>
                            <i class="star-rating"></i>
                            <i class="star-rating"></i>
                        </span> */}
                    <div className="section-subtitle">Hotel Runway Inn</div>
                    <div className="section-title">Enjoy a Luxury Experience</div>
                    <p>
                    Hotel Runway Inn is conveniently located just outside Lal Bahadur
                    Shastri International Airport, Varanasi and is well suited to business
                    and leisure travelers. Guests return to the upscale furnishings found
                    in our contemporary rooms and suites, after a busy day and take time
                    to indulge in our world class amenities and services.
                    </p>
                    <p>
                    Sleek style, plush furnishings and modern decor combine to create an
                    unforgettable stay at Hotel Runway Inn. Each of our 31 contemporary
                    designed well-appointed rooms and suites offer incredible views.Enjoy
                    all conveniences and select from Economy, Premium Economy, Business
                    Class and Maharaja Suite. Enjoy our roof top Swimming Pool with Green
                    lawns and indulge in the open dining area, relishing the ambience
                    &amp; beauty.
                    </p>
                    {/* call */}
                    <div className="reservations">
                    <div className="icon">
                        <span className="flaticon-call" />
                    </div>
                    <div className="text">
                        <p>Reservation</p> <a href="tel:93058 04900">93058 04900</a>
                    </div>
                    </div>
                </div>
                {/* <div class="col col-md-3 animate-box" data-animate-effect="fadeInUp">
                        <img src="img/rooms/8.jpg" alt="" class="mt-90 mb-30">
                    </div>
                    <div class="col col-md-3 animate-box" data-animate-effect="fadeInUp">
                        <img src="img/rooms/2.jpg" alt="">
                    </div> */}
                <div className="col col-md-3 animate-box" data-animate-effect="fadeInUp">
                    <img
                    src="img/images/Gallery Edited/2-1.png"
                    alt=""
                    className="mt-90 mb-30"
                    />
                </div>
                <div className="col col-md-3 animate-box" data-animate-effect="fadeInUp">
                    <img src="img/images/Gallery Edited/1.png" alt="" />
                </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default About
