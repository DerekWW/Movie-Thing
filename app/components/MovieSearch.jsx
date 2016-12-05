/* eslint-disable comma-dangle */

import React from 'react';
import Filter from './Filter';
import MovieSearchTiles from './MovieSearchTiles';
import Snackbar from 'material-ui/Snackbar';
import { black, grey100, grey200, grey800, grey900, red400 } from 'material-ui/styles/colors';

const styles = {
  pageStyle: {
    backgroundColor: grey200,
    fontFamily: 'Merriweather',
    // background: URL("http://www.wpclipart.com/page_frames/movie/film_strip_page.png"),
  },
}

const MovieSearch = React.createClass ({

  getInitialState() {
    return {
      openSnack: false,
      movies: [],
      searchText: '',
    }
  },

  movieSearch() {
    const movieText = { movieSearch: this.state.searchText };
    axios.post('/api/movie_search/title', movieText)
      .then((res) => {
        this.setState({ movies: res.data, searchText: '' })
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      })
  },

  updateSearch(text) {
    this.setState({ searchText: text })
  },

  snackBar() {
    this.setState({ openSnack: true })
  },

  handleClose() {
    this.setState({ openSnack: false })
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
              updateMovies={this.props.updateMovies}
              snackBar={this.snackBar}
            />
            <Snackbar
               open={this.state.openSnack}
               message="Movie added to favorites"
               autoHideDuration={2000}
               onRequestClose={this.handleClose}
               bodyStyle={{backgroundColor: red400}}
             />
          </div>
       </div>
     </div>
    )
  }
});

export default MovieSearch;
