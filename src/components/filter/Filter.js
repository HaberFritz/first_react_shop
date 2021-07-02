import React from 'react';
import FilterSearch from './FilterSearch';
import FilterTypes from './FilterTypes/FilterTypes';
import './filter.css'
function Filter() {
  return (
    <div className="filter">
      <FilterSearch></FilterSearch>
      <FilterTypes></FilterTypes>
    </div>
  );
}

export default Filter;
