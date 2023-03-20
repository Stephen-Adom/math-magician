import React from 'react';

import NumberPad from './NumberPad';
import numberPadItems from './numberPadItems';

function ComponentBody() {
  return (
    <div className="calcuator-body">
      {
      numberPadItems.length ? (
        numberPadItems.forEach((item) => <NumberPad item={item} />)
      ) : null
    }
    </div>
  );
}

export default ComponentBody;
