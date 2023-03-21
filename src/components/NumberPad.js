/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';

import divide from '../assets/divide.png';

function NumberPad(props) {
  const { item, handleClick } = props;

  const setValuesForCalculation = () => {
    handleClick(item);
  };

  return (
    <button
      type="button"
      onClick={setValuesForCalculation}
      className={`number-pad ${item.label === '0' ? 'col-6' : 'col-3'} ${item.value === '÷' || item.value === 'x' || item.value === '-' || item.value === '+' || item.value === '=' ? 'orange' : 'white'}`}
    >
      {
        item.label
      }
    </button>
  );
}

NumberPad.propTypes = {
  item: PropTypes.shape({
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
  }).isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default NumberPad;
