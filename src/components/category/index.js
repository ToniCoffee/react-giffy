import { Link } from 'util/imports';

import './styles.css';

export const Category = ({name = 'Default name', options = []}) => {
  return (
    <div className="category">
      <h3 className="App-title">{name}</h3>
      <ul>
        {
          options.map(popularGifs => (
            <li key={popularGifs} >
              <Link to={`/search/${popularGifs}`}>
                Gifs de {popularGifs}
              </Link>
            </li>
          ))
        }
      </ul>
    </div>
  );
};