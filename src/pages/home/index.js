import {
  Logo,
  useGifs,
  SearchForm,
  ListOfGifs,
  Category,
  LazyTrending,
  Helmet
} from 'util/imports';

import './styles.css';

const POPULAR_GIFS = [
  'Matrix', 
  'Chile', 
  'Colombia',
  'Ecuador',
  'Programming'
];

export const Home = () => {
  const {gifs} = useGifs();

  return (
    <div className="home">
      <Logo />
      <Helmet>
        <title>Home | Giffy</title>
      </Helmet>
      <SearchForm />
      <h3 className="App-title">Última búsqueda</h3>
      <ListOfGifs gifs={gifs} />
      <div className="App-category">
        <Category
          name="Categorias populares"
          options={POPULAR_GIFS}
        />
        <Category
          name="Mascotas"
          options={['Perros', 'Gatos', 'Hamster']}
        />
        <LazyTrending />
      </div>
    </div>
  );
};