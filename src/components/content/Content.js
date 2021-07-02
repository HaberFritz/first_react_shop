import React from 'react';
import Card from './card/Card';

function Content(props) {
  const storeData = props.storeData;

  return (
    <div className="content">
      {storeData.map((item) => {
        return (
          <Card
            img = {item.img}
            name={item.name}
            price={item.price}
            size={item.size}
            color={item.color}
          ></Card>
        );
      })}
    </div>
  );
}

export default Content;
