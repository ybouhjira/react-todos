import React, { Component } from 'react';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import Checkbox from 'material-ui/Checkbox';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Divider from 'material-ui/Divider';



export default class ListExampleSimple extends Component {
  constructor() {
    super();
    this.data = [
      {done: false, text: 'Learn React'},
      {done: false, text: 'Eat pizza'},
      {done: false, text: 'Sleep'},
    ]
  }
  getItems() {
    return this.data.map(item => {
      return (
        <ListItem button> 
          <Checkbox value={item.done}/>
          <ListItemText primary={item.text} />
        </ListItem>
      )
    });
  }

  render() {
    return (
    <div>
      <AppBar position="static" color="default">
        <Toolbar>
          <Typography type="title" color="inherit">
            Todos
          </Typography>
        </Toolbar>
      </AppBar>
      <List>{this.getItems()}</List> 
    </div>
    )
  }
}