import React from 'react';

function FilterSize() {
  return (
    <div className="flex-column">
      <label>size</label>
      <select id="cars" name="carlist" form="carform">
        <option value="volvo">S</option>
        <option value="saab">M</option>
        <option value="opel">XL</option>
        <option value="audi">XXL</option>
      </select>
    </div>
  );
}

export default FilterSize;
