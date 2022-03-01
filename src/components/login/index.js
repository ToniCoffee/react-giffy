import { useState, useEffect, useLocation, useUser } from 'util/imports';

import './styles.css';

export const Login = ({onLogin}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [, pushLocation] = useLocation(); // navigate
  const {isLoginLoading, hasLoginError, login, isLogged} = useUser();

  useEffect(() => {
    if(isLogged) {
      pushLocation('/');
      onLogin && onLogin();
    }
  }, [isLogged, pushLocation, onLogin]);

  const handleSubmit = (e) => {
    e.preventDefault();
    login({username, password});
  };

  return (
    <>
      {
        isLoginLoading && <strong>Checking credentials...</strong>
      }
      {
        !isLoginLoading && 
        <form className="form" onSubmit={handleSubmit}>
          <fieldset>
            <legend>LOGIN</legend>
            <label>
              User Name
              <input
                placeholder="username"
                onChange={(e) => setUsername(e.target.value)}
                value={username}
              />
            </label>
            
            <label>
              Password
              <input
                type="password"
                placeholder="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
            </label>
            <button className="btn">Login</button>
          </fieldset>
        </form>
      }
      {
        hasLoginError && <strong>Credentials are invalid.</strong>
      }
    </>
  );
};
