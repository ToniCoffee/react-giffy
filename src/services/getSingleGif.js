const fromApiResponseToGifs = apiResponse => {
  const {data} = apiResponse;
  const {images, title, id} = data;
  const {url} = images.downsized_medium;
  return {title, id, url};
};

export const getSingleGif = ({id}) => {
  const apiUrl = `https://${process.env.REACT_APP_API_URL}/gifs/${id}?api_key=${process.env.REACT_APP_API_KEY}`;

  return fetch(apiUrl)
    .then(res => res.json())
    .then(fromApiResponseToGifs);
};