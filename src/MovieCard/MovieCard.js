import './MovieCard.css';

const MovieCard = ({ img, title, rating, id }) => {
  return (
    <article className="movie-card" id={id}>
      <img className="movie-poster" src={img} alt="movie poster" />
      <div className="movie-text">
        <h3>{title}</h3>
        <p>{Math.floor(rating)}/10</p>
      </div>
    </article>
  );
};

export default MovieCard;
