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
  <div className="container">
    {/* Logo */}
    <div className="logo-wrapper">
      <Link className="logo" to="/">
        {" "}
        <img src="img/runnway.png" className="logo-img link" alt="" />{" "}
      </Link>
      {/* <a class="logo" href="index.html"> <h2>THE Runway Inn <span>Luxury Hotel</span></h2> </a> */}
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
    <div className="collapse navbar-collapse" id="navbar">
      <ul className="navbar-nav ms-auto">
        <li className="nav-item dropdown" onClick={scrollToTop}>
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
            {/* <i class="ti-angle-down"></i> */}
          </Link>
          {/* <ul class="dropdown-menu">
                      <li><a href="index-2.html" class="dropdown-item active"><span>Home Layout 1</span></a></li>
                      <li><a href="index2.html" class="dropdown-item"><span>Home Layout 2</span></a></li>
                      <li><a href="index3.html" class="dropdown-item"><span>Home Layout 3</span></a></li>
                      <li><a href="index4.html" class="dropdown-item"><span>Home Layout 4</span></a></li>
                      <li><a href="index5.html" class="dropdown-item"><span>Video 1</span></a></li>
                      <li><a href="index6.html" class="dropdown-item"><span>Video 2</span></a></li>
                      <li><a href="index7.html" class="dropdown-item"><span>Video 3</span></a></li>
                      <li><a href="index8.html" class="dropdown-item"><span>Slideshow 1</span></a></li>
                      <li><a href="index9.html" class="dropdown-item"><span>Slideshow 2</span></a></li>
                      <li><a href="index10.html" class="dropdown-item"><span>Slideshow 3</span></a></li>
                      <li><a href="index11.html" class="dropdown-item"><span>Parallax Image 1</span></a></li>
                      <li><a href="index12.html" class="dropdown-item"><span>Parallax Image 2</span></a></li>
                      <li><a href="index13.html" class="dropdown-item"><span>Parallax Image 3</span></a></li>
                      <li><a href="index14.html" class="dropdown-item"><span>Grid Background 1</span></a></li>
                      <li><a href="index15.html" class="dropdown-item"><span>Grid Background 2</span></a></li>
                  </ul>      */}
        </li>
        <li className="nav-item" onClick={scrollToTop}>
          <Link className="nav-link link" to="/About">
            About
          </Link>
        </li>
        <li className="nav-item dropdown" onClick={scrollToTop}>
          {" "}
          <Link className="nav-link link dropdown-toggle" to="/Room">
            Rooms &amp; Suites
            {/* <i class="ti-angle-down"></i> */}
          </Link>
          {/* <ul class="dropdown-menu">
                      <li><a href="rooms.html" class="dropdown-item"><span>Rooms 1</span></a></li>
                      <li><a href="rooms2.html" class="dropdown-item"><span>Rooms 2</span></a></li>
                      <li><a href="rooms3.html" class="dropdown-item"><span>Rooms 3</span></a></li>
                      <li><a href="room-details.html" class="dropdown-item"><span>Room Details</span></a></li>
                  </ul> */}
        </li>
        <li className="nav-item" onClick={scrollToTop}>
          <Link className="nav-link link" to="/Restaurant">
            Restaurant
          </Link>
        </li>
        {/* <li class="nav-item"><a class="nav-link" href="/">Spa</a></li> */}
        {/* <li class="nav-item dropdown"> <a class="nav-link dropdown-toggle" href="wedding.html">Wedding/Events  */}
        {/* <i class="ti-angle-down"></i> */}
        {/* </a> */}
        {/* <ul class="dropdown-menu">
                      <li><a href="services.html" class="dropdown-item"><span>Services</span></a></li>
                      <li><a href="facilities.html" class="dropdown-item"><span>Facilities</span></a></li>
                      <li><a href="gallery.html" class="dropdown-item"><span>Gallery</span></a></li>
                      <li><a href="team.html" class="dropdown-item"><span>Team</span></a></li>
                      <li><a href="pricing.html" class="dropdown-item"><span>Pricing</span></a></li>
                      <li><a href="careers.html" class="dropdown-item"><span>Careers</span></a></li>
                      <li><a href="faq.html" class="dropdown-item"><span>F.A.Qs</span></a></li>
                      <li class="dropdown-submenu dropdown"> <a class="dropdown-item dropdown-toggle" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false" href="#"><span>Other Pages <i class="ti-angle-right"></i></span></a>
                          <ul class="dropdown-menu">
                              <li><a href="404.html" class="dropdown-item"><span>404 Page</span></a></li>
                              <li><a href="coming-soon.html" class="dropdown-item"><span>Coming Soon</span></a></li>
                          </ul>
                      </li>
                  </ul> */}
        {/* <li class="nav-item dropdown"> <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false">News  */}
        {/* <i class="ti-angle-down"></i> */}
        {/* </a> */}
        {/* <ul class="dropdown-menu">
                      <li><a href="/" class="dropdown-item"><span>News 1</span></a></li>
                      <li><a href="news2.html" class="dropdown-item"><span>News 2</span></a></li>
                      <li><a href="/" class="dropdown-item"><span>Post Page</span></a></li>
                  </ul> */}
        <li className="nav-item" onClick={scrollToTop}>
          <Link className="nav-link link" to="/Contact">
            Contact
          </Link>
        </li>
      </ul>
    </div>
  </div>
</nav>

  )
}

export default Header
