import React from 'react';
import MovieDialog from './MovieDialog';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import {GridList, GridTile} from 'material-ui/GridList';



const styles = {
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

const tilesData = [
  {
    img: 'http://static-api.guidebox.com/111615/thumbnails_movies_medium/136325-1649814174-8589512435-396055780-medium-240x342-alt-.jpg',
    title: 'Colonia',
    author: 'jill111',
  },
  {
    img: "http://static-api.guidebox.com/111615/thumbnails_movies_medium/135388-2435160466-7220418323-4059842476-medium-240x342.jpg",
    title: 'Triple 9',
    author: 'pashminu',
  },
  {
    img: "http://static-api.guidebox.com/111615/thumbnails_movies_medium/135890-4305053689-7652936191-4603021820-medium-240x342.jpg",
    title: 'Midnight Special',
    author: 'Danson67',
  },
  {
    img: "http://static-api.guidebox.com/thumbnails_movies_medium/75064-6419312507-6938336328-3250074834-medium-240x342.jpg",
    title: 'Finding Nemo',
    author: 'fancycrave1',
  },
  {
    img: "http://static-api.guidebox.com/060515/thumbnails_movies_medium/130768-3299135799-9610949344-3195947735-medium-240x342-alt-.jpg",
    title: 'Everest',
    author: 'Hans',
  },
  {
    img: "http://static-api.guidebox.com/060515/thumbnails_movies_medium/119434-6253606346-1172328783-2583201230-medium-240x342-alt-.jpg",
    title: 'Jurrasic World',
    author: 'fancycravel',
  },
  {
    img: "http://static-api.guidebox.com/120214/thumbnails_movies_medium/21488-4148427863-9878102662-3174143601-medium-240x342-alt-.jpg",
    title: 'The Dark Night',
    author: 'jill111',
  },
  {
    img: "http://static-api.guidebox.com/111615/thumbnails_movies_medium/134422-151683060-177236004-8937469679-medium-240x342-alt-.jpg",
    title: 'Dirty Grandpa',
    author: 'BkrmadtyaKarki',
  },
  {
    img: "http://static-api.guidebox.com/060515/thumbnails_movies_medium/117666-3727384186-3819910232-6671525240-medium-240x342-alt-.jpg",
    title: 'Spy',
    author: 'BkrmadtyaKarki',
  },
  {
    img: "http://static-api.guidebox.com/thumbnails_movies_medium/35899-1790661379-2837163895-8028762201-medium-240x342.jpg",
    title: 'Back to the Future',
    author: 'BkrmadtyaKarki',
  },
];

const logButtonWorks = () => {
  console.log('the button works!')
}


const UserMovies = () => {

  return (
      <div style={styles.root}>
        <GridList style={styles.gridList} cols={2.2} cellHeight='300'>
          {tilesData.map((tile) => (
            <GridTile
              key={tile.img}
              title={tile.title}
              titleStyle={styles.titleStyle}
              // actionIcon={Dialog}
              titleBackground="linear-gradient(to top, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)"
              onClick={logButtonWorks}
            >
              <MovieDialog
                src={tile.img}
              />
            </GridTile>
          ))}
        </GridList>
      </div>
)};

export default UserMovies;
