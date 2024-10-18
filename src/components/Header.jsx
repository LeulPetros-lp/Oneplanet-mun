import React, { useState, useEffect } from 'react';
import logo from '../../assets/images/Logo.png';
import videoFile from '../../assets/images/course-video.mp4';
import { Typewriter } from 'react-simple-typewriter';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(false);

  // Toggle mobile menu
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Add or remove background to header on scroll
  useEffect(() => {
    const handleScroll = () => {
      const boxHeight = document.querySelector('.header-text').offsetHeight;
      const headerHeight = document.querySelector('header').offsetHeight;
      const scrollPosition = window.scrollY;

      if (scrollPosition >= boxHeight - headerHeight) {
        setActiveMenu(true);
      } else {
        setActiveMenu(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      {/* Header Section */}
      <header className={`header-area header-sticky ${activeMenu ? 'background-header' : ''}`}>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <nav className="main-nav">
                {/* Logo Section */}
                <a href="/" className="logo">
                  <img src={logo} alt="Logo" style={{ width: 150 }} /> MUN
                </a>

                {/* Menu Section */}
                <ul className={`nav ${menuOpen ? 'active' : ''}`}>
                  <li className="scroll-to-section">
                    <a href="/" className="active">Home</a>
                  </li>
                  <li className="has-sub">
                    <a href="#">About Us</a>
                    <ul className="sub-menu">
                      <li><a href="/">Upcoming Meetings</a></li>
                      <li><a href="/">Meeting Details</a></li>
                    </ul>
                  </li>
                  <li className="scroll-to-section"><a href="/">Apply Now</a></li>
                  <li className="scroll-to-section"><a href="/">Leaders</a></li>
                  <li className="scroll-to-section"><a href="/">Contact Us</a></li>
                </ul>

                {/* Menu Trigger for Mobile */}
                <span className="menu-trigger" onClick={toggleMenu}>
                  <span>Menu</span>
                </span>
              </nav>
            </div>
          </div>
        </div>
      </header>

      {/* Main Banner Section */}
      <section className="section main-banner" id="top" data-section="section1">
        <video autoPlay muted loop id="bg-video">
          <source src={videoFile} type="video/mp4" />
        </video>
        <div className="video-overlay header-text">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="caption">
                  <h3>Hello
                    <Typewriter
                      words={[' Students', ' Teachers', ' Parents']}
                      loop={true}
                      cursor
                      cursorStyle="|"
                      typeSpeed={70}
                      deleteSpeed={50}
                      delaySpeed={1000}
                    />
                  </h3>
                  <h2>Welcome to OnePlanet MUN</h2>
                  <p>
                    Welcome to OnePlanet MUN, where students come together to engage in global issues, diplomacy, and leadership.
                  </p>
                  <div className="main-button-red">
                    <a href="/">Upcoming meetups</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Header;
