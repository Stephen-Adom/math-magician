import React, { useContext } from 'react';
import { resultContext } from '../App';

function CalculatorScreen() {
  const result = useContext(resultContext);

  return (
    <div className="calculator-screen">{result}</div>
  );
}

export default CalculatorScreen;
