import { 
  Logo,
  ListOfGifs,
  SearchForm,
  useGifs,
  useNearScreen,
  useRef,
  useCallback,
  useEffect,
  debounce,
  // useSEO
  Helmet
} from 'util/imports';

const scrollTime = 200;

export const SearchResults = ({params}) => {
  const {keyword, rating = 'g'} = params;
  const {loading, gifs, setPage} = useGifs({keyword, rating});
  const externalRef = useRef();
  const {isNearScreen} = useNearScreen({
    externalRef: loading ? null : externalRef,
    once: false
  });

  const title = gifs ? `${gifs.length} resultados de ${decodeURI(keyword)}` : '';
  // useSEO({title: title});

  const debounceHandleNextPage = useCallback(debounce(
    () => setPage(prevPage => prevPage + 1), scrollTime
  ), []);

  useEffect(() => {
    if(isNearScreen) debounceHandleNextPage();
  }, [debounceHandleNextPage, isNearScreen]);

  return <>
    {
      loading 
        ? '' 
        : <>
          <Helmet>
            <title>{title}</title>
            <meta name="description" content={title} />
          </Helmet>
          <Logo />
          <SearchForm initialKeyword={keyword} initialRating={rating} />
          <h3 className="App-title">{decodeURI(keyword)}</h3>
          <ListOfGifs gifs={gifs} />
          <div id="visor" ref={externalRef}></div>
        </>
    }
  </>;
};

// loading ? <Spinner /> : <ListOfGifs gifs={gifs} />