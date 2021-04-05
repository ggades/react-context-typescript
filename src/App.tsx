import React from 'react';
import Routes from './routes';
import TodosProvider from './context';
import './App.css';

const App = () => (
  <div className="App">
    <TodosProvider>
      <Routes />
    </TodosProvider>    
  </div>
);

export default App;
