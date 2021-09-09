import React from "react";
import { connect } from "react-redux";

export const Service = (props) => {
  return (
    <section id="services" class="services-mf pt-5 route">
      <div class="container">
        <div class="row">
          <div class="col-sm-12">
            <div class="title-box text-center">
              <h3 class="title-a">Services</h3>
              <p class="subtitle-a">Domaines dans lesquels j'intervient..</p>
              <div class="line-mf"></div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-4">
            <div class="service-box">
              <div class="service-ico">
                <span class="ico-circle">
                  <i class="bi bi-briefcase"></i>
                </span>
              </div>
              <div class="service-content">
                <h2 class="s-title">Web Design</h2>
                <p class="s-description text-center">
                  Conception de visuel pour des applications mobiles et Desktop
                  avec ADOBE XD
                </p>
                <div className="" style={{ padding: "10px" }}>
                  -
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="service-box">
              <div class="service-ico">
                <span class="ico-circle">
                  <i class="bi bi-card-checklist"></i>
                </span>
              </div>
              <div class="service-content">
                <h2 class="s-title">Web Development</h2>
                <p class="s-description text-center">
                  Conception d'application web, API avec des framework frontend
                  (React, VueJs, Angular) et Backend (Django, Ruby on Rails) et
                  applications mobiles avec React Native
                </p>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="service-box">
              <div class="service-ico">
                <span class="ico-circle">
                  <i class="bi bi-bar-chart"></i>
                </span>
              </div>
              <div class="service-content">
                <h2 class="s-title">Data Analyse</h2>
                <p class="s-description text-center">
                  Analyse de données massive avec des outils tels que Numpy,
                  Pandas, Matplotlib... pour des fiches statistiques
                </p>
                <div className="" style={{ padding: "0.5px" }}>
                  -
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Service);
