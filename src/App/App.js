import React, { Component } from 'react';
import './App.css';
import Movies from '../Movies/Movies.js';
import MovieDetails from '../MovieDetails/MovieDetails';
import Nav from '../Nav/Nav.js';
import Error from '../Error/Error';
import { getMovies } from '../apiCalls';
import { Route, Switch } from 'react-router-dom';

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      singleMovie: {},
      isSingleMovie: false,
      error: '',
    };
  }

  componentDidMount() {
    getMovies()
      .then((data) =>
        this.setState({ movies: [...this.state.movies, ...data.movies] })
      )
      .catch((error) => this.setState({ error: error.message }));
  }

  render() {
    {
      this.state.error && <Error message={this.state.error} />;
    }

    {
      !this.state.movies && !this.state.error && (
        <div className="loading-movie">
          <h1>We are retrieving your movie...</h1>
        </div>
      );
    }

    return (
      <div className="app">
        <Nav />
        <Switch>
          <Route
            exact
            path="/"
            component={() => <Movies movies={this.state.movies} />}
          />
          <Route
            exact
            path="/movies/:movie_id"
            component={({ match }) => {
              const { params } = match;
              return <MovieDetails id={parseInt(params.movie_id)} />;
            }}
          />
          <Route component={() => <Error message={this.state.errors} />} />
        </Switch>
      </div>
    );
  }
}

export default App;
