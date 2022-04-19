export const getFavsService = ({jwt}) => {
  return fetch(`https://${process.env.REACT_APP_ENDPOINT}/favs`, {
    method: 'GET',
    headers: {
      'Authorization': jwt,
      'Content-Type': 'application/json'
    }
  }).then(res => {
    if(!res.ok) throw new Error('Response is NOT ok');
    return res.json();
  }).then(res => {
    const {favs} = res;
    return favs;
  });
};