import React from "react";
import { connect } from "react-redux";

export const Portefolio = (props) => {
  const onGoDetails = (value)=>{
    let action = {type: "GO DETAILS", payload: value}
    props.dispatch(action)
    props.history.push("/details")
  }
  return (
    <section id="work" class="portfolio-mf sect-pt4 route">
      <div class="container">
        <div class="row">
          <div class="col-sm-12">
            <div class="title-box text-center">
              <h3 class="title-a">Portfolio</h3>
              <p class="subtitle-a">Voici des examples de projets réalisé.</p>
              <div class="line-mf"></div>
            </div>
          </div>
        </div>
        <div class="row">
          {props.work.map((item, index) => (
            <div class="col-md-4" key={index}>
              <div class="work-box">
                <div class="work-img">
                  <img
                    src={item.images[0]}
                    alt=""
                    class="img-fluid"
                    style={{ height: "300px" }}
                  />
                </div>
                <div class="work-content">
                  <div class="row">
                    <div class="col-sm-8">
                      <h2 class="w-title">{item.name}</h2>
                      <div class="w-more">
                        <span class="w-ctegory">{item.category}</span>
                        <span class="w-date" style={{ float: "right" }}>
                          {item.date}
                        </span>
                      </div>
                    </div>
                    <div class="col-sm-4">
                      <div class="w-like">
                        <a
                        href
                          onClick={()=> onGoDetails(item)}
                          style={{cursor: "pointer"}}
                        >
                          <span class="bi bi-plus-circle"></span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const mapStateToProps = (state) => state;

export default connect(mapStateToProps)(Portefolio);
