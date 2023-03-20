import React from 'react';

import CalculatorScreen from './CalculatorScreen';
import ComponentBody from './ComponentBody';

function Calculator() {
  return (
    <section className="calculator-page">
      <div className="calculator-container">
        <CalculatorScreen />
        <ComponentBody />
      </div>
    </section>
  );
}

export default Calculator;
