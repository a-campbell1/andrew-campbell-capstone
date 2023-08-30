import "./HomePage.scss";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import LikeButton from "../../Components/LikeButton/LikeButton";
import { useEffect, useState } from "react";
import axios from "axios";


function HomePage() {
  const [imageOriginal, setImageOriginal] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getImageDetails();
  }, []);

  const getImageDetails = async () => {
    try {
      const response = await axios.get(
        "https://api.pexels.com/v1/search?query=safari/FQWZQpOm0Zc1jPQo0VVM5j7xn1pDJr08cDgZ7XfXzAn4HJIgEwS20akG",
        {
          headers: {
            Authorization:
              "FQWZQpOm0Zc1jPQo0VVM5j7xn1pDJr08cDgZ7XfXzAn4HJIgEwS20akG",
          },
        }
      );

      setImageOriginal(response.data.photos);
      // console.log(response.data);
      setIsLoading(false);
    } catch (error) {
      console.error(error.message);
      setIsLoading(false);
    }
  };
  if (isLoading) {
    return;
  }

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
                <p className="title">Inspiration picture</p>
              </section>
              <section className="productcards__container-content">
                <section className="productcards__container-pro">
                  {/* {imageOriginal.map((image, index) => (
                    <img
                      key={index}
                      className="profesional-pic"
                      src={image.src.original}
                      alt="profesional shot"
                    />
                  ))} */}
                  <img
                    className="profesional-pic"
                    src={
                      imageOriginal[
                        Math.floor(Math.random() * imageOriginal.length)
                      ].src.original
                    }
                    alt="main shot to compare to"
                  />
                  <img
                    className="profesional-pic"
                    src={
                      imageOriginal[
                        Math.floor(Math.random() * imageOriginal.length)
                      ].src.original
                    }
                    // loading="lazy"
                    alt="beginner pi to compare to pro"
                  />
                </section>
                <LikeButton />
              </section>
            </section>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default HomePage;
