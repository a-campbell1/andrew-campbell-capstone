import "./Header.scss";
import { Link } from "react-router-dom";
// import camerasound from "../../../src/Assets/sounds/camera-sound.mp3";
// import useSound from "use-sound";
// import boopSfx from "../../../src/Assets/sounds/";

function Header() {
  return (
    <>
      <section className="header-section">
        <div className="header-section__container">
          <div className="header-section__title">
            <h1>Snappy Happy</h1>
          </div>
          <div className="header-section__container-btn">
            <div className="header-section__container-left">
              <Link to="/">
                <button className="login-btn">
                  <div className="login-btn__text">Login</div>
                </button>
              </Link>
            </div>

            <div className="header-section__container-btn">
              <div className="header-section__container-centre">
                <Link to="/">
                  <button className="sign-up-btn">
                    <div className="sign-up-btn__text">Sign-up</div>
                  </button>
                </Link>
              </div>
            </div>
            <div className="header-section__container-btn">
              <div className="header-section__container-right">
                <Link to="https://www.mpb.com/en-uk">
                  <button className="camera-store-btn">
                    <div className="camera-store-btn__text">Camera store</div>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Header;
