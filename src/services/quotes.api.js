import axios from 'axios';

const fetchQuote = async () => {
  try {
    const response = await axios.get(
      'https://api.api-ninjas.com/v1/quotes?category=love',
      {
        headers: {
          'Content-Type': 'application/json',
          'X-Api-Key': process.env.REACT_APP_API_KEY,
        },
      },
    );

    return response;
  } catch (error) {
    return error;
  }
};

export default fetchQuote;
