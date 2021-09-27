import React from "react";
import { connect } from "react-redux";
import { Contact } from "../components/Contact";
import { Cover } from "../components/Cover";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import Portefolio from "../components/Portefolio";
import { Presentation } from "../components/Presentation";
import { Service } from "../components/Service";

export const Home = (props) => {
  return (
    <>
      <Header />
      <Cover />
      <Presentation />
      <Service />
      <Portefolio history={props.history} />
      <Contact />
      <Footer />
    </>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
