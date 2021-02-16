import React, { Component } from 'react';
import './Card.css'

class Card extends Component{
  constructor(props) {
    super(props)
    this.state = {
      id: props.id,
      symbol: props.symbol,
      flipped: false,
      found: false,
    }
  }
  
  flipCard = () => {
    this.setState(prevState => {
      return{
        ...prevState,
        flipped: !prevState.flipped
      }
    })
    this.props.pickCard(this.state)
  }

  render() {
    const rotation = this.state.flipped ? 180 : 0;
    return (
      <article 
        className="card" 
        style={{transform: `rotateY(${rotation}deg)`}} 
        onClick={this.flipCard}>
        <div className="card-front"></div>
        <div className="card-back">
          <p className="card-symbol">{this.state.symbol}</p>
        </div>
      </article>
    )
  }
}

export default Card