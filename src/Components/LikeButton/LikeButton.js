import React, { useState } from "react";
import LikeBtn from "../../Assets/Icons/Like-Btn.png";
import "./LikeButton.scss";

const LikeButton = () => {
  const [likes, setLikes] = useState(0);
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    if (isClicked) {
      setLikes(likes + 1);
    } else {
      setLikes(likes + 1);
    }
    setIsClicked(!isClicked);
  };

  return (
    <button
      className={`like-button ${isClicked && "liked"}`}
      onClick={handleClick}
    >
      <img src={LikeBtn} alt="like Button" className="like-icon" />
      <span className="likes-counter">{`${likes}`}</span>
    </button>
  );
};

export default LikeButton;
