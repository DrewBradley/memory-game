import React, { Component } from 'react';
import './Board.css'
import Card from './Card'
import Header from './Header'
import cardsData from '../data/card-data'

class Board extends Component {
  constructor() {
    super()
    this.state = {
      deck: cardsData.sort(() => Math.random() - 0.5),
      flipped: []
    }
  }

  pickCard = ({ id, symbol }) => {
    this.setState({flipped: [...this.state.flipped, {'symbol': symbol, 'id': id}]})
  }

  componentDidUpdate() {
    this.findMatch()
  }

  findMatch = () => {
    return this.state.flipped.length > 1 ? this.state.flipped.find(item => {
      item.symbol
    }) : console.log("LESS THAN ONE", this.state.flipped)
  }

  markMatched = (id) => {
  }

  render() {
    const cards = this.state.deck.map(card => <Card key={card.id} id={card.id} symbol={card.symbol} pickCard={this.pickCard} />)
    return (
      <div className="game-container">
        <Header />
        <section className="game-board">
          { cards }
        </section>
      </div>
    )
  }
}

export default Board