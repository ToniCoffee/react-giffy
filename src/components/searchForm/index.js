import { memo, useLocation, useForm } from 'util/imports';

import './styles.css';

const RATINGS = ['g', 'pg', 'pg-13', 'r'];

const SearchFormComponent = ({ initialKeyword = '', initialRating = 'g' }) => {
  const [, pushLocation] = useLocation();
  const { keyword, rating, /* times, */ updateKeyword, updateRating } = useForm({
    initialKeyword,
    initialRating
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    pushLocation(`/search/${keyword}/${rating}`);
  };

  const handleChange = (e) => updateKeyword(e.target.value);
  const handleChangeRating = (e) => updateRating(e.target.value);

  return (
    <form onSubmit={handleSubmit} className="search-form">
      <input
        placeholder="Search a gif here ..."
        onChange={handleChange}
        type="text"
        value={keyword}
      />
      <select onChange={handleChangeRating} value={rating}>
        <option disabled>Rating</option>
        {RATINGS.map((rating) => (
          <option key={rating}>{rating}</option>
        ))}
      </select>
      <button className="btn">Search</button>
      {/* <span>{times}</span> */}
    </form>
  );
};

export const SearchForm = memo(SearchFormComponent);
