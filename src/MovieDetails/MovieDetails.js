import './MovieDetails.css';
import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
import Error from '../Error/Error';
import { getSingleMovie } from '../apiCalls';

const MovieDetails = ({ id }) => {
  const [currentMovie, setCurrentMovie] = useState({});
  const [error, setError] = useState('');

  useEffect(() => {
    getSingleMovie(id)
      .then((movie) => setCurrentMovie(movie.movie))
      .catch((error) => setError(error.message));
  }, [id]);

  return (
    <section className="movie-details">
      <div className="movie-image-fade" />
      {currentMovie.backdrop_path && (
        <img
          className="movie-image"
          src={currentMovie.backdrop_path}
          alt={currentMovie.title}
        />
      )}
      <h1 className="movie-title">{currentMovie.title}</h1>
      {currentMovie.tagline && (
        <p className="tagline">{currentMovie.tagline}</p>
      )}
      {currentMovie.genres && (
        <p className="genres">
          <strong>Genres:</strong> {currentMovie.genres.join(' - ')}
        </p>
      )}
      <p className="release-date">
        <strong>Release Date: </strong> {currentMovie.release_date}
      </p>
      <p className="average-rating">
        <strong>Average Rating: </strong>
        {Math.floor(currentMovie.average_rating)} out of 10
      </p>
      <p className="overview-title">
        <strong>Overview</strong>
      </p>
      <p className="overview">
        <br />
        <br />
        {currentMovie.overview}
      </p>
      {currentMovie.budget > 0 && (
        <p className="budget">
          <strong>Budget:</strong> ${currentMovie.budget.toLocaleString()}
        </p>
      )}
      {currentMovie.revenue > 0 && (
        <p className="revenue">
          <strong>Revenue: </strong>${currentMovie.revenue.toLocaleString()}
        </p>
      )}
      <p className="runtime">
        <strong>Runtime: </strong> {currentMovie.runtime} Mins
      </p>
      {/* <Link to={`/`} className="back-btn">
        Go Back
      </Link> */}
    </section>
  );
};

export default MovieDetails;
