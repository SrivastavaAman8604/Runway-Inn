import React from 'react'
import { Link } from 'react-router-dom'
import {Helmet} from "react-helmet";
 
const Restaurant = () => {
  return (
    <>
        <Helmet>
            <meta charSet="utf-8" />
            <title>Savor Delightful Flavors at Hotel Runway Inn - A Culinary Journey Awaits</title>
            <meta name="description" content="Treat your taste buds to a culinary adventure at Hotel Runway Inn. From authentic local cuisine to international delights, our dining options promise to tantalize your senses and leave you craving for more." />
            <link rel="canonical" href="https://www.hotelrunwayinn.com" />
        </Helmet>
        <header className="header slider ">
            <div className="owl-carousel owl-theme ">
                {/* The opacity on the image is made with "data-overlay-dark="number". You can change it using the numbers 0-9. */}
                <div
                className="text-center item bg-img"
                data-overlay-dark={5}
                data-background="img/images/banner/4.webp"
                />
                
                <div
                className="text-center item bg-img"
                data-overlay-dark={5}
                data-background="img/images/banner/3.jpg"
                />
                <div
                className="text-center item bg-img"
                data-overlay-dark={5}
                data-background="img/images/banner/2.webp"
                />
            </div>
            {/* arrow down */}
            <div className="arrow bounce text-center">
                <a href="/" data-scroll-nav={1} className="">
                {" "}
                <i className="ti-arrow-down" />{" "}
                </a>
            </div>
        </header>

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
                {/* <h6>Dress Code</h6>
                <p>Smart casual (no shorts, hats, or sandals permitted)</p>
                <h6>Terrace</h6>
                <p>Open for drinks only</p> */}
                </div>
            </div>
            </div>
        </section>
        {/* Restaurant Menu */}
        <section id="menu" className="restaurant-menu menu section-padding bg-blck">
            <div className="container">
            <div className="row">
                <div className="col-md-12 text-center">
                <div className="section-subtitle">
                    <span>Luxury Hotel Runway Inn</span>
                </div>
                <div className="section-title">
                    <span>Chef's Recommendations</span>
                </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                <div className="row">
                    {/* <div className="tabs-icon col-md-10 offset-md-1 text-center">
                    <div className="owl-carousel owl-theme">
                        <div id="tab-1" className="active item">
                        <h6>Starters</h6>
                        </div>
                        <div id="tab-2" className="item">
                        <h6>Mains</h6>
                        </div>
                        <div id="tab-3" className="item">
                        <h6>Salads</h6>
                        </div>
                        <div id="tab-4" className="item">
                        <h6>Wine</h6>
                        </div>
                        <div id="tab-5" className="item">
                        <h6>Breakfast</h6>
                        </div>
                        <div id="tab-6" className="item">
                        <h6>Dessert</h6>
                        </div>
                    </div>
                    </div> */}
                    <div className="restaurant-menu-content col-md-12">
                    {/* Starters */}
                    <div id="tab-1-content" className="cont active">
                        <div className="row">
                        <div className="col-md-5">
                            <div className="menu-info">
                            <h5>
                                Paneer Najakat <span className="price">₹450</span>
                            </h5>
                            <p>Paneer, non-melting cheese</p>
                            </div>
                            <div className="menu-info">
                            <h5>
                                PANEER DIL KHUSH KEBAB<span className="price">₹430</span>
                            </h5>
                            <p>Cashews, paneer, oil, clarified butter, and assorted spices</p>
                            </div>
                            <div className="menu-info">
                            <h5>
                                Corn Cheese Roll <span className="price">₹450</span>
                            </h5>
                            <p>Golden corn and cheese rolls, crispy and savory.</p>
                            </div>
                        </div>
                        <div className="col-md-5 offset-md-2">
                            <div className="menu-info">
                            <h5>
                                Seekh Kebab <span className="price">₹450</span>
                            </h5>
                            <p>
                                Grilled, spiced meat skewers, bursting with flavor
                            </p>
                            </div>
                            <div className="menu-info">
                            <h5>
                                CHICKEN GALOUTI KEBAB<span className="price">₹450</span>
                            </h5>
                            <p>Tender chicken marinated in spices, grilled to perfection</p>
                            </div>
                            <div className="menu-info">
                            <h5>
                                MURG MALAI TIKKA <span className="price">₹450</span>
                            </h5>
                            <p>
                                Creamy marinated chicken, spiced yogurt
                            </p>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className='text-center'>
                    <button type="submit" className="btn btn-danger mt-5">
                        <Link to='/img/SIMPLY BENARAS MENU FINAL.pdf' target="_blank" download>Download Menu</Link>                    
                    </button>
                    </div>
                    
                    </div>
                </div>
                </div>
            </div>
            </div>
        </section>
        {/* Testiominals */}
        <section className="rooms-page section-padding" data-scroll-index={1}>
            <div className="container">
            <div className="row rev">
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
                <img src="img/images/restaurant/resturant-Copy.png" alt="" className="mt-30 mb-30" />
                </div>
            </div>
            </div>
        </section>
        <section className="rooms-page section-padding" data-scroll-index={1}>
   
      <section className="rooms-page section-padding" data-scroll-index={1}>
            <div className="container">
            <div className="row">
                <div className="col-md-6 text-left">
                {/* <span>
                    <i className="star-rating" />
                    <i className="star-rating" />
                    <i className="star-rating" />
                    <i className="star-rating" />
                </span>
                <div className="section-subtitle">
                    Indulge in the Pure Essence of Satvik Bhoj
                </div>
                <div className='d-flex'>
                    <div className="section-title">Spiritual Vegetarian</div>
                </div> */}
                
                <img src="img/images/restaurant/satvik.jpg" alt="" className="mt-30 mb-30" />
                </div>
                <div className="col-md-6">
                <span>
                    <i className="star-rating" />
                    <i className="star-rating" />
                    <i className="star-rating" />
                    <i className="star-rating" />
                </span>
                <div className="section-subtitle">
                    Indulge in the Pure Essence of Satvik Bhoj
                </div>
                <div className='d-flex'>
                    <div className="section-title">Spiritual Vegetarian</div>
                </div>
                <p className="mb-30">
                Step into a realm of culinary bliss with our "Spiritual Vegetarian" dining experience, meticulously curated for those seeking a deeper connection with their food. Our menu transcends the ordinary by excluding onion and garlic, ensuring that each dish is not just a meal but a spiritual journey.
                </p>
                <p className="mb-30">
                Delight in the simplicity and authenticity of our homemade flavors, crafted with care to nourish both body and soul. Our Satvik Bhoj embodies the essence of purity, offering a symphony of flavors that dance on your palate. Every bite is a revelation, a testament to the artistry and dedication we put into every dish.
                </p>
                <p className="mb-30">
                Join us on this gastronomic adventure, where food is not just sustenance but a gateway to a higher culinary experience.
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
        </section>
    </>

  )
}

export default Restaurant;
