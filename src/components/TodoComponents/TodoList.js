import React from 'react';
import Todo from './Todo';

// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js




function TodoList(props) {
  
    return <ul>{props.todos.map((todo, index) => <Todo key = {index} todo={todo} />)}</ul>;
  }

  export default TodoList;
  