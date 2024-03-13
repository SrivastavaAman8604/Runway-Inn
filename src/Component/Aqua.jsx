import React from 'react'

const Aqua = () => {
  return (
    <>
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
          <h1>Aqua Lounge</h1>
        </div>
      </div>
    </div>
  </div>
      <section className="rooms-page section-padding" data-scroll-index={1}>
            <div className="container">
            <div className="row">
                <div className="col-md-6">
                <p className="mb-30">
                    For a sophisticated time, head here. It's perfect for meetings
                    between business partners, colleagues and friends. Explore the roof
                    top pool with lounge, at Level-3 along with wooden deck floor and
                    lavish garden, with sitting for approx 40-45 pax, amidst a half
                    covered and hald open ambience. Enjoy as you relax.
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
                    {/* <h6>Dress Code</h6>
                    <p>Smart casual (no shorts, hats, or sandals permitted)</p>
                    <h6>Terrace</h6>
                    <p>Open for drinks only</p> */}
                </div>
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
                    <div className="section-title ">Aqua Lounge</div>
                    <img src="img/images/restaurant/aqua.png" alt="" className="ms-5 w-25 h-25" />
                </div>
                <img src="img/rooms/resturant.png" alt="" className="mt-30 mb-30" />
                </div>
            </div>
            </div>
        </section>
    </>
  )
}

export default Aqua
