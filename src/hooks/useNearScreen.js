import {
  useState,
  useEffect,
  useRef
} from 'util/imports';

export const useNearScreen = ({distance = '100px', externalRef, once = true} = {}) => {
  const [isNearScreen, setIsNearScreen] = useState(false);
  const fromRef = useRef();

  useEffect(() => {
    let observer = null;

    const element = externalRef ? externalRef.current : fromRef.current; 

    const onChange = (entries, observer) => {
      const el = entries[0];
      if(el.isIntersecting) {
        setIsNearScreen(true);
        once && observer.disconnect();
      } else {
        !once && setIsNearScreen(false);
      }
    };

    // Si IntersectionObserver es undefined importa el pollyfill intersection-observer
    // si no es undefined usa IntersectionObserver
    Promise.resolve(
      typeof IntersectionObserver !== 'undefined'
        ? IntersectionObserver
        : import('intersection-observer')
    ).then(() => {
      observer = new IntersectionObserver(onChange, {
        rootMargin: distance
      });

      if (element) observer.observe(element);
    });

    return () => observer && observer.disconnect();
  });

  return {isNearScreen, fromRef};
};