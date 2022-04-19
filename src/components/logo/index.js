import { Link, routes } from 'util/imports';
import { ReactComponent as GiffyLogo } from 'assets/giffy.svg';

export const Logo = () => {
  return <Link to={routes.home}>
    <figure className="App-logo">
      <GiffyLogo alt="Giffy logo" />
    </figure>
  </Link>;
};