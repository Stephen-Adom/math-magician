import React from 'react';
import { Outlet } from 'react-router-dom';
import Navigation from './components/navigation/Navigation';

export const resultContext = React.createContext('0');

function App() {
  return (
    <div className="App">
      <Navigation />
      <div className="container py-5">
        <Outlet />
      </div>
    </div>
  );
}

export default App;
