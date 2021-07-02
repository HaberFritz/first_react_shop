import React from 'react';
import FilterColor from './FilterColor';
import FilterSize from './FilterSize';
import FilterPrice from './FilterPrice';
function FilterTypes() {
  return (
    <div className="filter-types">
      <FilterPrice></FilterPrice>
      <FilterColor></FilterColor>
      <FilterSize></FilterSize>
    </div>
  );
}

export default FilterTypes;
