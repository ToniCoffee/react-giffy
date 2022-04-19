import { Link, useUser, useRoute, routes } from 'util/imports';

import './styles.css';

export const Header = () => {
  const {isLogged, logout} = useUser();
  const [matchLogin] = useRoute(routes.login);
  const [matchRegister] = useRoute(routes.register);
  // const [matchError] = useRoute('/:rest*');

  const handleClick = e => {
    e.preventDefault();
    logout();
  };

  const renderLoginButtons = ({isLogged}) => {
    return isLogged 
      ? <Link to={routes.home} onClick={handleClick}>Logout</Link>
      : <>
        <Link to={routes.login}>Login</Link>
        <Link to={routes.register}>Register</Link>
      </>;
  };

  const content = matchLogin | matchRegister
    ? null
    : renderLoginButtons({isLogged});

  return (
    <header className="gif-header">
      {content}
    </header>
  );
};