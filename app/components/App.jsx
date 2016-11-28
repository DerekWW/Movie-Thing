import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

const App = React.createClass({
  render() {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
        <div>
          <Header />
          <Main />
          <Footer />
        </div>
      </MuiThemeProvider>
    )
  }
});

export default App;
