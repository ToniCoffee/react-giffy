import { useState } from 'react';

import './styles.css';

export const Finder = () => {
  const [value, setValue] = useState('');

  const handleChange = e => {
    setValue(e.target.value);
    // console.log(value);
  };

  const handleSearch = () => {
    console.log(value);
  };

  return (
    <div className="finder">
      <input type="text" onChange={handleChange} value={value} placeholder="Search a gif ..."/>
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};