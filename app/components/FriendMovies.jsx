import React from 'react';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';



import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';

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
    img: "http://static-api.guidebox.com/111615/thumbnails_movies/-alt--134699-2925730911-9082306111-2807167494-large-400x570-alt-.jpg",
    title: 'The Lobster',
    author: 'jill111',
  },
  {
    img: "http://static-api.guidebox.com/120214/thumbnails_movies/-90453-7049092292-8671725690-3540864592-large-400x570.jpg",
    title: 'Divergent',
    author: 'pashminu',
  },
  {
    img: 'http://static-api.guidebox.com/thumbnails_movies/15460-8710711235-6375054521-2671168456-large-400x570.jpg',
    title: 'Star Trek',
    author: 'Danson67',
  },
  {
    img: "http://static-api.guidebox.com/060515/thumbnails_movies/-alt--129544-2984774541-4013184891-1719303863-large-400x570-alt-.jpg",
    title: 'The Man from U.N.C.L.E.',
    author: 'fancycrave1',
  },
  {
    img: "http://static-api.guidebox.com/111615/thumbnails_movies/-alt--135386-4528731071-4263245249-9727598782-large-400x570-alt-.jpg",
    title: 'Eddie the Eagle',
    author: 'Hans',
  },
  {
    img: "http://static-api.guidebox.com/022615/thumbnails_movies/-alt--113692-7643839414-5042236778-5719963405-large-400x570-alt-.jpg",
    title: "Kingsman: The Secret Service",
    author: 'fancycravel',
  },
  {
    img: "http://static-api.guidebox.com/060515/thumbnails_movies/-alt--117669-2631604853-4055046812-712671169-large-400x570-alt-.jpg",
    title: 'San Andreas',
    author: 'jill111',
  },
  {
    img: "http://static-api.guidebox.com/022615/thumbnails_movies/-alt--117053-7581417202-6588549130-390886469-large-400x570-alt-.jpg",
    title: "Avengers: Age of Ultron",
    author: 'BkrmadtyaKarki',
  },
  {
    img:  "http://static-api.guidebox.com/111615/thumbnails_movies/134971-4897613106-7446062364-6154224863-large-400x570.jpg",
    title: "Zoolander No.2",
    author: 'BkrmadtyaKarki',
  },
  {
    img: "http://static-api.guidebox.com/thumbnails_movies/32662-423843926-3491966571-6241333475-large-400x570.jpg",
    title: "Inglourious Basterds",
    author: 'BkrmadtyaKarki',
  },
];

const FriendMovies = () => (
  <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>

  <div style={styles.root}>
    <GridList style={styles.gridList} cols={2.2} cellHeight='300'>
      {tilesData.map((tile) => (
        <GridTile
          key={tile.img}
          title={tile.title}
          actionIcon={<IconButton><StarBorder color="rgb(0, 188, 212)" /></IconButton>}
          titleStyle={styles.titleStyle}
          titleBackground="linear-gradient(to top, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)"
        >
          <img src={tile.img} />
        </GridTile>
      ))}
    </GridList>
  </div>
  </MuiThemeProvider>
);

export default FriendMovies;
