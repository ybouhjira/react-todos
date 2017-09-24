import React, { Component } from 'react';
import Todos from './components/Todos'
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';

class App extends Component {

  render() {
    return (
      <div>
        <AppBar position="static">
          <Toolbar>
            <Typography type="title" color="inherit">
              Todos
            </Typography>
          </Toolbar>
        </AppBar>
        <Todos />
      </div>
    );
  }
}

export default App;
