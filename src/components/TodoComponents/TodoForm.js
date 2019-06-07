import React from 'react';

const ToDoForm = props => {
    console.log("props in ToDoForm");
    return (
        <form>
            <input 
                onChange={props.handleTodoChange}
                type="text"
                placeholder="To do"
                name="todo"
                className="todoInput"
            />
            <button onClick={props.handleAddTodo}>Add to list</button>
            <button onClick={props.handleClearTodos}>Clear completed</button>
        </form>
    );
}

export default ToDoForm;