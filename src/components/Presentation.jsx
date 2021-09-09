import React from "react";
import { connect } from "react-redux";

export const Presentation = (props) => {
  return (
    <section id="about" class="about-mf sect-pt4 route">
      <div class="container">
        <div class="row">
          <div class="col-sm-12">
            <div class="box-shadow-full">
              <div class="row">
                <div class="col-md-6">
                  <div class="row">
                    <div class="col-sm-6 col-md-5">
                      <div class="about-img">
                        <img
                          src="assets/img/profil.png"
                          class="img-fluid rounded b-shadow-a"
                          alt=""
                          width="175px"
                          height="175px"
                        />
                      </div>
                    </div>
                    <div class="col-sm-6 col-md-7">
                      <div class="about-info">
                        <p>
                          <span class="title-s">Name: </span>
                          <span>Gyll-christ Rodolpho Abel DOKO ALFA</span>
                        </p>
                        <p>
                          <span class="title-s">Profile: </span>
                          <span>Full stack developer</span>
                        </p>
                        <p>
                          <span class="title-s">Email: </span>
                          <span>dokogyll@gmailcom</span>
                        </p>
                        <p>
                          <span class="title-s">Phone: </span>
                          <span>(229) 66266589</span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="skill-mf">
                    <p class="title-s">Skills</p>
                    <span>HTML5 && CSS3</span>

                    <div class="progress">
                      <div
                        class="progress-bar"
                        role="progressbar"
                        style={{ width: "85%" }}
                        aria-valuenow="85"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                    <span>JavaScript</span>
                    <div class="progress">
                      <div
                        class="progress-bar"
                        role="progressbar"
                        style={{ width: "90%" }}
                        aria-valuenow="90"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                    <span>React </span>
                    <div class="progress">
                      <div
                        class="progress-bar"
                        role="progressbar"
                        style={{ width: "80%" }}
                        aria-valuenow="80"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                    <span>React Native</span>

                    <div class="progress">
                      <div
                        class="progress-bar"
                        role="progressbar"
                        style={{ width: "80%" }}
                        aria-valuenow="80"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>

                    <span>Python</span>
                    <div class="progress">
                      <div
                        class="progress-bar"
                        role="progressbar"
                        style={{ width: "90%" }}
                        aria-valuenow="80"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                    <span>Django</span>
                    <div class="progress">
                      <div
                        class="progress-bar"
                        role="progressbar"
                        style={{ width: "80%" }}
                        aria-valuenow="80"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                    <span>Ruby on Rails</span>
                    <div class="progress">
                      <div
                        class="progress-bar"
                        role="progressbar"
                        style={{ width: "80%" }}
                        aria-valuenow="80"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="about-me pt-4 pt-md-0">
                    <div class="title-box-2">
                      <h5 class="title-left">About me</h5>
                    </div>
                    <p class="lead">
                      Gyll-christ est un Développeur FullStack qui aide les
                      chefs d'entreprises et les particuliers à crée des
                      applications web et mobile et pour de l'analyse de donnée.
                      Avant de commencer l'informatique, Gyll-christ était un
                      Technicien en électro-technique. Après être entré à
                      l'Université il se lie de passion a l'informatique et au
                      nouvelles technologies. Gyll-christ jouit de la lecture et
                      des sports collectifs (basket-ball, football ...).
                      Gyll-christ est disponible pour tout aide en développement
                      et consultations privées. Vous pouvez me joindre au
                      <span> +229 66266589</span> ou au
                      <span> dokogyll@gmail.com.</span>
                    </p>
                  </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Presentation);
