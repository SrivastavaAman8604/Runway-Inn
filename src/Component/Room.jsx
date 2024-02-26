import React from 'react'
import { Link } from 'react-router-dom'

const Room = () => {
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
            <i className="star-rating" />
          </span>
          <h5>The Runway Inn Hotel</h5>
          <h1>Rooms &amp; Banquets</h1>
        </div>
      </div>
    </div>
  </div>


  <section className="section-padding">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div
            className="rooms2 mb-90 animate-box"
            data-animate-effect="fadeInUp"
          >
            <figure >
            <img src="img/images/Business class edited/IMG_3104.1 - Copy.JPG" alt="" className="img-fluid" style={{aspectRatio:'5/3'}}/>
            </figure>
            <div className="caption">
              <h3>
                5000₹ <span>/ Night</span>
              </h3>
              <h4>
                <a href="room-details.html">Business Class</a>
              </h4>
              <p>
                Stay productive and unwind in our Business Suite, featuring a dedicated workspace and luxurious amenities tailored for business travelers.
              </p>
              <div className="row room-facilities">
                <div className="col-md-4">
                  <ul>
                    <li>
                      <i className="flaticon-group" /> 2-3 Persons
                    </li>
                    <li>
                      <i className="flaticon-wifi" /> Free Wifi
                    </li>
                  </ul>
                </div>
                <div className="col-md-4">
                  <ul>
                    <li>
                      <i className="flaticon-bed" /> Twin Bed
                    </li>
                    <li>
                      <i className="flaticon-breakfast" /> Breakfast
                    </li>
                  </ul>
                </div>
                <div className="col-md-4">
                  <ul>
                    <li>
                      <i className="flaticon-clock-1" /> 200 sqft room
                    </li>
                    <li>
                      <i className="flaticon-swimming" /> Swimming Pool
                    </li>
                  </ul>
                </div>
              </div>
              <hr className="border-2" />
              <div className="info-wrapper">
                {/* <div className="more">
                  <a href="/" className="link-btn" tabIndex={0}>
                    Details <i className="ti-arrow-right" />
                  </a>
                </div> */}
                <div className="butn-dark">
                  {" "}
                  <Link to='https://asiatech.in/booking_engine/index3?token=NjAyNw==' data-scroll-nav={1}>
                    <span>Book Now</span>
                  </Link>{" "}
                </div>
              </div>
            </div>
          </div>
          <div
            className="rooms2 mb-90 left animate-box"
            data-animate-effect="fadeInUp"
          >
            <figure>
            <img src="img/images/Family Suite Edited/1-1.jpg" alt="" className="img-fluid"/>
            </figure>
            <div className="caption">
              <h3>
                6000₹ <span>/ Night</span>
              </h3>
              <h4>
                <a href="/">Family Suite</a>
              </h4>
              <p>
                Create lasting memories in our spacious Family Suite, designed to accommodate your family with comfort and convenience in mind.
              </p>
              <div className="row room-facilities">
                <div className="col-md-4">
                  <ul>
                    <li>
                      <i className="flaticon-group" /> 2-4 Persons
                    </li>
                    <li>
                      <i className="flaticon-wifi" /> Free Wifi
                    </li>
                  </ul>
                </div>
                <div className="col-md-4">
                  <ul>
                    <li>
                      <i className="flaticon-bed" /> Twin Bed
                    </li>
                    <li>
                      <i className="flaticon-breakfast" /> Breakfast
                    </li>
                  </ul>
                </div>
                <div className="col-md-4">
                  <ul>
                    <li>
                      <i className="flaticon-clock-1" /> 200 sqft Room
                    </li>
                    <li>
                      <i className="flaticon-swimming" /> Swimming Pool
                    </li>
                  </ul>
                </div>
              </div>
              <hr className="border-2" />
              <div className="info-wrapper">
                {/* <div className="more">
                  <a href="/" className="link-btn" tabIndex={0}>
                    Details <i className="ti-arrow-right" />
                  </a>
                </div> */}
                <div className="butn-dark">
                  {" "}
                  <Link to='https://asiatech.in/booking_engine/index3?token=NjAyNw==' data-scroll-nav={1}>
                    <span>Book Now</span>
                  </Link>{" "}
                </div>
              </div>
            </div>
          </div>
          <div
            className="rooms2 mb-90 animate-box"
            data-animate-effect="fadeInUp"
          >
            <figure>
            <img src="img/images/Premium Economy/8.webp" alt="" className="img-fluid"/>
            </figure>
            <div className="caption">
              <h3>
                7000₹ <span>/ Night</span>
              </h3>
              <h4>
                <a href="/">Premium Economy Suite</a>
              </h4>
              <p>
                Experience comfort and style in our Premium Economy Suite, offering modern amenities and a relaxing ambiance at an affordable price.
              </p>
              <div className="row room-facilities">
                <div className="col-md-4">
                  <ul>
                    <li>
                      <i className="flaticon-group" /> 2-3 Persons
                    </li>
                    <li>
                      <i className="flaticon-wifi" /> Free Wifi
                    </li>
                  </ul>
                </div>
                <div className="col-md-4">
                  <ul>
                    <li>
                      <i className="flaticon-bed" /> Twin Bed
                    </li>
                    <li>
                      <i className="flaticon-breakfast" /> Breakfast
                    </li>
                  </ul>
                </div>
                <div className="col-md-4">
                  <ul>
                    <li>
                      <i className="flaticon-clock-1" /> 200 sqft room
                    </li>
                    <li>
                      <i className="flaticon-swimming" /> Swimming Pool
                    </li>
                  </ul>
                </div>
              </div>
              <hr className="border-2" />
              <div className="info-wrapper">
                {/* <div className="more">
                  <a href="room-details.html" className="link-btn" tabIndex={0}>
                    Details <i className="ti-arrow-right" />
                  </a>
                </div> */}
                <div className="butn-dark">
                  {" "}
                  <Link to='https://asiatech.in/booking_engine/index3?token=NjAyNw==' data-scroll-nav={1}>
                    <span>Book Now</span>
                  </Link>{" "}
                </div>
              </div>
            </div>
          </div>
          <div className="rooms2 left animate-box" data-animate-effect="fadeInUp">
            <figure>
              {/* <img src="img/slider/2.jpg" alt="" className="img-fluid" /> */}
              <img src="img/images/Maharaja Suite Edited/17-1-min.webp" alt="" className="img-fluid"/>
            </figure>
            <div className="caption">
              <h3>
                9000₹ <span>/ Night</span>
              </h3>
              <h4>
                <a href="/">Maharaja Suite</a>
              </h4>
              <p>
                Indulge in luxury with our Maharaja Suite, featuring exquisite decor and personalized service fit for royalty.
              </p>
              <div className="row room-facilities">
                <div className="col-md-4">
                  <ul>
                    <li>
                      <i className="flaticon-group" /> 4-6 Persons
                    </li>
                    <li>
                      <i className="flaticon-wifi" /> Free Wifi
                    </li>
                  </ul>
                </div>
                <div className="col-md-4">
                  <ul>
                    <li>
                      <i className="flaticon-bed" /> Twin Bed
                    </li>
                    <li>
                      <i className="flaticon-breakfast" /> Breakfast
                    </li>
                  </ul>
                </div>
                <div className="col-md-4">
                  <ul>
                    <li>
                      <i className="flaticon-clock-1" /> 200 sqft Room
                    </li>
                    <li>
                      <i className="flaticon-swimming" /> Swimming Pool
                    </li>
                  </ul>
                </div>
              </div>
              <hr className="border-2" />
              <div className="info-wrapper">
                {/* <div className="more">
                  <a href="room-details.html" className="link-btn" tabIndex={0}>
                    Details <i className="ti-arrow-right" />
                  </a>
                </div> */}
                <div className="butn-dark">
                  {" "}
                  <Link to="https://asiatech.in/booking_engine/index3?token=NjAyNw==" data-scroll-nav={1}>
                    <span>Book Now</span>
                  </Link>{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

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
                      Elevate your event experience at our banquet section, situated on Level-3, offering a delightful ambiance and picturesque views. With flexible seating arrangements including theatre style, U-shape, cluster, and classroom, our venue can accommodate approximately 125-150 guests. Whether you're hosting a conference, seminar, or workshop, our versatile space and impeccable service ensure a successful and memorable event.
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
  {/* <section className="rooms1 section-padding bg-cream" data-scroll-index={1}>
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="section-subtitle">The Runway Inn Luxury Hotel</div>
          <div className="section-title">Rooms &amp; Suites</div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-4">
          <div className="item">
            <div className="position-re o-hidden">
              {" "}
              <img src="img/images/Business class edited/4.webp" alt="" />{" "}
            </div>{" "}
            <span className="category">
              <a href="rooms2.html">Book</a>
            </span>
            <div className="con">
              <h6>
                <a href="room-details.html">150₹ / Night</a>
              </h6>
              <h5>
                <a href="room-details.html">Junior Suite</a>{" "}
              </h5>
              <div className="line" />
              <div className="row facilities">
                <div className="col col-md-7">
                  <ul>
                    <li>
                      <i className="flaticon-bed" />
                    </li>
                    <li>
                      <i className="flaticon-bath" />
                    </li>
                    <li>
                      <i className="flaticon-breakfast" />
                    </li>
                    <li>
                      <i className="flaticon-towel" />
                    </li>
                  </ul>
                </div>
                <div className="col col-md-5 text-end">
                  <div className="permalink">
                    <a href="rooms.html">
                      Details <i className="ti-arrow-right" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="item">
            <div className="position-re o-hidden">
              {" "}
              <img src="img/images/Premium Economy/8-1.webp" alt="" />
            </div>{" "}
            <span className="category">
              <a href="rooms2.html">Book</a>
            </span>
            <div className="con">
              <h6>
                <a href="room-details.html">200₹ / Night</a>
              </h6>
              <h5>
                <a href="room-details.html">Premium Suite</a>
              </h5>
              <div className="line" />
              <div className="row facilities">
                <div className="col col-md-7">
                  <ul>
                    <li>
                      <i className="flaticon-bed" />
                    </li>
                    <li>
                      <i className="flaticon-bath" />
                    </li>
                    <li>
                      <i className="flaticon-breakfast" />
                    </li>
                    <li>
                      <i className="flaticon-towel" />
                    </li>
                  </ul>
                </div>
                <div className="col col-md-5 text-end">
                  <div className="permalink">
                    <a href="rooms.html">
                      Details <i className="ti-arrow-right" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="item">
            <div className="position-re o-hidden">
              {" "}
              <img
                src="img/images/Business class edited/5-1.webp"
                alt=""
              />{" "}
            </div>{" "}
            <span className="category">
              <a href="rooms2.html">Book</a>
            </span>
            <div className="con">
              <h6>
                <a href="room-details.html">250₹ / Night</a>
              </h6>
              <h5>
                <a href="room-details.html">Business Suite</a>
              </h5>
              <div className="line" />
              <div className="row facilities">
                <div className="col col-md-7">
                  <ul>
                    <li>
                      <i className="flaticon-bed" />
                    </li>
                    <li>
                      <i className="flaticon-bath" />
                    </li>
                    <li>
                      <i className="flaticon-breakfast" />
                    </li>
                    <li>
                      <i className="flaticon-towel" />
                    </li>
                  </ul>
                </div>
                <div className="col col-md-5 text-end">
                  <div className="permalink">
                    <a href="rooms.html">
                      Details <i className="ti-arrow-right" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="item">
            <div className="position-re o-hidden">
              {" "}
              <img src="img/images/Family Suite Edited/1-1.jpg" alt="" />{" "}
            </div>{" "}
            <span className="category">
              <a href="rooms2.html">Book</a>
            </span>
            <div className="con">
              <h6>
                <a href="room-details.html">300₹ / Night</a>
              </h6>
              <h5>
                <a href="room-details.html">Family Suite</a>
              </h5>
              <div className="line" />
              <div className="row facilities">
                <div className="col col-md-7">
                  <ul>
                    <li>
                      <i className="flaticon-bed" />
                    </li>
                    <li>
                      <i className="flaticon-bath" />
                    </li>
                    <li>
                      <i className="flaticon-breakfast" />
                    </li>
                    <li>
                      <i className="flaticon-towel" />
                    </li>
                  </ul>
                </div>
                <div className="col col-md-5 text-end">
                  <div className="permalink">
                    <a href="rooms.html">
                      Details <i className="ti-arrow-right" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="item">
            <div className="position-re o-hidden">
              {" "}
              <img
                src="img/images/Maharaja Suite Edited/17-1-min.webp"
                alt=""
              />{" "}
            </div>{" "}
            <span className="category">
              <a href="rooms2.html">Book</a>
            </span>
            <div className="con">
              <h6>
                <a href="room-details.html">150₹ / Night</a>
              </h6>
              <h5>
                <a href="room-details.html">Maharaja Suite</a>
              </h5>
              <div className="line" />
              <div className="row facilities">
                <div className="col col-md-7">
                  <ul>
                    <li>
                      <i className="flaticon-bed" />
                    </li>
                    <li>
                      <i className="flaticon-bath" />
                    </li>
                    <li>
                      <i className="flaticon-breakfast" />
                    </li>
                    <li>
                      <i className="flaticon-towel" />
                    </li>
                  </ul>
                </div>
                <div className="col col-md-5 text-end">
                  <div className="permalink">
                    <a href="rooms.html">
                      Details <i className="ti-arrow-right" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section> */}
</>

  )
}

export default Room
