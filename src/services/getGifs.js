const fromApiResponseToGifs = apiResponse => {
  const {data = []} = apiResponse;
  if(Array.isArray(data)) {
    const gifs = data.map(image => {
      const {images, title, id} = image;
      const {url} = images.downsized_medium;
      return {title, id, url};
    });
    return gifs;
  }

  return [];
};

export const getGifs = ({limit= 10, keyword = 'morty', rating = 'g', page = 0} = {}) => {
  const apiUrl = `https://${process.env.REACT_APP_API_URL}/gifs/search?api_key=${process.env.REACT_APP_API_KEY}&q=${keyword}&limit=${limit}&offset=${page * limit}&rating=${rating}&lang=en`;

  return fetch(apiUrl)
    .then(res => res.json())
    .then(fromApiResponseToGifs);
};