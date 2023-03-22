import React, { useState } from 'react';
import { resultContext } from '../../App';

import CalculatorScreen from './CalculatorScreen';
import ComponentBody from './ComponentBody';

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
