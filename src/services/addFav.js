export const addFavService = ({id, jwt}) => {
  return fetch(`https://${process.env.REACT_APP_ENDPOINT}/favs/${id}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({jwt})
  }).then(res => {
    if(!res.ok) throw new Error('Response is NOT ok');
    return res.json();
  }).then(res => {
    const {favs} = res;
    return favs;
  });
};