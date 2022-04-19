const fromApiResponseToGifs = apiResponse => {
  const {data = []} = apiResponse;
  return data;
};

export const getTrendingTerms = () => {
  const apiUrl = `https://${process.env.REACT_APP_API_URL}/trending/searches?api_key=${process.env.REACT_APP_API_KEY}`;

  return fetch(apiUrl)
    .then(res => res.json())
    .then(fromApiResponseToGifs);
};