import React, { useState, useEffect } from "react";
import LikeBtn from "../../Assets/Icons/Like-Btn.png";
import "./LikeButton.scss";

const LikeButton = ({ location }) => {
  const [likes, setLikes] = useState(Math.floor(Math.random() * 300));
  const [uploadedLikes, setUploadedLikes] = useState(0);
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    if (location === "left") {
      setLikes(likes + 1);
      setIsClicked(!isClicked);
    }
    if (location === "right") {
      setUploadedLikes(uploadedLikes + 1);
      setIsClicked(!isClicked);
    }
  };

  return (
    <button
      className={`like-button ${isClicked && "liked"}`}
      onClick={handleClick}
    >
      <img src={LikeBtn} alt="like Button" className="like-icon" />
      <span className="likes-counter">
        {location === "left" ? `${likes}` : `${uploadedLikes}`}
      </span>
    </button>
  );
};

export default LikeButton;
