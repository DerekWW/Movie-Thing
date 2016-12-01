import React from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import MutualMoviesDialog from './MutualMoviesDialog';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
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
    padding: '10px'
  },
  titleStyle: {
    color: 'rgb(0, 188, 212)',
  },
};

const MutualMovies = React.createClass ({
  render() {
    console.log(this.props.mutualMoviesArray);
    return (
      <div style={styles.root}>
        <GridList style={styles.gridList} cols={2.2} cellHeight={342}>
          {this.props.mutualMoviesArray.map((tile) => (
            <GridTile
              key={tile.img}
              title={tile.title}
              actionIcon={<IconButton><StarBorder color="rgb(0, 188, 212)" /></IconButton>}
              style={styles.titleStyle}
              titleBackground="linear-gradient(to top, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)"
            >
              <MutualMoviesDialog
                src={tile.img}
                title={tile.title}
                rating={tile.rating}
                overview={tile.overview}
              />
            </GridTile>
          ))}
        </GridList>
    </div>
  )
  }
});

export default MutualMovies;
