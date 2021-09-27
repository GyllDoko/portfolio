import React from "react";
import {Carousel} from 'react-bootstrap'
import { connect } from "react-redux";

export function DetailsPage(props) {
  
  return (
    <section id="portfolio-details" class="portfolio-details">
      <div class="container">
        <div class="row gy-4">
          <div class="col-lg-8">
            <div class="portfolio-details-slider swiper-container">
            <Carousel fade interval={4000}>
                 {props.data.images.map((e, index)=>(
                   <Carousel.Item key={index}>

                   {props.data.android ?  <img
                     className="d-block"
                     src={e}
                     alt={props.data.name + index}
                     style={{height: "550px", width: "auto"}}
                   /> : <img
                     className="d-block w-100"
                     src={e}
                     alt={props.data.name + index}
                     style={{height: "550px"}}
                   />}
                  

                
                 </Carousel.Item>
                 )) }
             </Carousel>
            </div>
          </div>

          <div class="col-lg-4">
            <div class="portfolio-info">
              <h3>Project information</h3>
              <ul>
                <li>
                  <strong>Category</strong>: {props.data.category}
                </li>
                <li>
                  <strong>Client</strong>: {props.data.client}
                </li>
                <li>
                  <strong>Project date</strong>: {props.data.date}
                </li>
                {/* <li>
                  <strong>Project URL</strong>: <a href="#">www.example.com</a>
                </li> */}
              </ul>
            </div>
            <div class="portfolio-description">
              <h2>Brève description</h2>
              <p>
              {props.data.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
const mapStateToProps = (state) => {
  return {
    data : state.details
  }
};
export default connect(mapStateToProps)(DetailsPage)