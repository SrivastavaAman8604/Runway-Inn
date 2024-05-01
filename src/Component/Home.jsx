import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom'
import {Helmet} from "react-helmet";
import RoomHome from './RoomHome';
import Banner from './Banner';
// import About from './About';
import Facilities from './Facilities';

const Home = () => {
    
  return (
    <>
    
        <Helmet>
            <meta charSet="utf-8" />
            <title>Hotel Runway Inn - Best Hotel in Varanasi Near Babatpur Airport</title>
            <meta name="description" content="Prepare for a runway-worthy stay at Hotel Runway Inn, your cozy oasis just a skip away from Varanasi's Lal Bahadur Shastri International Airport. Come on in and let us pamper you with warmth and comfort for a truly delightful Varanasi adventure." />
            <link rel="canonical" href="https://www.hotelrunwayinn.com" />
        </Helmet>
        
        {/* Banner */}
        {<Banner />}
        {/* Banner End */}

        {/* About */}
        {/* <About /> */}
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
        {/* About End */}

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
            </div>
            </div> 
        </section>
       
        {/* Facilties */}
        <Facilities/>
        {/* Facilties Ends*/}
        
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
