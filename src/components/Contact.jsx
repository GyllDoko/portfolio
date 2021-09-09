import React from "react";
import { connect } from "react-redux";

export const Contact = (props) => {
  return (
    <section
      id="contact"
      class="paralax-mf footer-paralax bg-image sect-mt4 route"
      style={{ backgroundImage: "url(assets/img/work-5.jpg)" }}
    >
      <div class="overlay-mf"></div>
      <div class="container">
        <div class="row">
          <div class="col-sm-12">
            <div class="contact-mf">
              <div id="contact" class="box-shadow-full">
                <div class="row">
                  {/* <div class="col-md-6">
                    <div class="title-box-2">
                      <h5 class="title-left">Me joindre</h5>
                    </div>
                    <div>
                      <form onSubmit={() => {}}>
                        <div class="row">
                          <div class="col-md-12 mb-3">
                            <div class="form-group">
                              <input
                                type="text"
                                name="name"
                                class="form-control shadow-none"
                                id="name"
                                placeholder="Votre Nom"
                                required
                              />
                            </div>
                          </div>
                          <div class="col-md-12 mb-3">
                            <div class="form-group">
                              <input
                                type="email"
                                class="form-control shadow-none"
                                name="email"
                                id="email"
                                placeholder="Votre Email"
                                required
                              />
                            </div>
                          </div>
                          <div class="col-md-12 mb-3">
                            <div class="form-group">
                              <input
                                type="text"
                                class="form-control shadow-none"
                                name="subject"
                                id="subject"
                                placeholder="Objet"
                                required
                              />
                            </div>
                          </div>
                          <div class="col-md-12">
                            <div class="form-group">
                              <textarea
                                class="form-control shadow-none"
                                name="message"
                                rows="5"
                                placeholder="Message"
                                required
                              ></textarea>
                            </div>
                          </div>
                          <div class="col-md-12 text-center my-3"></div>
                          <div class="col-md-12 text-center">
                            <button
                              type="submit"
                              class="button button-a button-big button-rouded shadow-none"
                            >
                              Envoyer
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>*/}
                  <div class="col-md-6 offset-1"> 
                    <div class="title-box-2 pt-4 pt-md-0">
                      <h5 class="title-left">Entrer en contact</h5>
                    </div>
                    <div class="more-info">
                      <p class="lead">
                        Vous pouvez me joindre sur mon numéro, sur les réseaux
                        sociaux et via mon email.
                      </p>
                      <ul class="list-ico">
                        <li>
                          <span class="bi bi-geo-alt"></span> Abomey-Calavi,
                          Houèto Bénin
                        </li>
                        <li>
                          {" "}
                          <a href="tel:0022966266589">+229 66266589 <span class="bi bi-phone"></span></a>
                        </li>
                        <li>
                         
                          <a href="mailto:dokogyll@gmail.com">
                            dokogyll@gmail.com  <span class="bi bi-envelope ms-2"></span>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div class="socials">
                      <ul>
                        <li>
                          <a href="https://web.facebook.com/profile.php?id=100006680506126">
                            <span
                              class="ico-circle"
                              style={{
                                alignItems: "center",
                                justifyContent: "center",
                                display: "flex",
                              }}
                            >
                              <i class="bi bi-facebook"></i>
                            </span>
                          </a>
                        </li>
                        <li>
                          <a href="https://www.instagram.com/gyll.doko/">
                            <span
                              class="ico-circle"
                              style={{
                                alignItems: "center",
                                justifyContent: "center",
                                display: "flex",
                              }}
                            >
                              <i class="bi bi-instagram"></i>
                            </span>
                          </a>
                        </li>
                        <li>
                          <a href="https://twitter.com/DokoGyll">
                            <span
                              class="ico-circle"
                              style={{
                                alignItems: "center",
                                justifyContent: "center",
                                display: "flex",
                              }}
                            >
                              <i class="bi bi-twitter"></i>
                            </span>
                          </a>
                        </li>
                        <li>
                          <a href="https://www.linkedin.com/in/gyll-christ-doko-alfa-bbab2b205/">
                            <span
                              class="ico-circle"
                              style={{
                                alignItems: "center",
                                justifyContent: "center",
                                display: "flex",
                              }}
                            >
                              <i class="bi bi-linkedin"></i>
                            </span>
                          </a>
                        </li>
                        <li>
                          <a href="https://wa.me/0022966266589">
                            <span
                              class="ico-circle"
                              style={{
                                alignItems: "center",
                                justifyContent: "center",
                                display: "flex",
                              }}
                            >
                              <i class="bi bi-whatsapp"></i>
                            </span>
                          </a>
                        </li>
                      </ul>
                    </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Contact);
