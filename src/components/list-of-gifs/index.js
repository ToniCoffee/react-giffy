import { Gif } from 'util/imports';

import './styles.css';

export const ListOfGifs = ({gifs}) => {
  return <div className="list-of-gifs">
    {
      gifs.map(({id, title, url}) => 
        <Gif
          id={id} 
          key={id}
          title={title} 
          url={url} 
        />
      )
    }
  </div>;
};