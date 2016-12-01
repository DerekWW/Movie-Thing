import React from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import MovieSearchDialog from './MovieSearchDialog'

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    width: '70%',
    height: '100%',
    overflowY: 'auto',
  },
};

const MovieSearchTiles = React.createClass ({

  render() {
    return (

      <div style={styles.root}>
        <GridList
          cellHeight={342}
          style={styles.gridList}
          cols={5}
          >
            <Subheader>Search Results</Subheader>
            {this.props.moviesArray.map((tile, index) => (
              <GridTile
                key={index}
                title={tile.title}
                titleBackground="linear-gradient(to top, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)"

                >
                  <MovieSearchDialog
                    src={tile.poster_240x342}
                    title={tile.title}
                    rating={tile.rating}
                    overview={tile.overview}
                  />
                  {/* <img src={tile.poster_240x342} /> */}
                </GridTile>
              ))}
            </GridList>
          </div>
        );

      }
    })

    export default MovieSearchTiles;
