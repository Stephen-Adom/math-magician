import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import NumberPad from './NumberPad';
import numberPadItems from './numberPadItems';
import { calculate, isNumber } from './logic';

const initialState = {
  total: null,
  next: null,
  operation: null,
};

function ComponentBody(props) {
  const [numObj, setNumObj] = useState(initialState);
  const { result, setResult } = props;

  useEffect(() => {
    if (!numObj.total && !numObj.next && !numObj.operation) {
      setResult('0');
    }
    if (numObj.total && !numObj.next && !numObj.operation) {
      setResult(numObj.total);
    }
    if (!numObj.total && numObj.next && !numObj.operation) {
      setResult(numObj.next);
    }
  }, [numObj, result, setResult]);

  const getKeyValue = (item) => {
    if (isNumber(item.value)) {
      setResult(item.value);
    }

    const result = calculate(numObj, item.value);
    setNumObj((prevState) => ({
      ...prevState,
      ...result,
    }));

    if (result.operation || (result.operation && result.total)) {
      setNumObj((prevState) => ({
        ...prevState,
        operation: result.operation,
        total: result.total,
      }));
    }
  };

  return (
    <div className="calcuator-body row m-0">
      {numberPadItems.length
        ? numberPadItems.map((item) => (
          <NumberPad handleClick={() => getKeyValue(item)} key={item.label} item={item} />
        ))
        : null}
    </div>
  );
}

ComponentBody.propTypes = {
  result: PropTypes.string.isRequired,
  setResult: PropTypes.func.isRequired,
};

export default ComponentBody;
