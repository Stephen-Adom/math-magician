const fetchQuote = async () => {
  try {
    const response = await fetch(
      'https://api.api-ninjas.com/v1/quotes?category=love',
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'X-Api-Key': 'GwxYnnBRWZoAuu+2vh5+KQ==zKNfBDzDyRYVazkN',
        },
      },
    );

    return response.json();
  } catch (error) {
    return error;
  }
};

export default fetchQuote;
