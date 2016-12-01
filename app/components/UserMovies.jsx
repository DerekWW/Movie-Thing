import React from 'react';
import MovieDialog from './MovieDialog';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import {GridList, GridTile} from 'material-ui/GridList';
import { black, grey100, grey200, grey800, grey900, red400 } from 'material-ui/styles/colors';

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
    color: 'rgb(0, 188, 212)',
  },
};



const UserMovies = React.createClass({
  render() {
    console.log(this.props.userMoviesArray);
    return (
        <div style={styles.root}>
          <GridList style={styles.gridList} cols={2.2} cellHeight={342}>
            {this.props.userMoviesArray.map((tile, index) => (
              <GridTile
                key={index}
                // title={tile.title}
                style={styles.titleStyle}
                titleBackground="linear-gradient(to top, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)"
              >
                <MovieDialog
                  src={tile.movie_poster}
                  title={tile.movie_title}
                  rating={tile.movie_rating}
                  overview={tile.movie_overview}
                />
              </GridTile>
            ))}
          </GridList>
        </div>
      )
    }
  });

export default UserMovies;
