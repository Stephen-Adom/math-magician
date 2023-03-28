import React from 'react';
import { Outlet } from 'react-router-dom';

export const resultContext = React.createContext('0');

function App() {
  return (
    <div className="App">
      <Outlet />
    </div>
  );
}

export default App;
