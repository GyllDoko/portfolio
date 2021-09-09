import React from "react";
import { connect } from "react-redux";
import Header from "../components/Header";
import Footer from "../components/Footer";
import DetailsPage from "../components/DetailsPage";
export const Details = (props) => {
  
  return (
    <>
      <Header />
      <div className="container-fluid" style={{backgroundImage: "url('assets/img/hero-bg.jpg')", height: "150px"}}>

      </div>
      <div className="" style={{minHeight: "80vh"}}>
        <DetailsPage data={props.location.data} />
      </div>
      
      <Footer />
    </>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Details);
