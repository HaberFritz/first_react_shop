import React from 'react';

function FilterColor() {
  return (
    <div className="flex-column">
      <lable>Color</lable>
      <select id="cars" name="carlist" form="carform">
        <option value="volvo">Black</option>
        <option value="saab">White</option>
        <option value="opel">Red</option>
        <option value="audi">Orange</option>
      </select>
    </div>
  );
}

export default FilterColor;
