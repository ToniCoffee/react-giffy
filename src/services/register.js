// const ENDPOINT = 'http://localhost:8000';
const ENDPOINT = 'https://deno-api-users-login.herokuapp.com';

export const registerService = ({username, password}) => {
  return fetch(`${ENDPOINT}/register`, {
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