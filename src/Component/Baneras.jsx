import React from 'react'
// import "react-responsive-carousel/lib/styles/carousel.min.css"; 

const Baneras = () => {
  return (
    <div>
        <div
    className="banner-header section-padding valign bg-img bg-fixed"
    data-overlay-dark={6}
    // data-background="img/images/banner/1.webp"
    style={{backgroundImage: 'url("/img/images/banner/1.webp")'}}
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
          <h5>Hotel Runway Inn</h5>
          <h1>Simply Benares</h1>
        </div>
      </div>
    </div>
  </div>
      <section className="rooms-page section-padding" data-scroll-index={1}>
            <div className="container">
            <div className="row">
                <div className="col-md-6 text-left">
                <span>
                    <i className="star-rating" />
                    <i className="star-rating" />
                    <i className="star-rating" />
                    <i className="star-rating" />
                </span>
                <div className="section-subtitle">
                    Unforgettable Cuisine while Dining
                </div>
                <div className='d-flex'>
                    <div className="section-title">Simply Benares</div>
                    <img src="img/images/restaurant/banaras.png" alt="" className="ms-5 w-25 h-25" />
                </div>
                
                <img src="img/rooms/resturant1.png" alt="" className="mt-30 mb-30" />
                </div>
                <div className="col-md-6">
                <p className="mb-30">
                    A Multicuisine Casual Dining Restaurant. Fresh and exciting
                    multi-cuisine takes centre stage here with 55-60 Cover, Full Day
                    Dining with nice ambience just outside Varanasi Airport.
                </p>
                <h6>Hours</h6>
                <ul className="list-unstyled page-list mb-30">
                    <li>
                    <div className="page-list-icon">
                        {" "}
                        <span className="ti-time" />{" "}
                    </div>
                    <div className="page-list-text">
                        <p>Breakfast: 7.00 am – 11.00 am (daily)</p>
                    </div>
                    </li>
                    <li>
                    <div className="page-list-icon">
                        {" "}
                        <span className="ti-time" />{" "}
                    </div>
                    <div className="page-list-text">
                        <p>Lunch: 12.00 noon – 2.00 pm (daily)</p>
                    </div>
                    </li>
                    <li>
                    <div className="page-list-icon">
                        {" "}
                        <span className="ti-time" />{" "}
                    </div>
                    <div className="page-list-text">
                        <p>Dinner: open from 6.30 pm, last order at 10.00 pm (daily)</p>
                    </div>
                    </li>
                </ul>
                </div>
            </div>
            </div>
        </section>
    </div>
  )
}

export default Baneras
