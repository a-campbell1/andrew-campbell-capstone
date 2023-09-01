import "./HomePage.scss";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import LikeButton from "../../Components/LikeButton/LikeButton";
import { useEffect, useState } from "react";
import axios from "axios";
import insertphotohere from "../../Assets/images/insert-photo-here.jpeg";
import { Link } from "react-router-dom";

function HomePage() {
  const [imageOriginal, setImageOriginal] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [randomNumber, setRandomNumber] = useState(
    Math.floor(Math.random() * imageOriginal.length)
  );

  const [uploadImage, setUploadImage] = useState(false);
  function handleChange(event) {
    console.log(event.target.files);
    setUploadImage(URL.createObjectURL(event.target.files[0]));
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
                <p className="title-pro">
                  Upload your image into the right hand side box and compare to
                  the left hand side click the choose file button and choose the
                  image you would like to compare
                </p>
                {/* <p className="title-begginer">Upload your picture here</p> */}
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
                    <LikeButton />
                  </div>
                  <div className="like-button__right">
                    <LikeButton />
                  </div>
                </section>
              </div>
            </section>
          </div>
          <section className="lower__section-links">
          <section className="recommendations__container">
            <div className="recommendations__birds">
              <Link to="http://www.photographers-resource.co.uk/wildlife/locations/birds/Lists/UK_Wild_Birds.htm">
                <button className="photography-resources">
                  Photography locations for Birds
                </button>
              </Link>
            </div>
            <div className="recommendations__zoo">
              <Link to="https://dayoutinengland.com/best-zoo-in-england/">
                <button className="photography-zoo">Zoo Locations in UK</button>
              </Link>
            </div>
            <div className="recommendations__landscape">
              <Link to="https://www.36exp.co.uk/the-5-best-landscape-photography-locations-in-london/">
                <button className="photography-lanscape-locations">
                  Locations for Landscape Photography
                </button>
              </Link>
            </div>
          </section>
          <section className="things-to-take__container">
            <p className="things-to-take-title">Things to take</p>
            <ul>
              <li>Umbrella</li>
              <li>Tri-Pod</li>
              <li>Gloves</li>
              <li>Dust Blower</li>
              <li>White balance cards</li>
              <li>Rain-Coat</li>
            </ul>
          </section>
          </section>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default HomePage;
