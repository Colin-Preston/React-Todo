import React from 'react';

 function todoForm(props){
    return(
        <form>
        <input value = {props.inputTodo} onChange = {props.handleInput}/>
        <button onClick = {props.addTodo}> Add todo</button>
        </form>
    );
}

export default todoForm;