// import axios from "axios";
// import { useEffect, useState } from "react";

import "./HomePage.scss";
import Header from "../../Components/Header/Header";
import capstone from "../../Assets/Logos/capstone-bg.avif";
import Footer from "../../Components/Footer/Footer";

function HomePage() {
  return (
    <>
      <div>
        <Header />
      </div>
      <section className="main-body">
        <div className="main-body__container">
          <div className="main-body__background">
            <img
              className="background"
              src={capstone}
              alt="smokey background"
            />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default HomePage;
