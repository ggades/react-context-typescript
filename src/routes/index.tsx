import React from "react";
import { BrowserRouter as Router, Route, Redirect, Link } from 'react-router-dom';
import TodoList from '../components/TodoList';
import TodoAdd from '../components/TodoAdd';

const Routes = () => {
  return (
    <Router>
      <header>
        <Link to="/todo">Todo list</Link>
        <Link to="/todo/add">Add todo</Link>
      </header>
      <Route path="/" exact component={() => <Redirect to="/todo" />} />
      <Route path="/todo" exact component={TodoList} />
      <Route path="/todo/add" exact component={TodoAdd} />
    </Router>
  );
};

export default Routes;