import React from 'react';
import Filter from './Filter';
import MovieSearchTiles from './MovieSearchTiles'
import { black, grey100, grey200, grey800, grey900, red400 } from 'material-ui/styles/colors';

const styles = {
  pageStyle: {
    backgroundColor: grey200,
    fontFamily: 'Merriweather',
    height: '100%',
  },
}

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
        <div className="container" style={styles.pageStyle}>
          <div className="row">
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
     </div>
    )
  }
});

export default MovieSearch;
