import React, { useEffect, useRef } from "react";
import { connect } from "react-redux";
import Typed from "typed.js";

export const Cover = (props) => {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "Frontend Developer",
        "Backend Developer",
        "Data Analyst",
        "Mobile Developer",
      ], // Strings to display
      // Speed settings, try diffrent values untill you get good results
      startDelay: 300,
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 100,
      loop: true,
    });

    // Destropying
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div
      id="hero"
      class="hero route bg-image"
      style={{
        backgroundImage:
          "url(assets/img/Profil-ingénieur-en-intelligence-artificielle.jpg)",
      }}
    >
      <div class="overlay-itro"></div>
      <div class="hero-content display-table">
        <div class="table-cell">
          <div class="container">
            <p class="display-6 color-d">Hello</p>
            <h1 class="hero-title mb-4">I am Gyll-christ DOKO ALFA</h1>
            <p class="hero-subtitle">
              <span class="typed" ref={el}></span>
            </p>
            <p class="pt-3">
              <a
                class="btn btn-primary btn js-scroll px-4"
                href="#about"
                role="button"
              >
                About Me
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Cover);
