import React, {useState} from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  const [isRoomDropdownOpen, setIsRoomDropdownOpen] = useState(false);
  const [isRestaurantDropdownOpen, setIsRestaurantDropdownOpen] = useState(false);

  const toggleRoomDropdown = () => {
    setIsRoomDropdownOpen(!isRoomDropdownOpen);
    setIsRestaurantDropdownOpen(false); // Close restaurant dropdown
  };

  const toggleRestaurantDropdown = () => {
    setIsRestaurantDropdownOpen(!isRestaurantDropdownOpen);
    setIsRoomDropdownOpen(false); // Close room dropdown
  };
 
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
        <img src="img/runnway.png" className="logo-img link log" alt="" />{" "}
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
      <span className="navbar-toggler-icon" style={{marginBottom: '50px' }}>
        <i className="ti-menu" style={{fontSize: '30px' }}/>
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
          
        
        <li className="nav-item dropdown" onClick={toggleRoomDropdown}>
              <span className="nav-link link">
                <span className="nav-link1"><Link to='/room'>Room</Link></span>
                <i className={`ti-angle-down mob dropdown-toggle`} />
              </span>
              <ul className={`dropdown-menu ${isRoomDropdownOpen ? 'show' : ''}`}>
                <li><a href="/Room#premium-economy" className="dropdown-item nav-link1"><span>Premium Economy</span></a></li>
                <li><a href="/Room#business-class" className="dropdown-item nav-link1"><span>Business Class</span></a></li>
                <li><a href="/Room#family-suite" className="dropdown-item nav-link1"><span>Family Suite</span></a></li>
                <li><a href="/Room#maharaja-suite" className="dropdown-item nav-link1"><span>Maharaja Suite</span></a></li>
              </ul>
            </li>
        <li className="nav-item" onClick={scrollToTop}>
          <Link className="nav-link link nav-link1" to="/Banquet">
          Banquets
          </Link>
        </li>
        <li className="nav-item" onClick={scrollToTop}>
          <Link className="nav-link nav-link1 link" to="/Gallery">
            Gallery
          </Link>
        </li>
        {/* <li className="nav-item" onClick={scrollToTop}>
          <Link className="nav-link link nav-link1" to="/awards-and-achievements">
            Awards & recognition
          </Link>
        </li> */}
        <li className="nav-item dropdown" onClick={toggleRestaurantDropdown}>
              <span className="nav-link link">
                <span className="nav-link1"><Link to='/restaurant' onClick={scrollToTop}>Dining</Link></span>
                <i className={`ti-angle-down mob dropdown-toggle`} />
              </span>
              <ul className={`dropdown-menu ${isRestaurantDropdownOpen ? 'show' : ''}`}>
                <li className="dropdown-item nav-link1" onClick={scrollToTop}>
                  <Link to="/aqua-lounge">Aqua Lounge</Link>
                </li>
                <li className="dropdown-item nav-link1" onClick={scrollToTop}>
                  <Link to="/simply-benaras">Simply Benares</Link>
                </li>
                <li className="dropdown-item nav-link1" onClick={scrollToTop}>
                  <Link to="/SatvikBhoj">Satvik Bhoj</Link>
                </li>
              </ul>
            </li>
        
        
                  <li className="nav-item" onClick={scrollToTop}>
          <Link className="nav-link link nav-link1" to="/Tariff">
            Tariff
          </Link>
        </li>
        <li className="nav-item" onClick={scrollToTop}>
          <Link className="nav-link link nav-link1" to="/Contact">
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
