import React from 'react';

const ToDoForm = props => {
    console.log("props in ToDoForm");
    return (
        <div>
            <input onChange={props.handleEventChange} type="text" placeholder="Add to do"></input>
            <button onClick={props.handleSubmit}>Submit</button> 
            <button onClick={props.handleClear}>Clear</button>
        </div>
    );
}

export default ToDoForm;