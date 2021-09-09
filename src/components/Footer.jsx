import React from "react";
import { connect } from "react-redux";

export const Footer = (props) => {
  return (
    <footer>
      <div class="container">
        <div class="row">
          <div class="col-sm-12">
            <div class="copyright-box">
              <p class="copyright">
                &copy; {new Date().getFullYear()} Copyright{" "}
                <strong>Gyll-christ DOKO ALFA</strong>. All Rights Reserved
              </p>
              <div class="credits"></div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Footer);
