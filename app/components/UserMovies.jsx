import React from 'react';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
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
    img: 'http://static-api.guidebox.com/thumbnails_movies/50363-3346498669-114219273-4257163885-large-400x570.jpg',
    title: 'Little Indi',
    author: 'jill111',
  },
  {
    img: 'http://static-api.guidebox.com/thumbnails_movies/50362-3684624573-2298494666-3146139020-large-400x570.jpg',
    title: 'Stranger Than Fiction',
    author: 'pashminu',
  },
  {
    img: "http://static-api.guidebox.com/111615/thumbnails_movies/135890-4718350307-6881352803-6921016546-large-400x570.jpg",
    title: 'Midnight Special',
    author: 'Danson67',
  },
  {
    img: "http://static-api.guidebox.com/thumbnails_movies/75064-3963258648-2531716288-3030865570-large-400x570.jpg",
    title: 'Finding Nemo',
    author: 'fancycrave1',
  },
  {
    img: "http://static-api.guidebox.com/060515/thumbnails_movies/-alt--130768-7358079925-1920835353-2671913118-large-400x570-alt-.jpg",
    title: 'Everest',
    author: 'Hans',
  },
  {
    img: "http://static-api.guidebox.com/060515/thumbnails_movies/-alt--119434-9188154144-6296927547-6430412726-large-400x570-alt-.jpg",
    title: 'Jurrasic World',
    author: 'fancycravel',
  },
  {
    img: "http://static-api.guidebox.com/120214/thumbnails_movies/-alt--21488-4300559312-858820538-4374753353-large-400x570-alt-.jpg",
    title: 'The Dark Night',
    author: 'jill111',
  },
  {
    img: "http://static-api.guidebox.com/111615/thumbnails_movies/-alt--134422-6996994163-7736085253-8175344849-large-400x570-alt-.jpg",
    title: 'Dirty Grandpa',
    author: 'BkrmadtyaKarki',
  },
  {
    img: "http://static-api.guidebox.com/060515/thumbnails_movies/-alt--117666-6035144837-9766240972-850906773-large-400x570-alt-.jpg",
    title: 'Spy',
    author: 'BkrmadtyaKarki',
  },
  {
    img: "http://static-api.guidebox.com/thumbnails_movies/35899-7025719867-6648234203-7915630294-large-400x570.jpg",
    title: 'Back to the Future',
    author: 'BkrmadtyaKarki',
  },
];


const UserMovies = () => (
  <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>

  <div style={styles.root}>
    <GridList style={styles.gridList} cols={2.2} cellHeight='300'>
      {tilesData.map((tile) => (
        <GridTile
          key={tile.img}
          title={tile.title}
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

export default UserMovies;
