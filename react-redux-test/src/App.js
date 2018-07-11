import React from 'react';
import Footer from './view/todolist/components/Footer';
import AddTodo from './view/todolist/containers/AddTodo';
import VisibleTodoList from './view/todolist/containers/VisibleTodoList';
import MyTest from './view/mytest/MyTest';

const App = () => (
  <div>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
    <hr />
    <MyTest />
  </div>
);

export default App;