import React, { Component } from 'react';
import List, { ListItem, ListItemText } from 'material-ui/List';
import Checkbox from 'material-ui/Checkbox';
import Close from 'material-ui-icons/Close';
import Add from 'material-ui-icons/Add';
import IconButton from 'material-ui/IconButton';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import Card, { CardContent } from 'material-ui/Card';

export default class Todos extends Component {
  constructor() {
    super();
    this.state = {
      todos: [
        {id: 0, done: false, text: 'Learn React'},
        {id: 1, done: false, text: 'Eat pizza'},
        {id: 2, done: true, text: 'Buy milk'}
      ]
    }

    this.clearAll = this.clearAll.bind(this);
  }

  clearAll() {
    const todos = this.state.todos.filter(t => !t.done);
    this.setState({todos});
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
    if (event.key === 'Enter' && this.text.value.length !== 0) {
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
      <Card style={{margin: 20}}>
        <CardContent>
          <List>
            <ListItem> 
              <Add />
              <TextField 
                onKeyPress={this.onAddKeyPress.bind(this)}
                inputRef={(input) => {this.text = input}} 
                fullWidth 
                id="text" 
                margin="normal" />
            </ListItem>
            {this.state.todos.map(this.getItem.bind(this))}
          </List>
          <Button color="accent" onClick={this.clearAll}> <Close /> &nbsp;Clear</Button>
        </CardContent>
      </Card>
    )
  }
}