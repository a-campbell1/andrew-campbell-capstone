import "./Footer.scss";
import { Link } from "react-router-dom";
import icontwitter from "../../Assets/Logos/Icon-twitter.svg";
import iconinsta from "../../Assets/Logos/Icon-instagram.svg";
import iconfacebook from "../../Assets/Logos/Icon-facebook.svg";

function Footer() {
  return (
    <>
      <section className="footer-section">
        <div className="footer-section__container ">
          <div className="footer-section__links-container">
            <div className="fotter-section__link-twitter">
                <Link to="https://twitter.com">
            <img
              className="footer-section__social-icon"
              src={icontwitter}
              alt="twitter-symbol"
            />
            </Link>
            </div>
            <div className="footer-section__link-insta">
                <Link to="https://instagram.com">
            <img
              className="footer-section__social-icon"
              src={iconinsta}
              alt="instagram-symbol"
            />
            </Link>
            </div>
            <div className="footer-section__link-fb">
                <Link to="https://facebook.com">
            <img
              className="footer-section__social-icon"
              src={iconfacebook}
              alt="facebook-symbol"
            />
            </Link>
            </div>
          </div>

          <div className="footer-section__background">
            <div className="footer-section__copyright">
              <Link to="https://www.pexels.com">
                <button className="copyright-txt">
                  Copyright &#169; 2018 - 2019, All Rights Reserved By PEXEL
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Footer;
