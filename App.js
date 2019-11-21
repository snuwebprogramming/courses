import React, { useState } from 'react';
import './App.css';
import TodoCreateForm from './Todo/TodoCreateForm';
import TodoListView from './Todo/TodoListView';


/*
todo = { subject: 'blabla', isDeleted=false, isDone=false }
*/
function App() {
  const [todoList, setTodoList] = useState([]);
  const sendSubject = (subject) => {
    console.log(subject);
    const todo = { subject };

    setTodoList([
      ...todoList,
      todo
    ]);
  }

  const onDeleteTodo = (index) => {
    console.log(index);
    setTodoList(todoList.filter((todo, i) => index !== i));
  }

  return (
    <div>
      <h1> TodoList </h1>
      <TodoCreateForm sendSubject={sendSubject} />
      <TodoListView todoList={todoList} onDeleteTodo={onDeleteTodo} a="a" b="c"/>
    </div> 
  )
}

export default App;
