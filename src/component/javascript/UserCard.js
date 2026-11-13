import { useState } from 'react';
import LikeDislike from './LikeDislike';

function UserCard({ user }) {
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (comment.trim() === '') return;
    setComments([...comments, comment.trim()]);
    setComment('');
  };

  return (
    <div className="card" style={{ width: '18rem' }}>
      {/* Like / Dislike au-dessus */}
      <div className="card-header d-flex justify-content-center">
        <LikeDislike />
      </div>

      {/* Image propre à chaque utilisateur */}
      <img
        src={user.image}
        className="card-img-top"
        alt={user.name}
        style={{ height: '200px', objectFit: 'cover' }}
      />

      <div className="card-body">
        <h5 className="card-title">{user.name}</h5>
        <p className="card-text">{user.prenom}</p>

        {/* Zone de commentaire */}
        <form onSubmit={handleSubmit}>
          <textarea
            className="form-control mb-2"
            rows="2"
            placeholder="Écrire un commentaire..."
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
          <button type="submit" className="btn btn-primary btn-sm w-100">
            Envoyer
          </button>
        </form>

        {/* Liste des commentaires */}
        {comments.length > 0 && (
          <ul className="list-group list-group-flush mt-3">
            {comments.map((c, index) => (
              <li key={index} className="list-group-item px-0">
                {c}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default UserCard;