import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import { resultContext } from '../../App';

function CalculatorScreen(props) {
  const result = useContext(resultContext);
  const { displayresult, operation } = props;

  return (
    <div className="calculator-screen">
      {displayresult && <span className="d-block">{operation}</span>}
      <h1 className="display-6">{result}</h1>
    </div>
  );
}

CalculatorScreen.propTypes = {
  displayresult: PropTypes.bool.isRequired,
  operation: PropTypes.string.isRequired,
};

export default CalculatorScreen;
