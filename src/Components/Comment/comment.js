import "./comment.scss";
import { useState } from "react";

function Comment({ showComments }) {
  const [comments, setComments] = useState([
    {
      name: "David Yarrow",
      date: new Date(2023, 8, 4),
      comments:
        "Great shot, you are definately getting better, its clear Snappy Happy is helping.",
    },
    {
      name: "Marlon du Toit",
      date: new Date(2023, 8, 3),
      comments: "The lighting and composition of this shot is superb.",
    },
    {
      name: "Shaaz Jung",
      date: new Date(2023, 8, 1),
      comments:
        "Great use of the rule of thirds, Ill be back from safari soon, Ill upload some images you can try replicate.",
    },
  ]);

  const [name, setName] = useState("");
  const [userComment, setUserComment] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (name.trim() === "" || userComment.trim() === "") {
      alert("Please fill in both fields before submitting.");
      return;
    }

    const newComment = {
      name,
      date: new Date(),
      comments: userComment,
    };

    setComments([...comments, newComment]);
    setName("");
    setUserComment("");
  };

  return (
    <div className="comment__container">
      <p className="comment__container-title">Comments</p>
      <form onSubmit={handleFormSubmit}>
        <div className="comment__container-name">
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="comment__container-comment">
          <input
            type="text"
            placeholder="Your Comment"
            value={userComment}
            onChange={(e) => setUserComment(e.target.value)}
          />
        </div>
        <button className="comment__container-button" type="submit">Submit Comment</button>
      </form>
      <div className="comment__container-comments-section">
        {showComments && comments.map((comment, index) => (
          <div key={index} className="form__comment">
            <h3>{comment.name}</h3>
            <p>{comment.date.toLocaleDateString()}</p>
            <p>{comment.comments}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Comment;
