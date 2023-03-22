import React from 'react';
import PropTypes from 'prop-types';

function Quotes(props) {
  const { loading, error, quote } = props;

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

Quotes.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.string,
  quote: PropTypes.shape({
    quote: PropTypes.string,
    author: PropTypes.string,
    category: PropTypes.string,
  }),
};

Quotes.defaultProps = {
  loading: false,
  error: null,
  quote: null,
};

export default Quotes;
