import React from 'react';

const ToDoForm = props => {
    console.log("props in ToDoForm");
    return (
        <form>
            <input 
                type="text"
                placeholder="To do"
                name="Todo"
                className="todoInput"
                onChange="text"
            />
            <button>Add to do item</button>
            <button>Clear completed</button>
        </form>
    );
}

export default ToDoForm;