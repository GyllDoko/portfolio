import React, { useEffect } from "react";
import {Carousel} from 'react-bootstrap'
import { connect } from "react-redux";

export function DetailsPage(props) {
  const item = JSON.parse(localStorage.getItem('data'))
  const data= props.data

  useEffect(() => {
    if(data){
      localStorage.setItem('data', JSON.stringify(data))  
    }  
  }, [data])
  
  return (
    <section id="portfolio-details" class="portfolio-details">
      <div class="container">
        <div class="row gy-4">
          <div class="col-lg-8">
            <div class="portfolio-details-slider swiper-container">
            <Carousel fade interval={4000}>
                 {item.images.map((e, index)=>(
                   <Carousel.Item key={index}>

                   {item.android ?  <img
                     className="d-block"
                     src={e}
                     alt={item.name + index}
                     style={{height: "550px", width: "auto"}}
                   /> : <img
                     className="d-block w-100"
                     src={e}
                     alt={item.name + index}
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
                  <strong>Category</strong>: {item.category}
                </li>
                <li>
                  <strong>Client</strong>: {item.client}
                </li>
                <li>
                  <strong>Project date</strong>: {item.date}
                </li>
                {/* <li>
                  <strong>Project URL</strong>: <a href="#">www.example.com</a>
                </li> */}
              </ul>
            </div>
            <div class="portfolio-description">
              <h2>Brève description</h2>
              <p>
              {item.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
const mapStateToProps = state =>state
export default connect(mapStateToProps)(DetailsPage)