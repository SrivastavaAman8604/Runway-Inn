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
                                Paneer Nazakat <span className="price">270₹</span>
                            </h5>
                            <p>Paneer, non-melting cheese</p>
                            </div>
                            <div className="menu-info">
                            <h5>
                                Paneer Dilkhush Kebab<span className="price">320₹</span>
                            </h5>
                            <p>Cashews, paneer, oil, clarified butter, and assorted spices</p>
                            </div>
                            <div className="menu-info">
                            <h5>
                                Corn Cheese Roll <span className="price">152₹</span>
                            </h5>
                            <p>Golden corn and cheese rolls, crispy and savory.</p>
                            </div>
                        </div>
                        <div className="col-md-5 offset-md-2">
                            <div className="menu-info">
                            <h5>
                                Seekh Kebab <span className="price">150₹</span>
                            </h5>
                            <p>
                                Grilled, spiced meat skewers, bursting with flavor
                            </p>
                            </div>
                            <div className="menu-info">
                            <h5>
                                Chicken Galoti<span className="price">320₹</span>
                            </h5>
                            <p>Tender chicken marinated in spices, grilled to perfection</p>
                            </div>
                            <div className="menu-info">
                            <h5>
                                Chicken Tikka Malai <span className="price">420₹</span>
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
                    {/* Mains */}
                    {/* <div id="tab-2-content" className="cont">
                        <div className="row">
                        <div className="col-md-5">
                            <div className="menu-info">
                            <h5>
                                Rusty’s Burger <span className="price">27₹</span>
                            </h5>
                            <p>
                                Smoked pulled beef ribs, bbq sauce, cheddar, crispy
                                onion
                            </p>
                            </div>
                            <div className="menu-info">
                            <h5>
                                Cajun Fish Steak <span className="price">32₹</span>
                            </h5>
                            <p>
                                Cajun spicied seabass, deep fried baby potatoes, side
                                salad
                            </p>
                            </div>
                            <div className="menu-info">
                            <h5>
                                Southern Fried Chicken{" "}
                                <span className="price">52₹</span>
                            </h5>
                            <p>
                                Cajun coated chicken breast, fries and honey mustard
                            </p>
                            </div>
                        </div>
                        <div className="col-md-5 offset-md-2">
                            <div className="menu-info">
                            <h5>
                                Crab Cake <span className="price">37₹</span>
                            </h5>
                            <p>
                                Breaded crab cakes, tartar sauce, apple and fennel salad
                            </p>
                            </div>
                            <div className="menu-info">
                            <h5>
                                Baby Back Ribs <span className="price">32₹</span>
                            </h5>
                            <p>Bbq glazed baby pork ribs, coleslaw, fries</p>
                            </div>
                            <div className="menu-info">
                            <h5>
                                Smokehouse Combo <span className="price">42₹</span>
                            </h5>
                            <p>
                                Smoked beef brisket, rib and sausage, coleslaw,
                                cornbread
                            </p>
                            </div>
                        </div>
                        </div>
                    </div> */}
                    {/* Salads */}
                    {/* <div id="tab-3-content" className="cont">
                        <div className="row">
                        <div className="col-md-5">
                            <div className="menu-info">
                            <h5>
                                Ceaser Salad <span className="price">47₹</span>
                            </h5>
                            <p>
                                Romaine lettuce, croutons, parmigiano, Ceaser dressing.
                            </p>
                            </div>
                            <div className="menu-info">
                            <h5>
                                Waldorf Salad <span className="price">52₹</span>
                            </h5>
                            <p>
                                Lettuce, celery, apple, grape, walnut, waldorf sauce
                            </p>
                            </div>
                            <div className="menu-info">
                            <h5>
                                Quinoa &amp; Avocado Salad{" "}
                                <span className="price">52₹</span>
                            </h5>
                            <p>
                                Quinoa, avocado, mixed greens. Nuts, dried and fresh
                                fruits
                            </p>
                            </div>
                        </div>
                        <div className="col-md-5 offset-md-2">
                            <div className="menu-info">
                            <h5>
                                Grilled Salmon Salad <span className="price">37₹</span>
                            </h5>
                            <p>Grilled salmon, mixed greens, capers, orange slices</p>
                            </div>
                            <div className="menu-info">
                            <h5>
                                Chicken Cobb Salad <span className="price">32₹</span>
                            </h5>
                            <p>
                                Iceberg lettuce, cherry tomatoes, blue cheese, avocado,
                                bacon
                            </p>
                            </div>
                            <div className="menu-info">
                            <h5>
                                Salad Chicken <span className="price">42₹</span>
                            </h5>
                            <p> Ceaser dressing. Optional grilled chicken breast</p>
                            </div>
                        </div>
                        </div>
                    </div> */}
                    {/* Wine */}
                    {/* <div id="tab-4-content" className="cont">
                        <div className="row">
                        <div className="col-md-5">
                            <div className="menu-info">
                            <h5>
                                Château d'Yquem 2011 <span className="price">400₹</span>
                            </h5>
                            <p>Dessert Wine, Bordeaux, Graves, Sauternes</p>
                            </div>
                            <div className="menu-info">
                            <h5>
                                Alvear Cream NV <span className="price">30₹</span>
                            </h5>
                            <p>Dessert, Fortified Wine, Andalucia</p>
                            </div>
                            <div className="menu-info">
                            <h5>
                                Chateau D'yquem 1990 <span className="price">900₹</span>
                            </h5>
                            <p>Dessert Wine, Bordeaux, Graves, Sauternes</p>
                            </div>
                        </div>
                        <div className="col-md-5 offset-md-2">
                            <div className="menu-info">
                            <h5>
                                La Grande Année 2007 <span className="price">400₹</span>
                            </h5>
                            <p>Rosé, Champagne</p>
                            </div>
                            <div className="menu-info">
                            <h5>
                                Sine Qua Non 2012 <span className="price">520₹</span>
                            </h5>
                            <p>Syrah, Shiraz &amp; Blends, California</p>
                            </div>
                            <div className="menu-info">
                            <h5>
                                W.S. Keyes Winery 2006{" "}
                                <span className="price">240₹</span>
                            </h5>
                            <p>Merlot, California, Napa, Howell Mountain</p>
                            </div>
                        </div>
                        </div>
                    </div> */}
                    {/* Breakfast */}
                    {/* <div id="tab-5-content" className="cont">
                        <div className="row">
                        <div className="col-md-5">
                            <div className="menu-info">
                            <h5>
                                Egg Benedict <span className="price">60₹</span>
                            </h5>
                            <p>
                                English muffin, beef, hollandaise sauce, poached egg.
                            </p>
                            </div>
                            <div className="menu-info">
                            <h5>
                                Texas Benedict <span className="price">30₹</span>
                            </h5>
                            <p>English muffin, short ribs, bbq sauce, poached egg.</p>
                            </div>
                            <div className="menu-info">
                            <h5>
                                Rusty’s Omlette <span className="price">22₹</span>
                            </h5>
                            <p>
                                Mozzarella, cheddar, caramelized onion, black beans.
                            </p>
                            </div>
                        </div>
                        <div className="col-md-5 offset-md-2">
                            <div className="menu-info">
                            <h5>
                                Salmon Bagel <span className="price">30₹</span>
                            </h5>
                            <p>
                                Smoked salmon, cream cheese, dill, rocket, red onion.
                            </p>
                            </div>
                            <div className="menu-info">
                            <h5>
                                Breakfast Bagel <span className="price">33₹</span>
                            </h5>
                            <p>Chocolate, marshmallow, biscuit bar</p>
                            </div>
                            <div className="menu-info">
                            <h5>
                                Rusty’s Pancake <span className="price">40₹</span>
                            </h5>
                            <p>
                                Strawberry, white chocolate, dark chocolate, crispearls
                            </p>
                            </div>
                        </div>
                        </div>
                    </div> */}
                    {/* Dessert */}
                    {/* <div id="tab-6-content" className="cont">
                        <div className="row">
                        <div className="col-md-5">
                            <div className="menu-info">
                            <h5>
                                Bourbon Pecan Pie <span className="price">67₹</span>
                            </h5>
                            <p>Bourbon pecan stuffed pie, vanilla ice-cream</p>
                            </div>
                            <div className="menu-info">
                            <h5>
                                New York Cheesecake <span className="price">50₹</span>
                            </h5>
                            <p>Cheesecake, strawberry &amp; lime salad</p>
                            </div>
                            <div className="menu-info">
                            <h5>
                                Rusty’s ice-cream <span className="price">32₹</span>
                            </h5>
                            <p>Vanilla, bourbon, cookie, chocolate ice-cream</p>
                            </div>
                        </div>
                        <div className="col-md-5 offset-md-2">
                            <div className="menu-info">
                            <h5>
                                S’mores <span className="price">40₹</span>
                            </h5>
                            <p>Chocolate chip cookies, marshmallow, chocolate</p>
                            </div>
                            <div className="menu-info">
                            <h5>
                                Rocky Road <span className="price">42₹</span>
                            </h5>
                            <p>Chocolate, marshmallow, biscuit bar</p>
                            </div>
                            <div className="menu-info">
                            <h5>
                                Apple &amp; Pear Crumble{" "}
                                <span className="price">42₹</span>
                            </h5>
                            <p>
                                Caramelized pear and apple, oat crumble, vanilla
                                ice-cream
                            </p>
                            </div>
                        </div>
                        </div>
                    </div> */}
                    </div>
                </div>
                </div>
            </div>
            </div>
        </section>
        {/* Testiominals */}
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
                <img src="img/images/restaurant/resturant-Copy.png" alt="" className="mt-30 mb-30" />
                </div>
            </div>
            </div>
        </section>
    </>

  )
}

export default Restaurant;
