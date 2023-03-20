import React from 'react';

import NumberPad from './NumberPad';
import numberPadItems from './numberPadItems';

function ComponentBody() {
  return (
    <div className="calcuator-body row m-0">
      {
      numberPadItems.length ? (
        numberPadItems.map((item) => (<NumberPad key={item.label} item={item} />))
      ) : null
    }
    </div>
  );
}

export default ComponentBody;
