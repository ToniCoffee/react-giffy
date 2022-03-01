import { Link, useUser, useRoute } from 'util/imports';

import './styles.css';

export const Header = () => {
  const {isLogged, logout} = useUser();
  const [matchLogin] = useRoute('/login');
  const [matchRegister] = useRoute('/register');
  // const [matchError] = useRoute('/:rest*');

  const handleClick = e => {
    e.preventDefault();
    logout();
  };

  const renderLoginButtons = ({isLogged}) => {
    return isLogged 
      ? <Link to="#" onClick={handleClick}>Logout</Link>
      : <>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
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