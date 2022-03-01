import ReactDOM from 'react-dom';

import './styles.css';

const Modal = ({children, onClose}) => {
  return <div className="modal">
    <div className="modal-content">
      <button className="modal-content-btn btn" onClick={onClose}>
        <span role="img" aria-label="Close emoji">❌</span>
      </button>
      {children}
    </div>
  </div>;
};

export const ModalPortal = ({children, onClose}) => {
  return ReactDOM.createPortal(
    <Modal onClose={onClose}>{children}</Modal>,
    document.getElementById('modal-root')
  );
};