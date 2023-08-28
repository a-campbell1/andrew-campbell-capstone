// import axios from "axios";
// import { useEffect, useState } from "react";

import "./HomePage.scss";
import Header from "../../Components/Header/Header";
import capstone from "../../Assets/Logos/capstone-bg.avif";
import Footer from "../../Components/Footer/Footer";
import propic from "../../Assets/images/propic.webp";
import LikeButton from "../../Components/LikeButton/LikeButton";

function HomePage() {
  return (
    <>
      <div>
        <Header />
      </div>
      <section className="main-body">
        <div className="main-body__container">
          <div className="main-body__background">
            <section className="productcards__container">
              <section className="productcards__container-title">
                <p>Inspiration picture</p>
              </section>
              <section className="productcards__container-content">
                <section className="productcards__container-pro">
                <img
                  className="profesional-pic"
                  src={propic}
                  alt="looking through a camera lens"
                />
                </section>
                <LikeButton />
                
              </section>
              
              <img
                className="background"
                src={capstone}
                alt="smokey background"
              />
              
            </section>
            
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default HomePage;
