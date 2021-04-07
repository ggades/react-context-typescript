import React from 'react';
import Routes from './routes';
import TodosProvider from './context';
import './App.scss';

const App = () => (
  <div className="app">
    <TodosProvider>
      <Routes />
    </TodosProvider>    
  </div>
);

export default App;
