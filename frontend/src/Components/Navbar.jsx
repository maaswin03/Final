import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../Components/Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSubmenuOpen, setIsSubmenuOpen] = useState({
    crop: false,
    detection: false,
    others: false,
  });

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleSubmenu = (menu) => {
    setIsSubmenuOpen((prev) => ({
      ...prev,
      [menu]: !prev[menu],
    }));
  };

  return (
    <>
      <div className="nav1">
        <div className="nav2 nav3">
          <span style={{ color: 'white', marginLeft: '5%' }}>Agri</span>
          <span style={{ color: 'white' }}>Sense</span>
        </div>
        <div className="nav2 nav4">
          <Link to="/">Home</Link>
          <Link to="/dashboard">Dashboard</Link>
          <div className="dropdown">
            <a href="#">Crop <i className="fa fa-caret-down"></i></a>
            <div className="dropdown-content">
              <Link to="/fieldbot">Field Bot</Link>
              <Link to="/cropai">Crop Ai</Link>
              <Link to="/cropdoctor">Crop Doctor</Link>
            </div>
          </div>
          <div className="dropdown">
            <a href="#">Detection <i className="fa fa-caret-down"></i></a>
            <div className="dropdown-content">
              <Link to="/animaldetection">Animal Detection</Link>
              <Link to="/pestmanagement">Pest Management</Link>
            </div>
          </div>
          <div className="dropdown">
            <a href="#">Others <i className="fa fa-caret-down"></i></a>
            <div className="dropdown-content">
              <Link to="/community">Community</Link>
              <Link to="/chatbot">Chatbot</Link>
              <Link to="/alert">Alert & Notifications</Link>
              <Link to="/profile">Profile</Link>
            </div>
          </div>
          <Link to="/pricing">Pricing</Link>
        </div>
      </div>

      <header>
        <div className="hamburger-menu" onClick={toggleMenu}>
          <div className={`bar ${isMenuOpen ? 'animate' : ''}`}></div>
          <div className={`bar ${isMenuOpen ? 'animate' : ''}`}></div>
          <div className={`bar ${isMenuOpen ? 'animate' : ''}`}></div>
        </div>
        <nav className={`mobile-menu ${isMenuOpen ? 'active' : ''}`}>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/dashboard">Dashboard</Link></li>
            <li className={`has-children ${isSubmenuOpen.crop ? 'open' : ''}`} onClick={() => toggleSubmenu('crop')}>
              Crop <span className={`icon-arrow ${isSubmenuOpen.crop ? 'open' : ''}`} style={{color:"white"}}></span>
              <ul className={`children ${isSubmenuOpen.crop ? 'open' : ''}`}>
                <li><Link to="/fieldbot">Field Bot</Link></li>
                <li><Link to="/cropai">Crop Ai</Link></li>
                <li><Link to="/cropdoctor">Crop Doctor</Link></li>
              </ul>
            </li>
            <li className={`has-children ${isSubmenuOpen.detection ? 'open' : ''}`} onClick={() => toggleSubmenu('detection')}>
              Detection <span className={`icon-arrow ${isSubmenuOpen.detection ? 'open' : ''}`}></span>
              <ul className={`children ${isSubmenuOpen.detection ? 'open' : ''}`}>
                <li><Link to="/animaldetection">Animal Detection</Link></li>
                <li><Link to="/pestmanagement">Pest Management</Link></li>
              </ul>
            </li>
            <li className={`has-children ${isSubmenuOpen.others ? 'open' : ''}`} onClick={() => toggleSubmenu('others')}>
              Others <span className={`icon-arrow ${isSubmenuOpen.others ? 'open' : ''}`}></span>
              <ul className={`children ${isSubmenuOpen.others ? 'open' : ''}`}>
                <li><Link to="/community">Community</Link></li>
                <li><Link to="/chatbot">Chatbot</Link></li>
                <li><Link to="/alert">Alert & Notifications</Link></li>
                <li><Link to="/profile">Profile</Link></li>
              </ul>
            </li>
            <li><Link to="/pricing">Pricing</Link></li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
