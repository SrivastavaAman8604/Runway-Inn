import React from 'react'
// import { Link } from 'react-router-dom'
import {Helmet} from "react-helmet";
import RoomHome from './RoomHome';

const Home = () => {
  return (
    <>
        <Helmet>
            <meta charSet="utf-8" />
            <title>Hotel Runway Inn - Best Hotel in Varanasi Near Babatpur Airport</title>
            <meta name="description" content="Prepare for a runway-worthy stay at Hotel Runway Inn, your cozy oasis just a skip away from Varanasi's Lal Bahadur Shastri International Airport. Come on in and let us pamper you with warmth and comfort for a truly delightful Varanasi adventure." />
            <link rel="canonical" href="https://www.hotelrunwayinn.com" />
        </Helmet>
        <header className="header slider-fade">
            <div className="owl-carousel owl-theme">
            {/* The opacity on the image is made with "data-overlay-dark="number". You can change it using the numbers 0-9. */}
            <div
                className="text-center item bg-img"
                data-overlay-dark={6}
                data-background="img/slider/banner-4.webp"
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
        {/* About */}
        <section className="rooms-page about section-padding2 imageabout ">
            <div className="container">
            <div className="row rev">
                {/* <img  src="img/New image/Vns_airport.jpg" className='mobimg mb-5'/> */}
                <div        
                className="col-md-8 mb-30 animate-box"
                data-animate-effect="fadeInUp"
                >
                 <div className="section-title abt">Discover comfort just outside Lal Bahadur Shastri International Airport in Varanasi</div>
                 <p>Welcome to Hotel Runway Inn,your gateway to Varanasi's spiritual allure! Step into modern elegance in rooms and suites, offering stunning views and a range of options from Economy to Maharaja Suite. Indulge in culinary delights at our restaurant Simply Benares or relax at our rooftop Aqua Lounge, where a swimming pool and scenic vistas await.</p>

                 <p>With a stellar <strong>4.5-star rating on Google</strong>, join us for an unforgettable stay marked by unparalleled comfort and satisfaction!</p>

                    <div className="reservations">
                        <div className="icon">
                        <span className="flaticon-call" />
                        </div>
                        <div className="text">
                        <p>Reservation</p> <a href="tel:93058 04900">93058 04900</a>
                        </div>
                    </div>
                </div>
                    {/* <img
                    src="img/1.jpg"
                    alt=""
                    className=""
                /><img
                src="img/2.jpg"
                alt=""
                className=""
            /> */}
                <div
                className="col col-md-4 animate-box"
                data-animate-effect="fadeInUp"
                >
                <img
                    src="img/1-Copy.jpg"
                    alt=""
                    className="mb-5"
                />  
                <img
                    src="img/vns1.png"
                    alt=""
                    className="ms-5 ps-5  mobview"
                />
                </div>
                
            </div>
            
            </div>
        </section>
        {/* Rooms */}
        <section className="rooms1 section-padding bg-cream" data-scroll-index={1}>
            <div className="container">
            <div className="row">
                <div className="col-md-12">
                <div className="section-subtitle">Hotel Runway Inn</div>
                <div className="section-title">Rooms &amp; Suites</div>
                </div>
            </div>
            <div className="row">
            <RoomHome/>

                

                {/* <div className="col-md-6">
                <div className="item">
                    <div className="position-re o-hidden">
                    {" "}
                    <img src="img/images/Premium Economy/8.webp" alt="" style={{aspectRatio:'3/2'}}/>
                    </div>{" "}
                    <span className="category">
                    <Link to='https://asiatech.in/booking_engine/index3?token=NjAyNw=='>Book Now</Link> 
                    </span>
                    <div className="con">
                    <h6>
                        <a href="/Room">7000₹ / Night</a>
                    </h6>
                    <h5>
                        <Link to="/Room">Premium Economy</Link>
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
                            <a href="/Room">
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
                        src="img/images/Business class edited/IMG_3104.2.JPG"
                        alt=""
                        style={{aspectRatio:'3/2'}}
                    />{" "}
                    </div>{" "}
                    <span className="category">
                    <Link to='https://asiatech.in/booking_engine/index3?token=NjAyNw=='>Book Now</Link> 
                    </span>
                    <div className="con">
                    <h6>
                        <a href="/Room">5000₹ / Night</a>
                    </h6>
                    <h5>
                        <a href="/Room">Business Class</a>
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
                            <a href="/Room">
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
                    <img src="img/images/Family Suite Edited/4.webp" alt="" />{" "}
                    </div>{" "}
                    <span className="category">
                    <Link to='https://asiatech.in/booking_engine/index3?token=NjAyNw=='>Book Now</Link> 
                    </span>
                    <div className="con">
                    <h6>
                        <a href="/Room">6000₹ / Night</a>
                    </h6>
                    <h5>
                        <a href="/Room">Family Suite</a>
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
                            <a href="/Room">
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
                    <Link to='https://asiatech.in/booking_engine/index3?token=NjAyNw=='>Book Now</Link> 
                    </span>
                    <div className="con">
                    <h6>
                        <a href="/Room">9000₹ / Night</a>
                    </h6>
                    <h5>
                        <a href="/Room">Maharaja Suite</a>
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
                            <a href="/Room">
                            Details <i className="ti-arrow-right" />
                            </a>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div> */}
            </div>
            </div> 
        </section>
        {/* Pricing */}
        {/* <section class="pricing section-padding bg-blck">
        <div class="container">
            <div class="row">
                <div class="col-md-4">
                    <div class="section-subtitle"><span>Best Prices</span></div>
                    <div class="section-title"><span>Extra Services</span></div>
                    <p class="color-2">The best prices for your relaxing vacation. The utanislen quam nestibulum ac quame odion elementum sceisue the aucan.</p>
                    <p class="color-2">Orci varius natoque penatibus et magnis disney parturient monte nascete ridiculus mus nellen etesque habitant morbine.</p>
                    <div class="reservations mb-30">
                        <div class="icon"><span class="flaticon-call"></span></div>
                        <div class="text">
                            <p class="color-2">For information</p> <a href="tel:855-100-4444">93058 04900</a>
                        </div>
                    </div>
                </div>
                <div class="col-md-8">
                    <div class="owl-carousel owl-theme">
                        <div class="pricing-card">
                            <img src="img/pricing/1.jpg" alt="">
                            <div class="desc">
                                <div class="name">Room cleaning</div>
                                <div class="amount">₹50<span>/ month</span></div>
                                <ul class="list-unstyled list">
                                    <li><i class="ti-check"></i> Hotel ut nisan the duru</li>
                                    <li><i class="ti-check"></i> Orci miss natoque vasa ince</li>
                                    <li><i class="ti-close unavailable"></i>Clean sorem ipsum morbin</li>
                                </ul>
                            </div>
                        </div>
                        <div class="pricing-card">
                            <img src="img/pricing/2.jpg" alt="">
                            <div class="desc">
                                <div class="name">Drinks included</div>
                                <div class="amount">₹30<span>/ daily</span></div>
                                <ul class="list-unstyled list">
                                    <li><i class="ti-check"></i> Hotel ut nisan the duru</li>
                                    <li><i class="ti-check"></i> Orci miss natoque vasa ince</li>
                                    <li><i class="ti-close unavailable"></i>Clean sorem ipsum morbin</li>
                                </ul>
                            </div>
                        </div>
                        <div class="pricing-card">
                            <img src="img/pricing/3.jpg" alt="">
                            <div class="desc">
                                <div class="name">Room Breakfast</div>
                                <div class="amount">₹30<span>/ daily</span></div>
                                <ul class="list-unstyled list">
                                    <li><i class="ti-check"></i> Hotel ut nisan the duru</li>
                                    <li><i class="ti-check"></i> Orci miss natoque vasa ince</li>
                                    <li><i class="ti-close unavailable"></i>Clean sorem ipsum morbin</li>
                                </ul>
                            </div>
                        </div>
                        <div class="pricing-card">
                            <img src="img/pricing/4.jpg" alt="">
                            <div class="desc">
                                <div class="name">Safe & Secure</div>
                                <div class="amount">₹15<span>/ daily</span></div>
                                <ul class="list-unstyled list">
                                    <li><i class="ti-check"></i> Hotel ut nisan the duru</li>
                                    <li><i class="ti-check"></i> Orci miss natoque vasa ince</li>
                                    <li><i class="ti-close unavailable"></i>Clean sorem ipsum morbin</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
            </section> */}
        {/* Promo Video */}
        {/* <section class="video-wrapper video section-padding bg-img bg-fixed" data-overlay-dark="3" data-background="img/slider/2.jpg"> */}
        {/* <section
            className="video-wrapper video section-padding bg-img bg-fixed"
            data-overlay-dark={6}
            data-background="img/images/reception/18-1.webp"
        > */}
            {/* <div className="container">
            <div className="row">
                <div className="col-md-8 offset-md-2 text-center">
                <span>
                    <i className="star-rating" />
                    <i className="star-rating" />
                    <i className="star-rating" />
                    <i className="star-rating" />
                </span>
                <div className="section-subtitle">
                    <span>The Runway Inn Luxury Hotel</span>
                </div>
                <div className="section-title"> */}
                    {/* <span>Promotional Video</span> */}
                    {/* <span>Why Choose Us?</span>
                </div>
                </div> */}
            {/* </div>
            <div className="row">
                <div className="text-center col-md-12"> */}
                {/* <a className="vid" href="https://youtu.be/7BGNAGahig8"> */}
                {/* <div className="vid">
                    <div className="vid-butn">
                    <span className="icon">
                        <i className="ti-control-play" />
                    </span>
                    </div>
                </div> */}
                {/* </a> */}
                {/* <h5>The Runway Inn Luxury Hotel in Varanasi stands out for its unparalleled blend of elegance and comfort, offering guests a truly luxurious experience. With our meticulous attention to detail and commitment to exceptional service, we strive to exceed every expectation, making us the premier choice for discerning travelers in Varanasi.</h5> */}
                {/* <ol className='text-white text-justify '>
                    <li><i className="ti-check" /> Unmatched luxury and comfort in the heart of Varanasi</li>
                    <li><i className="ti-check" /> Exquisite dining experiences at our world-class restaurant</li>
                    <li><i className="ti-check" /> Revitalize your senses at our exclusive wellness and spa center</li>
                    <li><i className="ti-check" /> Impeccable service and attention to detail</li>
                    <li><i className="ti-check" /> Perfect blend of tradition and modernity</li>
                </ol>
                </div>
            </div>
            </div> */}
        {/* </section> */}
        {/* Facilties */}
        <section className="facilties section-padding" >
            <div className="container">
            <div className="row">
                <div className="col-md-12">
                <div className="section-subtitle">Our Services</div>
                <div className="section-title">Hotel Facilities</div>
                </div>
            </div>
            <div className="row">
            <div className="col-md-4 text-center ">
                <div
                    className="single-facility animate-box border-right"
                    data-animate-effect="fadeInUp"
                >
                    <span className="flaticon-swimming" />
                    <h5>Swimming Pool</h5>
                    <p>
                    Relax and unwind in our inviting swimming pool, a refreshing escape for leisure and relaxation.
                    </p>
                    {/* <p>
                    Enjoy a refreshing escape with our inviting swimming pool,
                    offering a perfect blend of relaxation and leisure at our hotel.
                    </p> */}
                    <div className="facility-shape">
                    {" "}
                    <span className="flaticon-swimming" />{" "}
                    </div>
                </div>
                </div>
                <div className="col-md-4 text-center ">
                <div
                    className="single-facility animate-box border-right"
                    data-animate-effect="fadeInUp"
                >
                    <span className="flaticon-world" />
                    <h5>Pick Up &amp; Drop</h5>
                    <p>We’ll pick up from airport while you comfy on your ride.</p>
                    <div className="facility-shape">
                    {" "}
                    <span className="flaticon-world" />{" "}
                    </div>
                </div>
                </div>
                <div className="col-md-4 text-center">
                <div
                    className="single-facility animate-box"
                    data-animate-effect="fadeInUp"
                >
                    <span className="flaticon-car" />
                    <h5>Parking Space</h5>
                    <p>Hotel Runway Inn provides convenient parking space.</p>
                    <div className="facility-shape">
                    {" "}
                    <span className="flaticon-car" />{" "}
                    </div>
                </div>
                </div>
                <div className="col-md-4 text-center ">
                <div className="single-facility animate-box border-right"
                    data-animate-effect="fadeInUp">
                    <span className="flaticon-bed" />
                    <h5>Room Service</h5>
                    <p>
                    Hotel  Runway Inn offers efficient room service for a
                    comfortable and enjoyable stay.
                    </p>
                    <div className="facility-shape">
                    {" "}
                    <span className="flaticon-bed" />{" "}
                    </div>
                </div>
                </div>
                
                <div className="col-md-4 text-center ">
                <div
                    className="single-facility animate-box border-right"
                    data-animate-effect="fadeInUp"
                >
                    <span className="flaticon-wifi" />
                    <h5>Fibre Internet</h5>
                    <p>
                    Hotel offers high-speed fiber internet services for seamless
                    and fast connectivity.
                    </p>
                    <div className="facility-shape">
                    {" "}
                    <span className="flaticon-wifi" />{" "}
                    </div>
                </div>
                </div>
                <div className="col-md-4 text-center">
                <div
                    className="single-facility animate-box"
                    data-animate-effect="fadeInUp"
                >
                    <span className="flaticon-breakfast" />
                    <h5>Breakfast</h5>
                    <p>
                    Indulge in the culinary delights of a multicuisine casual dining
                    restaurant{" "}
                    </p>
                    <div className="facility-shape">
                    {" "}
                    <span className="flaticon-breakfast" />{" "}
                    </div>
                </div>
                </div>
            </div>
            </div>
        </section>
        {/* Booking Search */}
        {/* <section className="section-padding bg-cream">
            <div className="container">
            <div className="section-subtitle">Check Now</div>
            <div className="section-title">Search Rooms</div>
            <div className="booking-inner clearfix">
                <form className="form1 clearfix">
                <div className="col1 c1">
                    <div className="input1_wrapper">
                    <label>Check in</label>
                    <div className="input1_inner">
                        <input
                        type="text"
                        className="form-control input datepicker"
                        placeholder="Check in"
                        />
                    </div>
                    </div>
                </div>
                <div className="col1 c2">
                    <div className="input1_wrapper">
                    <label>Check out</label>
                    <div className="input1_inner">
                        <input
                        type="text"
                        className="form-control input datepicker"
                        placeholder="Check out"
                        />
                    </div>
                    </div>
                </div>
                <div className="col2 c3">
                    <div className="select1_wrapper">
                    <label>Adults</label>
                    <div className="select1_inner">
                        <select className="select2 select" style={{ width: "100%" }}>
                        <option value={1}>1 Adult</option>
                        <option value={2}>2 Adults</option>
                        <option value={3}>3 Adults</option>
                        <option value={4}>4 Adults</option>
                        </select>
                    </div>
                    </div>
                </div>
                <div className="col2 c4">
                    <div className="select1_wrapper">
                    <label>Children</label>
                    <div className="select1_inner">
                        <select className="select2 select" style={{ width: "100%" }}>
                        <option value={1}>Children</option>
                        <option value={1}>1 Child</option>
                        <option value={2}>2 Children</option>
                        <option value={3}>3 Children</option>
                        <option value={4}>4 Children</option>
                        </select>
                    </div>
                    </div>
                </div>
                <div className="col2 c5">
                    <div className="select1_wrapper">
                    <label>Rooms</label>
                    <div className="select1_inner">
                        <select className="select2 select" style={{ width: "100%" }}>
                        <option value={1}>1 Room</option>
                        <option value={2}>2 Rooms</option>
                        <option value={3}>3 Rooms</option>
                        <option value={4}>4 Rooms</option>
                        </select>
                    </div>
                    </div>
                </div>
                <div className="col3 c6">
                    <button type="submit" className="btn-form1-submit link">
                        <Link to='Contact'>Check Now</Link>                    
                    </button>
                </div>
                </form>
            </div>
            </div>
        </section> */}
        {/* Testiominals */}
        {/* <section class="testimonials">
        <div class="background bg-img bg-fixed section-padding pb-0" data-background="img/images/reception/18-1.webp" data-overlay-dark="3">
            <div class="container">
                <div class="row">
                    <div class="col-md-8 offset-md-2">
                        <div class="testimonials-box">
                            <div class="head-box">
                                <h6>Testimonials</h6>
                                <h4>What Client's Say?</h4>
                                <div class="line"></div>
                            </div>
                            <div class="owl-carousel owl-theme">
                                <div class="item">
                                    <span class="quote"><img src="img/quot.png" alt=""></span>
                                    <p>Hotel dapibus asue metus the nec feusiate eraten miss hendreri net ve ante the lemon sanleo nectan feugiat erat hendrerit necuis ve ante otel inilla duiman at finibus viverra neca the sene on satien the miss drana inc fermen norttito sit space, mus nellentesque habitan.</p>
                                    <div class="info">
                                        <div class="author-img"> <img src="img/team/4.jpg" alt=""> </div>
                                        <div class="cont"> <span><i class="star-rating"></i><i class="star-rating"></i><i class="star-rating"></i><i class="star-rating"></i><i class="star-rating"></i></span>
                                            <h6>Emily Brown</h6> <span>Guest review</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="item">
                                    <span class="quote"><img src="img/quot.png" alt=""></span>
                                    <p>Hotel dapibus asue metus the nec feusiate eraten miss hendreri net ve ante the lemon sanleo nectan feugiat erat hendrerit necuis ve ante otel inilla duiman at finibus viverra neca the sene on satien the miss drana inc fermen norttito sit space, mus nellentesque habitan.</p>
                                    <div class="info">
                                        <div class="author-img"> <img src="img/team/1.jpg" alt=""> </div>
                                        <div class="cont"> <span><i class="star-rating"></i><i class="star-rating"></i><i class="star-rating"></i><i class="star-rating"></i><i class="star-rating"></i></span>
                                            <h6>Nolan White</h6> <span>Guest review</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="item">
                                    <span class="quote"><img src="img/quot.png" alt=""></span>
                                    <p>Hotel dapibus asue metus the nec feusiate eraten miss hendreri net ve ante the lemon sanleo nectan feugiat erat hendrerit necuis ve ante otel inilla duiman at finibus viverra neca the sene on satien the miss drana inc fermen norttito sit space, mus nellentesque habitan.</p>
                                    <div class="info">
                                        <div class="author-img"> <img src="img/team/5.jpg" alt=""> </div>
                                        <div class="cont"> <span><i class="star-rating"></i><i class="star-rating"></i><i class="star-rating"></i><i class="star-rating"></i><i class="star-rating"></i></span>
                                            <h6>Olivia Martin</h6> <span>Guest review</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
            </section> */}
        {/* Services */}
        <section className="services section-padding">
            <div className="container">
            <div className="row">
                <div
                className="col-md-6 p-0 animate-box"
                data-animate-effect="fadeInLeft"
                >
                <div className="img left">
                    <a href="/simply-benaras">
                    <img src="img/images/restaurant/4-1-Copy.webp" alt="best resturant near airport" />
                    </a>
                </div>
                </div>
                <div
                className="col-md-6 p-0 bg-cream valign animate-box"
                data-animate-effect="fadeInRight"
                >
                <div className="content">
                    <div className="cont text-left">
                    <div className="info">
                        <h6>Discover</h6>
                    </div>
                    <h4>Simply Benares</h4>
                    {/* <p>
                        A Multicuisine Casual Dining Restaurant.Fresh and exciting
                        multi-cuisine takes centre stage here with 55-60 Cover, Full Day
                        Dining with nice ambience just outside Varanasi Airport.
                    </p> */}
                    <p>Nestled just outside Varanasi Airport, our multicuisine casual dining restaurant offers a delightful culinary experience with its fresh and exciting menu. With a seating capacity of 55-60 covers, our restaurant provides a welcoming ambience for guests to indulge in a full day dining experience.</p>
                    {/* <p> Whether you're craving Indian delicacies, international flavors, or fusion dishes, our menu caters to all tastes, promising a memorable dining experience. Join us to savor the finest in multi-cuisine dining, where every dish is a culinary masterpiece crafted with passion and care.</p> */}
                    <div className="butn-dark">
                        {" "}
                        <a href="/simply-benaras">
                        <span>Learn More</span>
                        </a>{" "}
                    </div>
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
                        <h6>RoofTop</h6>
                    </div>
                    <h4>Sky-High Serenity</h4>
                    <p>
                        The openness of the rooftop creates a liberating sense of space.
                        Feel the cool breeze, bask in the warmth of the sun, or relish
                        the cool evenings—all while being surrounded by the unmatched
                        tranquility of the Varanasi skies.
                    </p>
                    <div className="butn-dark">
                        {" "}
                        <a href="/aqua-lounge">
                        <span>Learn More</span>
                        </a>{" "}
                    </div>
                    </div>
                </div>
                </div>
                <div
                className="col-md-6 p-0 order1 animate-box"
                data-animate-effect="fadeInRight"
                >
                <div className="img">
                    <a href="/aqua-lounge">
                    <img src="img/images/Pool Area Edited/3-1.webp" alt="Pool Area" />
                    </a>
                </div>
                </div>
            </div>
            <div className="row">
                <div
                className="col-md-6 p-0 animate-box"
                data-animate-effect="fadeInLeft"
                >
                <div className="img left">
                    <a href="/Banquet">
                    <img src="img/images/banquet/IMG_2093.1.jpg" alt="banquet near airport" />
                    </a>
                </div>
                </div>
                <div
                className="col-md-6 p-0 bg-cream valign animate-box"
                data-animate-effect="fadeInRight"
                >
                <div className="content">
                    <div className="cont text-left">
                    <div className="info">
                        <h6>Marriage</h6>
                    </div>
                    <h4>Banquet Hall</h4>
                    <p>
                        Transform your gatherings into unforgettable occasions at our
                        exquisite banquet halls, strategically located near Varanasi
                        Airport. Discover unmatched elegance, impeccable service, and a
                        perfect blend of sophistication and convenience.
                    </p>
                    <div className="butn-dark">
                        {" "}
                        <a href="/Banquet">
                        <span>Learn More</span>
                        </a>{" "}
                    </div>
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
                        <h6>RoofTop</h6>
                    </div>
                    <h4> Pool Area</h4>
                    <p>
                        Escape the bustle of travel and unwind in our exquisite pool
                        area, a serene haven near the airport in Varanasi. Immerse
                        yourself in comfort and relaxation as you soak up the sun or
                        take a refreshing dip in our inviting pool.
                    </p>
                    <div className="butn-dark">
                        {" "}
                        <a href="/aqua-lounge">
                        <span>Learn More</span>
                        </a>{" "}
                    </div>
                    </div>
                </div>
                </div>
                <div
                className="col-md-6 p-0 order1 animate-box"
                data-animate-effect="fadeInRight"
                >
                <div className="img">
                    <a href="/aqua-lounge">
                    <img src="img/images/restaurant/12.webp" alt=" restaurant near airport" />
                    </a>
                </div>
                </div>
            </div>
            </div>
        </section>
        
        
        </>

  )
}

export default Home
