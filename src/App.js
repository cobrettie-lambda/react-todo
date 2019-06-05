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
      }
    ],

  }
}

  render() {
    return (
      <div>
        <ToDoList todos={this.state.todos} />
        <ToDoForm />
      </div>
    );
  }
}

export default App;
