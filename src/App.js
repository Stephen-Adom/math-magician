import React from 'react';

import Calculator from './components/Calculator';

export const resultContext = React.createContext('0');

function App() {
  return (
    <div className="App">
      <Calculator />
    </div>
  );
}

export default App;
