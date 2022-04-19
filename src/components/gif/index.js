import { Link, memo, Fav } from 'util/imports';
import './styles.css';

const GifComponent = ({id, title, url}) => {
  return (
    <div className="gif">
      <div className="gif-buttons">
        <Fav id={id} />
      </div>
      <Link to={`${process.env.PUBLIC_URL}/gif/${id}`} className="gif-link">
        <h4>{title}</h4>
        <img loading='lazy' src={url} alt={title} />
      </Link>
    </div>
  );
};

export const Gif = memo(GifComponent, (prevProps, nextProps) => {
  return prevProps.id === nextProps.id;
});