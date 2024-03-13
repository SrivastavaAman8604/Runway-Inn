import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // Optional: smooth scrolling behavior
    });
  };

  return (
    
    <nav className="navbar navbar-expand-lg">
  <div className="container ">
    {/* Logo */}
    <div className="logo-wrapper">
      <Link className="logo" to="/">
        {" "}
        <img src="img/runnway.png" className="logo-img link" alt="" />{" "}
      </Link>
      {/* <a className="logo" href="index.html"> <h2>THE Runway Inn <span>Luxury Hotel</span></h2> </a> */}
    </div>
    {/* Button */}
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbar"
      aria-controls="navbar"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      {" "}
      <span className="navbar-toggler-icon">
        <i className="ti-menu" />
      </span>{" "}
    </button>
    {/* Menu */}
    <div className="collapse navbar-collapse mr-5" id="navbar">
      <ul className="navbar-nav ms-auto">
        {/* <li className="nav-item dropdown" onClick={scrollToTop}>
          {" "}
          <Link
            className="nav-link link dropdown-toggle"
            to="/"
            role="button"
            data-bs-toggle="dropdown"
            data-bs-auto-close="outside"
            aria-expanded="false"
          >
            Home
            <i className="ti-angle-down"></i> 
          </Link>*/}
          {/* <ul className="dropdown-menu">
                      <li><a href="index-2.html" className="dropdown-item active"><span>Home Layout 1</span></a></li>
                      <li><a href="index2.html" className="dropdown-item"><span>Home Layout 2</span></a></li>
                      <li><a href="index3.html" className="dropdown-item"><span>Home Layout 3</span></a></li>
                      <li><a href="index4.html" className="dropdown-item"><span>Home Layout 4</span></a></li>
                      <li><a href="index5.html" className="dropdown-item"><span>Video 1</span></a></li>
                      <li><a href="index6.html" className="dropdown-item"><span>Video 2</span></a></li>
                      <li><a href="index7.html" className="dropdown-item"><span>Video 3</span></a></li>
                      <li><a href="index8.html" className="dropdown-item"><span>Slideshow 1</span></a></li>
                      <li><a href="index9.html" className="dropdown-item"><span>Slideshow 2</span></a></li>
                      <li><a href="index10.html" className="dropdown-item"><span>Slideshow 3</span></a></li>
                      <li><a href="index11.html" className="dropdown-item"><span>Parallax Image 1</span></a></li>
                      <li><a href="index12.html" className="dropdown-item"><span>Parallax Image 2</span></a></li>
                      <li><a href="index13.html" className="dropdown-item"><span>Parallax Image 3</span></a></li>
                      <li><a href="index14.html" className="dropdown-item"><span>Grid Background 1</span></a></li>
                      <li><a href="index15.html" className="dropdown-item"><span>Grid Background 2</span></a></li>
                  </ul>     
        </li> */}
        <li className="nav-item" onClick={scrollToTop}>
          <Link className="nav-link link" to="/Tariff">
            Tariff
          </Link>
        </li>
        <li className="nav-item dropdown" onClick={scrollToTop}>
          {" "}
          <Link className="nav-link link dropdown-toggle" to="/Room">
            Rooms
            <i className="ti-angle-down"></i>
          </Link>
          <ul className="dropdown-menu">
            <li><Link to="/Room" className="dropdown-item"><span>Business Class</span></Link></li>
            <li><Link to="/Room" className="dropdown-item"><span>Family Suite</span></Link></li>
            <li><Link to="/Room" className="dropdown-item"><span>Premium Economy</span></Link></li>
            <li><Link to="/Room" className="dropdown-item"><span>Maharaja Suite</span></Link></li>
          </ul>
        </li>
        <li className="nav-item" onClick={scrollToTop}>
          <Link className="nav-link link" to="/Banquet">
          Banquets
          </Link>
        </li>
        <li className="nav-item" onClick={scrollToTop}>
          <Link className="nav-link link" to="/Gallery">
            Gallery
          </Link>
        </li>
        <li className="nav-item" onClick={scrollToTop}>
          <Link className="nav-link link" to="/awards-and-achievements">
            Awards & recognition
          </Link>
        </li>
        <li className="nav-item dropdown" onClick={scrollToTop}>
          <Link className="nav-link link" to="/Restaurant">
            Dinning<i className="ti-angle-down"></i>
          </Link>
          <ul className="dropdown-menu">
            <li className="dropdown-item">
              <Link to="/aqua-lounge">Aqua Lounge</Link>
            </li>
          </ul>
        </li>
        
        {/* <li className="nav-item"><a className="nav-link" href="/">Spa</a></li> */}
        {/* <li className="nav-item dropdown"> <a className="nav-link dropdown-toggle" href="wedding.html">Wedding/Events  */}
        {/* <i className="ti-angle-down"></i> */}
        {/* </a> */}
        {/* <ul className="dropdown-menu">
                      <li><a href="services.html" className="dropdown-item"><span>Services</span></a></li>
                      <li><a href="facilities.html" className="dropdown-item"><span>Facilities</span></a></li>
                      <li><a href="gallery.html" className="dropdown-item"><span>Gallery</span></a></li>
                      <li><a href="team.html" className="dropdown-item"><span>Team</span></a></li>
                      <li><a href="pricing.html" className="dropdown-item"><span>Pricing</span></a></li>
                      <li><a href="careers.html" className="dropdown-item"><span>Careers</span></a></li>
                      <li><a href="faq.html" className="dropdown-item"><span>F.A.Qs</span></a></li>
                      <li className="dropdown-submenu dropdown"> <a className="dropdown-item dropdown-toggle" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false" href="#"><span>Other Pages <i className="ti-angle-right"></i></span></a>
                          <ul className="dropdown-menu">
                              <li><a href="404.html" className="dropdown-item"><span>404 Page</span></a></li>
                              <li><a href="coming-soon.html" className="dropdown-item"><span>Coming Soon</span></a></li>
                          </ul>
                      </li>
                  </ul> */}
        {/* <li className="nav-item dropdown"> <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false">News  */}
        {/* <i className="ti-angle-down"></i> */}
        {/* </a> */}
        {/* <ul className="dropdown-menu">
                      <li><a href="/" className="dropdown-item"><span>News 1</span></a></li>
                      <li><a href="news2.html" className="dropdown-item"><span>News 2</span></a></li>
                      <li><a href="/" className="dropdown-item"><span>Post Page</span></a></li>
                  </ul> */}
        <li className="nav-item" onClick={scrollToTop}>
          <Link className="nav-link link" to="/Contact">
            Contact
          </Link>
        </li>
      </ul>
      <button type="submit" className="btn btn-danger ms-5">
        <Link to='https://asiatech.in/booking_engine/index3?token=NjAyNw=='>Book Now</Link>                    
      </button>
    </div>
    
  </div>
</nav>

  )
}

export default Header
