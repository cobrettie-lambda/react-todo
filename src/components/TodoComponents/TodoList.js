// your components will all go in this `component` directory.

import React from 'react';
import '../TodoComponents/Todo.css';
import Todo from '../TodoComponents/Todo'

const ToDoList = props => {
    // console.log("props in ToDoList", props);
    return (
        <div>
            {
                props.todos.map( todo => (
                    <Todo 
                        handleToggleComplete={props.handleToggleComplete}
                        todo={todo}
                    />
                ))
            }
        </div>
    );
};

export default ToDoList;