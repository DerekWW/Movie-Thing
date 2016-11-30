import React from 'react';
import Home from './Home';
import Friends from './Friends'
import { Match, Miss } from 'react-router';
import MenuItem from 'material-ui/MenuItem';


const Main = React.createClass({
  getInitialState() {
    return {
      friendsArray: [{
          text: 'EdgarM',
          id: 1,
          value: (
            <MenuItem
              primaryText="Edgar"
              secondaryText="Martinez"
            />
          ),
        },
        {
          text: 'JayB',
          id: 2,
          value: (
            <MenuItem
              primaryText="Jay Buhner"
            />
          ),
        },
        {
          text: 'KenG',
          id: 3,
          value: (
            <MenuItem
              primaryText="Ken Griffey, Jr."
            />
          ),
        },
        {
          text: 'DanW',
          id: 4,
          value: (
            <MenuItem
              primaryText="Dan Wilson"
            />
          ),
        },
        {
          text: 'LouP',
          id: 5,
          value: (
            <MenuItem
              primaryText="Lou Pinella"
            />
          ),
        },
      ]};
    },

  render(){
    return (
      <div>
        <h3></h3>
        <Match
          pattern="/" exactly
          component={Home}
        />
        <Match pattern="/friends" render={
          ()=> <Friends
            { ...this.state }
          component={Friends}
          friendsArray={this.state.friendsArray}
          />
        }/>
      </div>
    );
  }
});

export default Main;
