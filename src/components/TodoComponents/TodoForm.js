import React from 'react';

 function TodoForm(props){
    return(
        <form>
        <input value = {props.inputTodo} onChange = {props.handleInput}/>
        <button onClick = {props.addTodo}> Add todo</button>
        </form>
    );
}

export default TodoForm;