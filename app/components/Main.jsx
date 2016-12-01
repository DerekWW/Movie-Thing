import React from 'react';
import Home from './Home';
import Friends from './Friends';
import MovieSearch from './MovieSearch';
import LogIn from './LogIn';
import SignUp from './SignUp';
import { Match, Miss } from 'react-router';
import MenuItem from 'material-ui/MenuItem';

import Landing from './Landing';


const Main = React.createClass({
  getInitialState() {
    return {
      friends: [],
      userMoviesArray: [],
      friendsMoviesArray: [],
      userMovies: [],
      mutualMoviesArray: [
        {
          img: "http://static-api.guidebox.com/111615/thumbnails_movies_medium/134699-5645093233-3003997687-3038975559-medium-240x342-alt-.jpg",
          title: 'The Lobster',
        },
        {
          img: "http://static-api.guidebox.com/120214/thumbnails_movies_medium/90453-8722418346-8380928873-2572392831-medium-240x342.jpg",
          title: 'Divergent',
        },
        {
          img: "http://static-api.guidebox.com/thumbnails_movies_medium/15460-1167945522-2929909541-8695143005-medium-240x342.jpg",
          title: 'Star Trek',
        },
        {
          img: "http://static-api.guidebox.com/060515/thumbnails_movies_medium/129544-842460520-1909849774-5408064299-medium-240x342-alt-.jpg",
          title: 'The Man from U.N.C.L.E.',
        },
        {
          img: "http://static-api.guidebox.com/111615/thumbnails_movies_medium/135386-6244556075-9267779355-7565353471-medium-240x342-alt-.jpg",
          title: 'Eddie the Eagle',
        },
        {
          img: "http://static-api.guidebox.com/022615/thumbnails_movies_medium/113692-9069906147-8994727600-9852219526-medium-240x342-alt-.jpg",
          title: "Kingsman: The Secret Service",
        },
        {
          img: "http://static-api.guidebox.com/060515/thumbnails_movies_medium/117669-9549685856-8605314768-7469213241-medium-240x342-alt-.jpg",
          title: 'San Andreas',
        },
        {
          img: "http://static-api.guidebox.com/022615/thumbnails_movies_medium/117053-8512426065-556412340-3019736442-medium-240x342-alt-.jpg",
          title: "Avengers: Age of Ultron",
        },
        {
          img:  "http://static-api.guidebox.com/111615/thumbnails_movies_medium/134971-2023170600-9106984962-3788183821-medium-240x342.jpg",
          title: "Zoolander No.2",
        },
        {
          img: "http://static-api.guidebox.com/thumbnails_movies_medium/32662-9669908448-8926530801-1720935707-medium-240x342.jpg",
          title: "Inglourious Basterds",
        },
      ],
    }
  },


  componentDidMount() {
    axios.get('/api/user_movies/user')
      .then((res) => {
        console.log(res);
        this.setState({ userMoviesArray: res.data });
      })
      .catch((err) => {
        console.error(err);
      });

      axios.get('/api/user_movies/friends')
        .then((res) => {
          console.log(res);
          this.setState({ friendsMoviesArray: res.data });
        })
        .catch((err) => {
          console.error(err);
        });
  },



  handleAddToFriendsList(person) {
    const subFriendMatch = this.state.friends.filter((friend) => {
      if(person.id === friend.id) {
        return true;
      } else {
        return false;
      }
    })

    if(subFriendMatch.length === 1) {
      // the friend is in the list
      return;
    }

    const newFriendsArray = this.state.friends.concat(person);

    this.setState({ friends: newFriendsArray });

  },

  handleAddToMoviesList(movie) {
    const subMovieMatch = this.state.movies.filter((userMovie) => {
      if(movie.id === userMovie.id) {
        return true;
      } else {
        return false;
      }
    })

    if(subMovieMatch.length === 1) {
      //the movie is in the list
      return;
    }

    const newMoviesArray = this.state.movies.concat(movie);

    this.setState({ movies: newMoviesArray })
  },


  render(){
    return (
      <div>
        <h3></h3>
        <Match
          pattern="/" exactly render={
            () => <Home
              { ...this.state }
              component={Home}
              mutualMoviesArray={this.state.mutualMoviesArray}
              userMoviesArray={this.state.userMoviesArray}
              friendsMoviesArray={this.state.friendsMoviesArray}
          />
        }/>
        <Match pattern="/friends" render={
          () => <Friends
            { ...this.state }
            component={Friends}
            usersArray={this.state.usersArray}
            friends={this.state.friends}
            handleAddToFriendsList={this.handleAddToFriendsList}
          />
        }/>
        <Match pattern="/moviesearch" render={
          () => <MovieSearch
            { ...this.state }
            component={MovieSearch}
          />
        }/>
        <Match
          pattern="/signup"
          component={SignUp}
        />
        <Match
          pattern="/login"
          component={LogIn}
        />
        <Match
          pattern="/landing"
          component={Landing}
        />
      </div>
    );
  }
});

export default Main;
