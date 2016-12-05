/* eslint-disable max-len */

import { GridList, GridTile } from 'material-ui/GridList';
import MovieSearchDialog from './MovieSearchDialog';
import React from 'react';

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    width: '100%',
    height: '100%',
    overflowY: 'auto',
  },
};

const MovieSearchTiles = React.createClass({

  render() {
    return (

      <div style={styles.root}>
        <GridList
          cellHeight={342}
          cols={4}
          style={styles.gridList}
        >
          {this.props.moviesArray.map((tile, index) => (
            <GridTile
              key={index}
              title={tile.title}
              titleBackground="linear-gradient(to top, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)"
            >
              <MovieSearchDialog
                embedLink={tile.embed_link}
                id={tile.id}
                overview={tile.overview}
                rating={tile.rating}
                snackBar={this.props.snackBar}
                src={tile.poster_240x342}
                title={tile.title}
                updateMovies={this.props.updateMovies}
              />
            </GridTile>
          ))}
        </GridList>
      </div>
    );
  }
});

export default MovieSearchTiles;
