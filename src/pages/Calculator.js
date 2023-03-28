import React, { useState } from 'react';
import { resultContext } from '../App';
import Teacher from '../assets/Teacher-PNG-Picture.png';

import CalculatorScreen from '../components/calculator/CalculatorScreen';
import ComponentBody from '../components/calculator/ComponentBody';

function Calculator() {
  const [result, setResult] = useState('0');

  return (
    <section className="row calculator-page">
      <div className="col-lg-6 col-md-12 col-sm-12 col-12">
        <img src={Teacher} width="100%" alt="teacher" />
      </div>
      <div className="col-lg-6 col-md-12 col-sm-12 col-12">
        <section className="container-fluid">
          <div className="calculator-container">
            <resultContext.Provider value={result}>
              <CalculatorScreen />
              <ComponentBody result={result} setResult={setResult} />
            </resultContext.Provider>
          </div>
        </section>
      </div>
    </section>

  );
}

export default Calculator;
