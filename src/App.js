import React from 'react';

import Calculator from './components/calculator/Calculator';
import Quotes from './components/quotes/Quotes';

export const resultContext = React.createContext('0');

function App() {
  return (
    <div className="App">
      <div className="row h-100 m-0">
        <div className="col-lg-6 col-md-6 col-sm-12 col-12">
          <Calculator />
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12 col-12">
          <Quotes />
        </div>
      </div>
    </div>
  );
}

export default App;
