import React from 'react';
import Filter from './Filter';
import MovieSearchTiles from './MovieSearchTiles'

const MovieSearch = React.createClass ({

  getInitialState() {
    return {
      movies: [],
      searchText: '',
    }
  },

  movieSearch() {
    const movieText = { movieSearch: this.state.searchText };
    console.log(movieText);
    axios.post('/api/movie_search/title', movieText)
      .then((res) => {
        this.setState({ movies: res.data, searchText: '' })
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      })
  },

  movieIdSearch() {

  },

  updateSearch(text) {
    this.setState({ searchText: text })
    console.log(this.state.searchText);
  },

  render () {
    return (
      <div>
        <div>
          <Filter
            { ...this.state }
            movieSearch={this.movieSearch}
            updateSearch={this.updateSearch}
          />
        </div>
        <div>
          <MovieSearchTiles
            moviesArray={this.state.movies}
            movieIdSearch={this.movieIdSearch}
          />
        </div>

     </div>
    )
  }
});

export default MovieSearch;
