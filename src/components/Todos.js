import React, { Component } from 'react';
import List, { ListItem, ListItemText } from 'material-ui/List';
import Checkbox from 'material-ui/Checkbox';
import Close from 'material-ui-icons/Close';
import Add from 'material-ui-icons/Add';
import IconButton from 'material-ui/IconButton';
import TextField from 'material-ui/TextField';

export default class ListExampleSimple extends Component {
  constructor() {
    super();
    this.state = {
      todos: [
        {id: 0, done: false, text: 'Learn React'},
        {id: 1, done: false, text: 'Eat pizza'},
        {id: 2, done: true, text: 'Buy milk'}
      ]
    }
  }

  toggleDone(item) {
    item.done = !item.done;
    const {state:{todos}} = this;
    this.setState({todos});
  }

  getItem(item) {
    return (
      <ListItem button onClick={() => this.toggleDone(item)} key={item.id}>
        <Checkbox checked={item.done}/>
        <ListItemText primary={item.text} style={{textDecoration: item.done ? 'line-through' : ''}}/>
        <IconButton onClick={e => this.removeItem(e, item.id)}><Close /></IconButton>
      </ListItem>
    )
  }

  removeItem(e, id) {
    e.preventDefault();
    e.stopPropagation();
    const todos = this.state.todos.filter(t => t.id !== id);
    this.setState({todos});
  }

  onAddKeyPress(event) {
    if (event.key === 'Enter') {
      const todos = [...this.state.todos];
      const lastTodo = todos[todos.length - 1];
      const newTodo = {
        id: (lastTodo ? lastTodo.id : -1) + 1,
        text: this.text.value, 
        done: false
      };
      todos.push(newTodo);
      this.setState({todos});
      this.text.value = '';
    }
  }

  render() {
    return (
      <List>
        <ListItem> 
          <Add />
          <TextField fullWidth inputRef={(input) => {this.text = input}} id="text" margin="normal" onKeyPress={this.onAddKeyPress.bind(this)}/>
        </ListItem>
        {this.state.todos.map(this.getItem.bind(this))}
      </List> 
    )
  }
}