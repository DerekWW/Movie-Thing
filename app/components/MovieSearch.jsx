/* eslint-disable no-console */

import { grey200, red400 } from 'material-ui/styles/colors';
import Filter from './Filter';
import MovieSearchTiles from './MovieSearchTiles';
import React from 'react';
import Snackbar from 'material-ui/Snackbar';
import axios from 'axios';

const styles = {
  pageStyle: {
    backgroundColor: grey200,
    fontFamily: 'Merriweather',
  },
};

const MovieSearch = React.createClass({

  getInitialState() {
    return {
      openSnack: false,
      movies: [],
      searchText: '',
    };
  },

  movieSearch() {
    const movieText = { movieSearch: this.state.searchText };

    axios.post('/api/movie_search/title', movieText)
      .then((res) => {
        this.setState({ movies: res.data, searchText: '' });
      })
      .catch((err) => {
        console.log(err);
      });
  },

  updateSearch(text) {
    this.setState({ searchText: text });
  },

  snackBar() {
    this.setState({ openSnack: true });
  },

  handleClose() {
    this.setState({ openSnack: false });
  },

  render() {
    return (
      <div>
        <div className="container" style={styles.pageStyle}>
          <div className="row">
            <Filter
              {...this.state}
              movieSearch={this.movieSearch}
              updateSearch={this.updateSearch}
            />
          </div>
          <div>
            <MovieSearchTiles
              movieIdSearch={this.movieIdSearch}
              moviesArray={this.state.movies}
              snackBar={this.snackBar}
              updateMovies={this.props.updateMovies}
            />
            <Snackbar
              autoHideDuration={2000}
              bodyStyle={{ backgroundColor: red400 }}
              message="Movie added to favorites"
              onRequestClose={this.handleClose}
              open={this.state.openSnack}
            />
          </div>
        </div>
      </div>
    );
  }
});

export default MovieSearch;
