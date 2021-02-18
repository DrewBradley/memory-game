import React from 'react';
import './Card.css'

const Card = (props) =>{
  const rotation = props.flipped ? 180 : 0;
  return (
    <article 
      className="card" 
      style={{transform: `rotateY(${rotation}deg)`}} 
      onClick={() => props.pickCard(props)}>
      <div className="card-front"></div>
      <div className="card-back">
        <p className="card-symbol">{props.symbol}</p>
      </div>
    </article>
  )
}

export default Card