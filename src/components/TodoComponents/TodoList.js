// your components will all go in this `component` directory.

import React from 'react';
import '../TodoComponents/Todo.css';
import Todo from '../TodoComponents/Todo'

const ToDoList = props => {
    return (
        <div>
            {
                props.todos.map( todo => (
                    <ToDo />
                ))
            }
        </div>
    );
};

export default ToDoList;