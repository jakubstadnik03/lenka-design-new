import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { CSSTransition } from "react-transition-group";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showServices, setShowServices] = useState(false);
  const [showProjekty, setshowProjekty] = useState(false);

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const toggleServices = () => {
    setShowServices(!showServices);
  };

  const toggleProjekty = () => {
    setshowProjekty(!showProjekty);
  };

  return (
    <>
      <header
        className="header-three eight five header--sticky"
        style={{ position: "relative" }}
      >
        <Link to="/" className="logo-area">
          <img
            src="/assets/icons/lenka-design-logo.svg"
            style={{ height: "55px" }}
            alt="logo"
          />
        </Link>
        <div className="header-right">
          <div className="nav-area-center">
            <nav className="navigation">
              <ul className="parent-ul">
                <li className="has-dropdown with-megamenu">
                  <Link className="nav-link" to="/">
                    Domů
                  </Link>
                </li>
                <li className="has-dropdown">
                  <Link className="nav-link" to="/o-nas">
                    O nás
                  </Link>
                </li>

                <li className="has-dropdown">
                  <Link className="nav-link" to="/portfolio">
                    Projekty
                  </Link>
                  <ul className="submenu">
                    <li className="sub-dropdown lim">
                      <a className="sdm-main" href="/portfolio">
                        Mé předchozí projekty
                      </a>
                      <ul className="submenu third-lvl base">
                        <li className="lim">
                          <a
                            className="mobile-menu-link"
                            href="/portfolio/vila-albatros"
                          >
                            Vila Albatros
                          </a>
                        </li>
                        <li className="lim">
                          <a
                            className="mobile-menu-link"
                            href="/portfolio/kadernicky-salon"
                          >
                            Kadeřnický salón
                          </a>
                        </li>
                        <li className="lim">
                          <a
                            className="mobile-menu-link"
                            href="/portfolio/luxusni-apartma"
                          >
                            Luxusní apartmá
                          </a>
                        </li>
                        <li className="lim">
                          <a
                            className="mobile-menu-link"
                            href="/portfolio/wellness-salon"
                          >
                            Wellness salón
                          </a>
                        </li>
                        <li className="lim">
                          <a
                            className="mobile-menu-link"
                            href="/portfolio/renovace-chalupy"
                          >
                            Renovace chalupy
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="lim">
                      <a
                        className="sdm-main"
                        style={{ borderBottom: "0" }}
                        href="/fotogalerie"
                      >
                        Fotogalerie realizací
                      </a>
                    </li>
                    <li className="lim">
                      <a
                        className="sdm-main"
                        style={{ borderBottom: "0" }}
                        href="/web-a-grafika"
                      >
                        Webové aplikace a grafika
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="has-dropdown">
                  <Link className="nav-link" to="/nase-sluzby">
                    Naše služby
                  </Link>
                  <ul className="submenu">
                    <li className="lim">
                      <a
                        className="sdm-main"
                        href="/nase-sluzby/3d-navrhy-interieru"
                      >
                        3D návrhy interiéru
                      </a>
                    </li>
                    <li className="lim">
                      <a
                        className="sdm-main"
                        href="/nase-sluzby/2d-navrhy-interieru"
                      >
                        2D návrhy interiéru
                      </a>
                    </li>
                    <li className="lim">
                      <a className="sdm-main" href="/nase-sluzby/realizace">
                        Realizace
                      </a>
                    </li>
                    <li className="lim">
                      <a className="sdm-main" href="/nase-sluzby/konzultace">
                        Konzultace
                      </a>
                    </li>
                    <li className="lim">
                      <a className="sdm-main" href="/nase-sluzby/homestaging">
                        Homestaging
                      </a>
                    </li>
                    <li className="lim">
                      <a
                        className="sdm-main"
                        style={{ color: "var(--color-primary) " }}
                        href="/web-a-grafika"
                      >
                        Webové aplikace a grafika
                      </a>
                    </li>
                    <li className="lim">
                      <a
                        className="sdm-main"
                        href="/nase-sluzby/navrhy-bytovych-interieru"
                      >
                        Navrhy bytovych interieru
                      </a>
                    </li>
                    <li className="lim">
                      <a
                        className="sdm-main"
                        href="/nase-sluzby/navrhy-komercnich-interieru"
                      >
                        Navrhy komerčních interieru
                      </a>
                    </li>
                    <li className="lim">
                      <a
                        className="sdm-main"
                        style={{ borderBottom: "0" }}
                        href="/nase-sluzby/realizace-celych-domu"
                      >
                        Realizace celých domů
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="has-dropdown">
                  <Link className="nav-link" to="/blog">
                    Blog
                  </Link>
                </li>
                <li className="has-dropdown">
                  <Link className="nav-link" to="/cenik">
                    Ceník
                  </Link>
                </li>
                <li>
                  <Link to="/kontakt">Kontakt</Link>
                </li>
              </ul>
            </nav>
          </div>
          <div
            className="action-area"
            id="menu-btn"
            onClick={handleMobileMenuToggle}
          >
            <div className="icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="16"
                viewBox="0 0 24 16"
                fill="none"
              >
                <rect x="6" width="18" height="2" fill="#D9D9D9"></rect>
                <rect x="10" y="14" width="14" height="2" fill="#D9D9D9"></rect>
                <rect y="7" width="24" height="2" fill="#D9D9D9"></rect>
              </svg>
            </div>
            <span>Menu</span>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <CSSTransition
        in={isMobileMenuOpen}
        timeout={300}
        classNames="mobile-menu"
        unmountOnExit
      >
        <div className={`mobile-menu-main ${isMobileMenuOpen ? "open" : ""}`}>
          <nav className="nav-main mainmenu-nav mt--30">
            <ul className="mainmenu metismenu" id="mobile-menu-active">
              <li>
                <Link className="main" to="/" onClick={closeMobileMenu}>
                  Domů
                </Link>
              </li>
              <li className="has-dropdown">
                <Link className="main" to="/o-nas" onClick={closeMobileMenu}>
                  O nás
                </Link>
              </li>
              <li className={`has-dropdown ${showServices ? "mm-show" : ""}`}>
                <div className="main" onClick={toggleServices}>
                  Naše služby
                </div>
                <CSSTransition
                  in={showServices}
                  timeout={300}
                  classNames="mobile-menu"
                  unmountOnExit
                >
                  <ul
                    className={`mm-collapse ${showServices ? "mm-show" : ""}`}
                  >
                    <li>
                      <a
                        className="mobile-menu-link"
                        href="/nase-sluzby"
                        onClick={closeMobileMenu}
                      >
                        Seznam našich služeb
                      </a>
                    </li>
                    <li>
                      <a
                        className="mobile-menu-link"
                        href="/nase-sluzby/3d-navrhy-interieru"
                        onClick={closeMobileMenu}
                      >
                        3D návrhy interiéru
                      </a>
                    </li>
                    <li>
                      <a
                        className="mobile-menu-link"
                        href="/nase-sluzby/2d-navrhy-interieru"
                        onClick={closeMobileMenu}
                      >
                        2D návrhy interiéru
                      </a>
                    </li>
                    <li>
                      <a
                        className="mobile-menu-link"
                        href="/nase-sluzby/realizace"
                        onClick={closeMobileMenu}
                      >
                        Realizace
                      </a>
                    </li>
                    <li>
                      <a
                        className="mobile-menu-link"
                        href="/nase-sluzby/konzultace"
                        onClick={closeMobileMenu}
                      >
                        Konzultace
                      </a>
                    </li>
                    <li>
                      <a
                        className="mobile-menu-link"
                        href="/nase-sluzby/homestaging"
                        onClick={closeMobileMenu}
                      >
                        Homestaging
                      </a>
                    </li>
                    <li>
                      <a
                        className="mobile-menu-link"
                        href="/web-a-grafika"
                        onClick={closeMobileMenu}
                        style={{ color: "var(--color-primary) " }}
                      >
                        Webové aplikace a grafika
                      </a>
                    </li>
                    <li>
                      <a
                        className="mobile-menu-link"
                        href="/nase-sluzby/navrhy-bytovych-interiéru"
                        onClick={closeMobileMenu}
                      >
                        Návrhy bytových interiérů
                      </a>
                    </li>
                    <li>
                      <a
                        className="mobile-menu-link"
                        href="/nase-sluzby/navrhy-komercnich-interieru"
                        onClick={closeMobileMenu}
                      >
                        Návrhy komerčních interiérů
                      </a>
                    </li>
                    <li>
                      <a
                        className="mobile-menu-link"
                        href="/nase-sluzby/realizace-celych-domu"
                        onClick={closeMobileMenu}
                      >
                        Realizace celých domů
                      </a>
                    </li>
                  </ul>
                </CSSTransition>
                <span className="button">
                  <FontAwesomeIcon
                    icon={showServices ? faChevronDown : faChevronUp}
                  />
                </span>
              </li>
              <li className="has-dropdown">
                <div className="main" onClick={toggleProjekty}>
                  Projekty
                </div>
                <CSSTransition
                  in={showProjekty}
                  timeout={300}
                  classNames="mobile-menu"
                  unmountOnExit
                >
                  <ul
                    className={`mm-collapse ${showProjekty ? "mm-show" : ""}`}
                  >
                    <li>
                      <a
                        className="mobile-menu-link"
                        href="/portfolio"
                        onClick={closeMobileMenu}
                      >
                        Mé předchozí projekty
                      </a>
                    </li>
                    <li>
                      <a
                        className="mobile-menu-link"
                        href="/fotogalerie"
                        onClick={closeMobileMenu}
                      >
                        Fotogalerie realizací
                      </a>
                    </li>
                    <li>
                      <a
                        className="mobile-menu-link"
                        href="/web-a-grafika"
                        onClick={closeMobileMenu}
                      >
                        Webové aplikace a grafika
                      </a>
                    </li>
                  </ul>
                </CSSTransition>
                <span className="button">
                  <FontAwesomeIcon
                    icon={showProjekty ? faChevronDown : faChevronUp}
                  />
                </span>
              </li>
              <li>
                <Link className="main" to="/blog" onClick={closeMobileMenu}>
                  Blog
                </Link>
              </li>
              <li>
                <Link className="main" to="/cenik" onClick={closeMobileMenu}>
                  Ceník
                </Link>
              </li>
              <li>
                <Link className="main" to="/kontakt" onClick={closeMobileMenu}>
                  Kontaktovat
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </CSSTransition>
    </>
  );
};

export default Header;
