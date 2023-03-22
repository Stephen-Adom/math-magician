/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';

import Calculator from './components/calculator/Calculator';
import Quotes from './components/quotes/Quotes';
import fetchQuote from './services/quotes.api';

export const resultContext = React.createContext('0');

function App() {
  const [loading, setLoading] = useState(false);

  const [error, setError] = useState(null);
  const [quote, setQuote] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetchQuote().then((response) => {
      setLoading(false);
      console.log(response);
      if (response.status === 200) {
        if (response.data.length) {
          setQuote(response.data[0]);
          setError(null);
        }
      } else {
        setError(response.message);
      }
    });
  }, []);

  return (
    <div className="App">
      <div className="row h-100 m-0">
        <div className="col-lg-6 col-md-6 col-sm-12 col-12">
          <Quotes loading={loading} error={error} quote={quote} />
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12 col-12">
          <Calculator />
        </div>
      </div>
    </div>
  );
}

export default App;
