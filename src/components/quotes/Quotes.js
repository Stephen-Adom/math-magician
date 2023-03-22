import React, { useEffect } from 'react';
import fetchQuote from '../../services/quotes.api';

function Quotes() {
  useEffect(() => {
    fetchQuote();
  }, []);

  return <div>Q</div>;
}

export default Quotes;
