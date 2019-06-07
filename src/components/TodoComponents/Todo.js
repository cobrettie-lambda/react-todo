import React from 'react';

 const Todo = props => {
    //  console.log("props in Todo", props);
    return (
        <div 
            style={props.todo.completed ? {textDecoration: 'line-through' } : null}
            onClick={() => 
                props.handleToggleComplete(props.todo.id)
            }
        >
           {props.todo.task}
        </div>
    );
};

 export default Todo; 


// Below goes inside of const Todo
//   return (
//     <div key={props.todo.completed}
//     onClick={() => props.toggleCompleted(props.todo.id)}
// style={props.todo.completed ? { textDecoration: 'line-through' } : null}
//     {props.todo.task}
//     </div>
// );