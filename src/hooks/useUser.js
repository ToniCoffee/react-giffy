import { 
  useContext, 
  UserContext, 
  useCallback,
  loginService,
  addFavService,
  useState,
  deleteFavService
} from 'util/imports';

export const useUser = () => {
  const {favs, jwt, setFavs, setJWT} = useContext(UserContext);
  const [state, setState] = useState({loading: false, error: false});

  const login = useCallback(({username, password}) => {
    setState({loading: true, error: false});
    loginService({username, password})
      .then(jwt => {
        window.sessionStorage.setItem('jwt', jwt);
        setState({loading: false, error: false});
        setJWT(jwt);
      })
      .catch(() => {
        window.sessionStorage.removeItem('jwt');
        setState({loading: false, error: true});
      });
  }, [setJWT]);

  const addFav = useCallback(({id}) => {
    addFavService({id, jwt})
      .then(setFavs)
      .catch(err => {
        console.error(err);
      });
  }, [jwt, setFavs]);

  const deleteFav = useCallback(({id}) => {
    deleteFavService({id, jwt})
      .then(setFavs)
      .catch(err => {
        console.error(err);
      });
  }, [jwt, setFavs]);

  const logout = useCallback(() => {
    window.sessionStorage.removeItem('jwt');
    setJWT(null);
  }, [setJWT]);

  return {
    addFav,
    deleteFav,
    favs,
    isLogged: Boolean(jwt),
    isLoginLoading: state.loading,
    hasLoginError: state.error,
    login,
    logout
  };
};