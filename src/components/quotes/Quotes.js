import React, { useState, useEffect } from 'react';
import fetchQuote from '../../services/quotes.api';

function Quotes() {
  const [loading, setLoading] = useState(false);

  const [error, setError] = useState(null);
  const [quote, setQuote] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetchQuote().then((response) => {
      setLoading(false);
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

  const showQuote = () => {
    if (loading) {
      return (
        <div className="fs-4 fst-italic">Loading Quote...</div>
      );
    }
    return (
      <>
        {
          quote && (
            <div className="quote-info text-center">

              <p className="fs-4">
                {quote.quote}
                <b>
                  -
                  {quote.author}
                </b>
              </p>
            </div>
          )
        }
        {
          error && <div className="fs-4 fst-italic text-danger">{error}</div>
        }
      </>
    );
  };

  return (
    <div className="quote-section h-100 d-flex flex-column justify-content-center align-items-center">
      {showQuote()}
    </div>
  );
}

export default Quotes;
