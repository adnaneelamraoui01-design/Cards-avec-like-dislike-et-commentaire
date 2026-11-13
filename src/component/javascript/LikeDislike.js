import { useState } from "react";
import { FaThumbsUp, FaThumbsDown } from "react-icons/fa";

function LikeDislike() {
  const [like, setLike] = useState(false);
  const [dislike, setDislike] = useState(false);
  const [likeCount, setLikeCount] = useState(0);
  const [dislikeCount, setDislikeCount] = useState(0);

  const handleLike = () => {
    if (like) {
      setLike(false);
      setLikeCount((c) => c - 1);
    } else {
      setLike(true);
      setLikeCount((c) => c + 1);
      if (dislike) {
        setDislike(false);
        setDislikeCount((c) => c - 1);
      }
    }
  };

  const handleDislike = () => {
    if (dislike) {
      setDislike(false);
      setDislikeCount((c) => c - 1);
    } else {
      setDislike(true);
      setDislikeCount((c) => c + 1);
      if (like) {
        setLike(false);
        setLikeCount((c) => c - 1);
      }
    }
  };

  return (
    <div className="d-flex align-items-center gap-3">
      <button
        className={`btn ${like ? "btn-primary" : "btn-outline-primary"}`}
        onClick={handleLike}
      >
        <FaThumbsUp /> {likeCount}
      </button>

      <button
        className={`btn ${dislike ? "btn-danger" : "btn-outline-danger"}`}
        onClick={handleDislike}
      >
        <FaThumbsDown /> {dislikeCount}
      </button>
    </div>
  );
}

export default LikeDislike;