import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../images/logo.png";

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__main">
          <div className="footer__logo-content">
            <img src={Logo} className="footer__logo" alt="Graphic Rhino Logo" />
            <div className="footer__slogan">take design by its horns</div>
          </div>
          <div className="footer__copyright">&copy; 2020 Graphic Rhino</div>
        </div>
        <div className="footer__about">
          <div className="footer__subtitle">ontdek</div>
          <Link to="/about" className="footer__link footer__item">
            Over ons
          </Link>
          <Link to="/cases" className="footer__link footer__item">
            Cases
          </Link>
          <Link to="/diensten" className="footer__link footer__item">
            Diensten
          </Link>
          <Link to="/blog" className="footer__link footer__item">
            Blog
          </Link>
        </div>
        <div className="footer__contact">
          <div className="footer__subtitle">contacteer ons</div>
          <div className="footer__item">0473328844</div>
          <a href="/#" className="footer__link footer__item">
            hello@graphicrhino.be
          </a>
          <div className="footer__item">
            Doorniksesteenweg 344 <br /> 8582 Outrijve
          </div>
          <div className="footer__item">BTW BE 0687 610 927</div>
        </div>

        <div className="footer__social">
          <div className="footer__subtitle">volg ons</div>
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="footer__link footer__item"
          >
            Facebook
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="footer__link footer__item"
          >
            Instagram
          </a>
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="footer__link footer__item"
          >
            Linkedin
          </a>
          <a
            href="https://www.behance.net"
            target="_blank"
            rel="noopener noreferrer"
            className="footer__link footer__item"
          >
            Behance
          </a>
        </div>

        <div className="footer__legal">
          <div className="footer__subtitle">legal</div>
          <a href="/#" className="footer__link footer__item">
            Privacy policy
          </a>
          <Link to="/contact" className="footer__link footer__item">
            Contacteer ons
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
