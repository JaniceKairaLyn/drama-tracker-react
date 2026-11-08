// src/DramaCard.jsx
import './Dramacard.css'; // We will create this file next

function DramaCard({ drama }) {
  return (
    <div className="drama-card">
      {drama.image && (
        <img src={drama.image} alt={`${drama.title} poster`} className="drama-poster" />
      )}
      <div className="card-header">
        <h3>{drama.title}</h3>
        {drama.chineseTitle && <span className="chinese-title">{drama.chineseTitle}</span>}
      </div>
      
      <div className="card-details">
        <span className="badge">{drama.type}</span>
        <span className="year">{drama.year}</span>
        <span className="episodes">{drama.episodes} eps</span>
      </div>

      <p className="genre"><strong>Genre:</strong> {drama.genre}</p>
      <p className="cast"><strong>Cast:</strong> {drama.cast}</p>
      
      <div className="rating-section">
        <strong>Romance Rating: </strong>
        <span className="rating">{drama.rating} / 10</span>
      </div>

      <p className="why-watch"><em>"{drama.whyWatch}"</em></p>

      <div className="links">
        <a href={drama.links.myanmar} target="_blank" rel="noreferrer" className="btn-mm">
          Myanmar Sub
        </a>
        <a href={drama.links.english} target="_blank" rel="noreferrer" className="btn-eng">
          Eng Sub
        </a>
      </div>
    </div>
  );
}

export default DramaCard;
