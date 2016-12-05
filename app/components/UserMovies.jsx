/* eslint-disable comma-dangle */

import { GridList, GridTile } from 'material-ui/GridList';
import MovieDialog from './MovieDialog';
import React from 'react';
import { grey200 } from 'material-ui/styles/colors';

const styles = {
  pageStyle: {
    backgroundColor: grey200,
    fontFamily: 'Merriweather'
  },
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    display: 'flex',
    flexWrap: 'nowrap',
    overflowX: 'auto',
  },
  titleStyle: {
    color: 'rgba(239, 83, 80, 1)',
  },
};

const UserMovies = React.createClass({
  render() {
    return (
      <div style={styles.root}>
        <GridList style={styles.gridList} cols={2.2} cellHeight={342}>
          {this.props.userMoviesArray.map((tile, index) => (
            <GridTile
              key={index}
              style={styles.titleStyle}
              titleBackground="linear-gradient(to top, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)"
            >
              <MovieDialog
                src={tile.movie_poster}
                title={tile.movie_title}
                rating={tile.movie_rating}
                overview={tile.movie_overview}
                id={tile.movie_id}
                updateMovies={this.props.updateMovies}
              />
            </GridTile>
          ))}
        </GridList>
      </div>
    )
  }
});

export default UserMovies;
