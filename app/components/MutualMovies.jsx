import React from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import MutualMoviesDialog from './MutualMoviesDialog';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';


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
    padding: '10px'
  },
  titleStyle: {
    color: 'rgb(0, 188, 212)',
  },
};

const tilesData = [
  {
    img: "http://static-api.guidebox.com/111615/thumbnails_movies_medium/134699-5645093233-3003997687-3038975559-medium-240x342-alt-.jpg",
    title: 'The Lobster',
    author: 'jill111',
  },
  {
    img: "http://static-api.guidebox.com/120214/thumbnails_movies_medium/90453-8722418346-8380928873-2572392831-medium-240x342.jpg",
    title: 'Divergent',
    author: 'pashminu',
  },
  {
    img: "http://static-api.guidebox.com/thumbnails_movies_medium/15460-1167945522-2929909541-8695143005-medium-240x342.jpg",
    title: 'Star Trek',
    author: 'Danson67',
  },
  {
    img: "http://static-api.guidebox.com/060515/thumbnails_movies_medium/129544-842460520-1909849774-5408064299-medium-240x342-alt-.jpg",
    title: 'The Man from U.N.C.L.E.',
    author: 'fancycrave1',
  },
  {
    img: "http://static-api.guidebox.com/111615/thumbnails_movies_medium/135386-6244556075-9267779355-7565353471-medium-240x342-alt-.jpg",
    title: 'Eddie the Eagle',
    author: 'Hans',
  },
  {
    img: "http://static-api.guidebox.com/022615/thumbnails_movies_medium/113692-9069906147-8994727600-9852219526-medium-240x342-alt-.jpg",
    title: "Kingsman: The Secret Service",
    author: 'fancycravel',
  },
  {
    img: "http://static-api.guidebox.com/060515/thumbnails_movies_medium/117669-9549685856-8605314768-7469213241-medium-240x342-alt-.jpg",
    title: 'San Andreas',
    author: 'jill111',
  },
  {
    img: "http://static-api.guidebox.com/022615/thumbnails_movies_medium/117053-8512426065-556412340-3019736442-medium-240x342-alt-.jpg",
    title: "Avengers: Age of Ultron",
    author: 'BkrmadtyaKarki',
  },
  {
    img:  "http://static-api.guidebox.com/111615/thumbnails_movies_medium/134971-2023170600-9106984962-3788183821-medium-240x342.jpg",
    title: "Zoolander No.2",
    author: 'BkrmadtyaKarki',
  },
  {
    img: "http://static-api.guidebox.com/thumbnails_movies_medium/32662-9669908448-8926530801-1720935707-medium-240x342.jpg",
    title: "Inglourious Basterds",
    author: 'BkrmadtyaKarki',
  },
];

const MutualMovies = () => (
  <div style={styles.root}>
    <GridList style={styles.gridList} cols={2.2} cellHeight='342'>
      {tilesData.map((tile) => (
        <GridTile
          key={tile.img}
          title={tile.title}
          actionIcon={<IconButton><StarBorder color="rgb(0, 188, 212)" /></IconButton>}
          titleStyle={styles.titleStyle}
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
);

export default MutualMovies;
