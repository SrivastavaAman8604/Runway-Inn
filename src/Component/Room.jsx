import React , {useEffect} from 'react'
import { Link,useLocation } from 'react-router-dom'

const Room = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [hash]);

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
          <h1>Rooms &amp; Suites</h1>
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
            id='business-class'
          >
            <figure >
            <img src="img/images/Business class edited/IMG_3104.1 - Copy.JPG" alt="" className="img-fluid" style={{aspectRatio:'5/3'}}/>
            </figure>
            <div className="caption">
              <h3>
                5000₹ <span>/ Night</span>
              </h3>
              <h4>
                <a href="/">Business Class</a>
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
                  <Link to='https://asiatech.in/booking_engine/index3?token=NjAyNw=='>
                    <span>Book Now</span>
                  </Link>{" "}
                </div>
              </div>
            </div>
          </div>
          <div
            className="rooms2 mb-90 left animate-box"
            data-animate-effect="fadeInUp"
            id='family-suite'
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
                      <i className="flaticon-group" /> 3-4 Persons
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
                  <Link to='https://asiatech.in/booking_engine/index3?token=NjAyNw==' >
                    <span>Book Now</span>
                  </Link>{" "}
                </div>
              </div>
            </div>
          </div>
          <div
            className="rooms2 mb-90 animate-box"
            data-animate-effect="fadeInUp"
            id='premium-economy'
          >
            <figure>
            <img src="img/images/Premium Economy/8.webp" alt="" className="img-fluid"/>
            </figure>
            <div className="caption">
              <h3>
                7000₹ <span>/ Night</span>
              </h3>
              <h4>
                <a href="/">Premium Economy </a>
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
                  <Link to='https://asiatech.in/booking_engine/index3?token=NjAyNw==' >
                    <span>Book Now</span>
                  </Link>{" "}
                </div>
              </div>
            </div>
          </div>
          <div className="rooms2 left animate-box" data-animate-effect="fadeInUp" id='maharaja-suite'>
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
                  <Link to="https://asiatech.in/booking_engine/index3?token=NjAyNw==" >
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
</>
  )
}

export default Room
