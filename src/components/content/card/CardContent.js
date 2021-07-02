import React from 'react';

function CardContent(props) {
  const name = props.name;
  const size = props.size;
  const price = props.price;
  const color = props.color;
  return (
    <div>
      <h2>{name}</h2>
      <div className="card-content">
        <p>{price}</p>
        <p>{size}</p>
        <p>{color}</p>
      </div>
    </div>
  );
}

export default CardContent;
