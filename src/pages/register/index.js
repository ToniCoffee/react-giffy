import { Logo, Register } from 'util/imports';

import './styles.css';

export const RegisterPage = () => {
  return <div className="center-page">
    <div className="center-page-item">
      <Logo />
      <h4>REGISTER</h4>
      <Register />
    </div>
  </div>;
};
