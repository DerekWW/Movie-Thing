/* eslint-disable max-len */

import { GridList, GridTile } from 'material-ui/GridList';
import FriendMovieDialog from './FriendMovieDialog';
import IconButton from 'material-ui/IconButton';
import React from 'react';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import grey200 from 'material-ui/styles/colors';

const styles = {
  pageStyle: {
    backgroundColor: grey200,
    fontFamily: 'Merriweather'
  },
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around'
  },
  gridList: {
    display: 'flex',
    flexWrap: 'nowrap',
    overflowX: 'auto',
    padding: '10px'
  },
  titleStyle: {
    color: 'rgba(239, 83, 80, 1)'
  }
};

const FriendMovies = React.createClass({
  render() {
    return (
      <div style={styles.root}>
        <GridList cellHeight={342} cols={2.2} style={styles.gridList}>
          {this.props.friendsMoviesArray.map((tile, index) => (
            <GridTile
              actionIcon={<IconButton>
                <StarBorder color="rgb(0, 188, 212)" />
              </IconButton>}
              key={index}
              style={styles.titleStyle}
              title={tile.movie_title}
              titleBackground="linear-gradient(to top, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)"
            >
              <FriendMovieDialog
                overview={tile.movie_overview}
                rating={tile.movie_rating}
                src={tile.movie_poster}
                title={tile.movie_title}
              />
            </GridTile>
          ))}
        </GridList>
      </div>
    );
  }
});

export default FriendMovies;
