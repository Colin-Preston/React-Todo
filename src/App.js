import React from 'react';
import TodoList from './components/TodoComponents/TodoList'
import TodoForm from './components/TodoComponents/TodoForm'
import './Todo.css';
class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
 
constructor(){
  super(); //access lifecycle methods
  this.state = {
    todos: [],
    inputTodo: ''
  };
}

addTodo = event => {
 
  event.preventDefault();
  console.log('Input text ', this.state.inputTodo)
  if(this.state.inputTodo){
  
    this.setState({
      todos:[...this.state.todos, this.state.inputTodo],
      inputTodo:''
    });
  }
};

handleInput = event => {
  // console.log(event.target.value)
  this.setState({
    inputTodo: event.target.value
  })
};

  render() {//controlled component
    // console.log(this.state)
    return (
      <div>
        <TodoList todos = {this.state.todos }/>
        <TodoForm
        addTodo = {this.addTodo}
        inputTodo = {this.state.inputTodo}
        handleInput = {this.handleInput}
        />
      </div>
    );
  }
}
export default App;