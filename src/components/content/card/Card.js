import React from 'react';
import CardContent from './CardContent';
import './card.css';
function card(props) {
  const name = props.name;
  const size = props.size;
  const price = props.price;
  const color = props.color;
  return (
    <div className="card">
      <img src={props.img}></img>
      <CardContent
        name={name}
        size={size}
        price={price}
        color={color}
      ></CardContent>
    </div>
  );
}

export default card;
