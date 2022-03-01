import { 
  useUser, 
  ModalPortal, 
  useState,
  Login 
} from 'util/imports';

import './styles.css';

export const Fav = ({ id }) => {
  const { isLogged, addFav, deleteFav, favs } = useUser();
  const [showModal, setShowModal] = useState(false);

  const isFaved = favs.some(favId => favId === id);

  const handleClick = () => {
    if (!isLogged) return setShowModal(true);
    
    if(isFaved) deleteFav({id});
    else addFav({id});
  };

  const handleClose = () => setShowModal(false);
  const handleLogin = () => setShowModal(false);

  const [label, emoji] = isFaved
    ? ['Removed Gif from favorites', '❌']
    : ['Add Gif to favorites', '💖'];

  return (
    <>
      <button className="gif-fav" onClick={handleClick}>
        <span role="img" aria-label={label}>
          {emoji}
        </span>
      </button>
      {
        showModal && <ModalPortal onClose={handleClose}>
          <Login onLogin={handleLogin} />
        </ModalPortal>
      }
    </>
  );
};
