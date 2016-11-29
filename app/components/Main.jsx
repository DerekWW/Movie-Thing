import React from 'react';
import Home from './Home';
import Friends from './Friends'
import { Match, Miss } from 'react-router';

const Main = React.createClass({
  render(){
    return (
      <div>
        <h3></h3>
        <Match pattern="/" exactly component={Home} />
        <Match pattern="/friends" component={Friends} />
      </div>
    );
  }
});

export default Main;
