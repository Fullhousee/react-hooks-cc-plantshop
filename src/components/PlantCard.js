import React, { useState } from "react";

function PlantCard({plant}) {
  const { id, name , image ="https://via.placeholder.com/400", price } = plant
  const [inStock, setInStock] = useState(true)

  function handleClick(){
    setInStock((inStock) => !inStock)
  }

  return (
    <li className="card" data-testid="plant-item">
      <img src={image} alt={"plant name"} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      {inStock ? (
        <button className="primary" onClick={handleClick}>In Stock</button>
      ) : (
        <button onClick={handleClick}>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
