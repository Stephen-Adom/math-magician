import React from 'react';
import PropTypes from 'prop-types';

function NumberPad(props) {
  const { item } = props;

  return (
    <div className="number-pad">
      {item}
    </div>
  );
}

NumberPad.propTypes = {
  item: PropTypes.string.isRequired,
};

export default NumberPad;
