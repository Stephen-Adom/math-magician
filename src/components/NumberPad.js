import React from 'react';
import PropTypes from 'prop-types';

import divide from '../assets/divide.png';

function NumberPad(props) {
  const { item } = props;

  const renderPadType = () => {
    if (item && item.type === 'text') {
      return item.label;
    }
    return <img src={divide} alt={item.label} />;
  };

  return (
    <div className={`number-pad ${item.label === '0' ? 'col-6' : 'col-3'} ${item.value === '/' || item.value === '*' || item.value === '-' || item.value === '+' || item.value === '=' ? 'orange' : 'white'}`}>
      {
        renderPadType()
      }
    </div>
  );
}

NumberPad.propTypes = {
  item: PropTypes.shape({
    label: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
  }).isRequired,
};

export default NumberPad;
