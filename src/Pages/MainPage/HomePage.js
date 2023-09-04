import "./HomePage.scss";
import Header from "../../Components/Header/Header";
import Slider from "../../Components/Slider/slider";
import Footer from "../../Components/Footer/Footer";
import LikeButton from "../../Components/LikeButton/LikeButton";
import Comment from "../../Components/Comment/comment";
import { useEffect, useState } from "react";
import axios from "axios";
import insertphotohere from "../../Assets/images/insert-photo-here.jpeg";

function HomePage() {
  const [imageOriginal, setImageOriginal] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [randomNumber, setRandomNumber] = useState(
    Math.floor(Math.random() * imageOriginal.length)
  );

  const [uploadImage, setUploadImage] = useState(false);
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  console.log(isImageLoaded);

  function handleChange(event) {
    console.log(event.target.files);
    setUploadImage(URL.createObjectURL(event.target.files[0]));
    setIsImageLoaded(true);
  }
  const handleRefresh = () => {
    setRandomNumber(Math.floor(Math.random() * imageOriginal.length));
  };

  useEffect(() => {
    getImageDetails();
  }, []);

  const getImageDetails = async () => {
    try {
      const response = await axios.get(
        "https://api.pexels.com/v1/search?query=safari&orientation=square",
        {
          headers: {
            Authorization:
              "FQWZQpOm0Zc1jPQo0VVM5j7xn1pDJr08cDgZ7XfXzAn4HJIgEwS20akG",
          },
        }
      );

      setImageOriginal(response.data.photos);
      setIsLoading(false);
    } catch (error) {
      console.error(error.message);
      setIsLoading(false);
    }
  };
  if (isLoading) {
    return null;
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
                <p className="title-pro">
                  Here we will help you take your beginner steps in
                  understanding how to take pictures in a professional way.
                  Select an image on the left and we will give you tips and
                  pointers for how to get this picture. Then once you are done,
                  you can upload your image on the right hand side and compare!
                </p>
              </section>
              <section className="productcards__container-content">
                <section className="productcards__container-pro">
                  <div className="productcards__container-left">
                    <img
                      className="profesional-pic__left"
                      src={imageOriginal[randomNumber].src.medium}
                      alt="main shot to compare to"
                    />
                    <button
                      className="productcards__container-left-refresh"
                      onClick={handleRefresh}
                    >
                      Choose New Image
                    </button>
                  </div>
                  <div className="productcards__container-right">
                    <img
                      className="profesional-pic__right"
                      src={uploadImage ? uploadImage : insertphotohere}
                      alt=""
                    />
                    <input type="file" onChange={handleChange} />
                  </div>
                </section>
              </section>
              <div className="productcards__buttons">
                <section className="like-button__container">
                  <div className="like-button__left">
                    <LikeButton location="left" />
                  </div>
                  <div className="like-button__right">
                    <LikeButton location="right" />
                  </div>
                </section>
              </div>
            </section>
          </div>
          <Slider />
          <Comment showComments={isImageLoaded} />
        </div>
      </section>
      <Footer />
    </>
  );
}

export default HomePage;
