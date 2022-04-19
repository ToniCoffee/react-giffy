export const registerService = ({username, password}) => {
  return fetch(`https://${process.env.REACT_APP_ENDPOINT}/register`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({username, password})
  }).then(res => {
    if(!res.ok) throw new Error('Response is NOT ok');
    return true;
  });
};