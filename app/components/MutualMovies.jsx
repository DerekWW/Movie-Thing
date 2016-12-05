/* eslint-disable max-len */

import { GridList, GridTile } from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import MutualMoviesDialog from './MutualMoviesDialog';
import React from 'react';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
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
    padding: '10px'
  },
  titleStyle: {
    color: 'rgb(0, 188, 212)',
  },
};

const MutualMovies = React.createClass({
  render() {
    return (
      <div style={styles.root}>
        <GridList cellHeight={342} cols={2.2} style={styles.gridList} >
          {this.props.mutualMoviesArray.map((tile) => (
            <GridTile
              actionIcon={<IconButton>
                <StarBorder color="rgb(0, 188, 212)" /></IconButton>}
              key={tile.img}
              style={styles.titleStyle}
              title={tile.title}
              titleBackground="linear-gradient(to top, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)"
            >
              <MutualMoviesDialog
                overview={tile.overview}
                rating={tile.rating}
                src={tile.img}
                title={tile.title}
              />
            </GridTile>
          ))}
        </GridList>
      </div>
    );
  }
});

export default MutualMovies;
