import React from 'react';
import Routes from './routes';
import StoreProvider from './store';
import './App.scss';

const App = () => (
  <div className="app">
    <StoreProvider>
      <Routes />
    </StoreProvider>    
  </div>
);

export default App;
