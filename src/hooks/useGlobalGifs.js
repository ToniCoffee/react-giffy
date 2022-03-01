import { useContext, GifsContext } from 'util/imports';

export const useGlobalGifs = () => {
  return useContext(GifsContext).gifs;
};