import {
  useState,
  useEffect,
  getTrendingTerms,
  Category
} from 'util/imports';

export const Trending = () => {
  const [trends, setTrends] = useState([]);

  useEffect(() => {
    getTrendingTerms().then(setTrends);
  }, []);

  return <Category name="Tendencias" options={trends}/>;
};