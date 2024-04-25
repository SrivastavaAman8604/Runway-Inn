import React from 'react'
import { Link } from 'react-router-dom'
import Map from './Map'

const Footer = () => {

    const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth' // Optional: smooth scrolling behavior
        });
      };

  return (
    <footer className="footer">
        <div className="footer-top">
            <div className="container">
            <div className="row">
                <div className="col-md-3">
                <div className="footer-column footer-about">
                    <h3 className="footer-title">About Hotel</h3>
                    <p className="footer-about-text">
                    We are the only Hotel Option at Varanasi Airport for frequent
                    travelers who wish to stay overnite and catch Flight to there
                    Destination from Varanasi and vice-versa.
                    </p>
                    {/* <div class="footer-language"> <i class="lni ti-world"></i>
                                    <select onchange="location = this.value;">
                                        <option value="#0">English</option>
                                        <option value="#0">German</option>
                                    </select>
                                </div> */}
                                <div className="footer-about-social-list">
                        <Link to="https://www.instagram.com/hotel_runway_inn/?igsh=cng5czlmMXd5am84&utm_source=qr">
                            <i className="ti-instagram" />
                        </Link>
                        {/* <Link to="#">
                            <i className="ti-twitter" />
                        </Link> */}
                        {/* <Link to="#">
                            <i className="ti-youtube" />
                        </Link> */}
                        <Link to="https://www.facebook.com/hotelrunwayinn?mibextid=ibOpuV">
                            <i className="ti-facebook" />
                        </Link>
                        {/* <Link to="#">
                            <i className="ti-pinterest" />
                        </Link> */}
                        <Link to="#">
                            <i className="ti-whatsapp" />
                        </Link>
                        <Link to='https://wa.me/9305804900'>
                            <img src="img/whatsapp1.png" alt="" style={{ width:'14%' , marginRight: '100%'}} />
                        </Link>
                    </div>
                </div>
                </div>
                {/* <div className="col-md-3 offset-md-1"> */}
                <div className="col-md-2 ">
                    <div className="footer-column footer-explore clearfix">
                        <h3 className="footer-title">Explore</h3>
                        <ul className="footer-explore-list list-unstyled">
                        <li className='link' onClick={scrollToTop}>
                            <Link to="/">Home</Link>
                        </li>
                        <li className='link' onClick={scrollToTop}>
                            <Link to="/Room">Rooms &amp; Suites</Link>
                        </li>
                        <li className='link' onClick={scrollToTop}>
                            <Link to="/Banquet"> Banquets</Link>
                        </li>
                        <li className='link' onClick={scrollToTop}>
                            <Link to="/Gallery"> Gallery</Link>
                        </li>
                        <li className='link' onClick={scrollToTop}>
                            <Link to="/Restaurant">Dining</Link>
                        </li>
                        {/* <li><Link to="/">Spa & Wellness</Link></li> */}
                        {/* <li className='link' onClick={scrollToTop}>
                            <Link to="/About">About Hotel</Link>
                        </li> */}
                        
                        <li className='link' onClick={scrollToTop}>
                            <Link to="/Contact">Contact</Link>
                        </li>
                        </ul>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="footer-column footer-contact">
                        <h3 className="footer-title">Contact</h3>
                        <p className="footer-contact-text">
                        16 GH, Babatpur LBS International Airport
                        <br />
                        Varanasi - 221 006 (U.P.), India
                        </p>
                        <div className="footer-contact-info">
                        <p className="footer-contact-phone">
                            <span className="flaticon-call" /> 93058 04900
                        </p>
                        <p className="footer-contact-phone">
                            <span className="flaticon-call" /> 0542-2622384,2623100
                        </p>
                        <p className="footer-contact-mail">info@hotelrunwayinn.com</p>
                        <p className="footer-contact-mail">booking.runwayInn@gmail.com</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="footer-column footer-contact">
                        <Map/>
                    </div>
                </div>
            </div>
            </div>
        </div>
        <div className="footer-bottom">
            <div className="container">
            <div className="row">
                <div className="col-md-12">
                <div className="footer-bottom-inner">
                    <p className="footer-bottom-copy-right">
                    © Copyright 2024 by <Link to="/">Semicolon Solution</Link>
                    </p>
                </div>
                </div>
            </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer
