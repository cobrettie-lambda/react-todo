import React from 'react';
import ToDoForm from './components/TodoComponents/TodoForm';
import ToDoList from './components/TodoComponents/TodoList';


class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

constructor() {
  super();
  this.state = {
    todos: [
      {
        task: "Become a software engineer",
        id: Date.now(),
        completed: false
      },
      // create new Todo
      {
        task: "Master React",
        id: Date.now(),
        completed: false
      }
    ],
    // Adding state
    // todo = "";

  }
}

// adding item to todo list
addTodo = event => {
  event.preventDefault();
  const todos = this.state.todos.slice();
  todos.push({task: this.state.todo, completed: false, id: Date.now() });
  this.setState({ todos, todo: ''});
}

// changing todo items on list
changeTodo = event => {
  this.setState({
    [event.target.name]: event.target.value
  });
}

toggleCompleted = id => {
  // console.log("id", id);
  let todos = this.state.todos;
  const newTodos = todos.map(todo => {
    console.log("todo.id", todo.id);
    if (id === todo.id) {
      todo.completed = !todo.completed;
      return todo;
    } else {
      return todo;
    }
  });

  this.setState({
    todos: newTodos
  });
}

  render() {
    return (
      <div>
        <ToDoList 
          todos={this.state.todos} 
          toggleCompleted={props.toggleCompleted}
          />
        <ToDoForm />
      </div>
    );
  }
}

export default App;




// addTodo = event => {
//   event.preventDefault();
//   let todos = this.state.todos;
//   todos.push(this.state.todo);
//   console.log("todos", todos);
//   this.setState({
//     todos: todos,
//     todo: {...this.state.todo,
//     task: "" } 
//   });
// }


// changeTodo = event => {
//   console.log("this.state.todo"); 
//   this.setState({
//     todo: {...this.state.todo,
//       task: event.target.value }
//   });
// }

// toggleCompleted = id => {
//   console.log("id", id);
//   let todos = this.state.todos;
//   const newTodos = todos.map(todo => {
//     console.log("todo.id", todo.id);
//     if (id === todo.id) {
//       todo.completed = !todo.completed;
//       return todo;
//     } else {
//       return todo;
//     }
//   });

//   this.setState({
//     todos: newTodos
//   });
// }
