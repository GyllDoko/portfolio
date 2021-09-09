import React, { useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

export const Header = (props) => {
  const [navbar, setNavbar] = useState(false);
  const [mobileNav, setMobileNav] = useState(false);
  const changeBackGround = () => {
    if (window.scrollY > 100) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  window.addEventListener("scroll", changeBackGround);
  return (
    <header
      id="header"
      class={navbar ? "fixed-top header-scrolled" : "fixed-top"}
    >
      <div class="container d-flex align-items-center justify-content-between">
        <h1 class="logo">
          <a href="/">G.D</a>
        </h1>
        <a href="index.html" class="logo">
          <img src="assets/img/logo.png" alt="" class="img-fluid" />
        </a>

        <nav id="navbar" class={mobileNav ? "navbar-mobile" : "navbar"}>
          <ul>
            <li>
              <a class="nav-link scrollto " href="/#hero">
                Home
              </a>
            </li>
            <li>
              <a class="nav-link scrollto" href="/#about">
                About
              </a>
            </li>
            <li>
              <a class="nav-link scrollto" href="/#services">
                Services
              </a>
            </li>
            <li>
              <a class="nav-link scrollto " href="/#work">
                Works
              </a>
            </li>
            <li>
              <a class="nav-link scrollto" href="/#contact">
                Contact
              </a>
            </li>
          </ul>
          <Link to="#" onClick={() => setMobileNav(!mobileNav)}>
            {mobileNav ? (
              <i
                class="bi bi-x mobile-nav-toggle"
                style={{ fontSize: "30px" }}
              ></i>
            ) : (
              <i
                class="bi bi-list mobile-nav-toggle"
                style={{ fontSize: "24px" }}
              ></i>
            )}
          </Link>
        </nav>
      </div>
    </header>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
