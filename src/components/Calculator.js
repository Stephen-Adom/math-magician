import React, { useState } from 'react';

import CalculatorScreen from './CalculatorScreen';
import ComponentBody from './ComponentBody';

export const resultContext = React.createContext('0');

function Calculator() {
  const [result, setResult] = useState('0');

  return (
    <section className="calculator-page container">
      <div className="calculator-container">
        <resultContext.Provider value={result}>
          <CalculatorScreen />
          <ComponentBody result={result} setResult={setResult} />
        </resultContext.Provider>
      </div>
    </section>
  );
}

export default Calculator;
