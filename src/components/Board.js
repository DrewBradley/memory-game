import React, { Component } from 'react';
import './Board.css'
import Card from './Card'
import Header from './Header'
import cardsData from '../data/card-data'

class Board extends Component {
  constructor() {
    super()
    this.state = {
      deck: cardsData.sort(() => Math.random() - 0.5).map(card => <Card id={card.id} symbol={card.symbol} flipped={card.flipped} pickCard={this.pickCard}/>),
      card1: null,
      card2: null,
      flipCount: 0,
    }
  }

  pickCard = (id, symbol) => {
    !this.state.card1 ? this.setState({
        card1: symbol,
      }) : this.setState({
        card2: symbol
    })
    this.setState(prevState => {
      return{
        ...prevState,
        flipCount: prevState.flipCount++
      }
    })
    this.findMatch(id)
  }

  findMatch = (id) => {
    return this.state.card1 === this.state.card2 ? this.matched(id) : this.resetCards()
  }

  matched = (id) => {
    console.log(id)
  }

  resetCards = () => {
    this.setState({
      card1: null,
      card2: null
    })
    const newArray = this.state.deck.map(card => {
      return card;
    })
    console.log(newArray)
    console.log("not a match!")
  }

  render() {
    console.log(this.state.flipCount, this.state.card1, this.state.card2)
    return (
      <div className="game-container">
        <Header />
        <section className="game-board">
          { this.state.deck }
        </section>
      </div>
    )
  }
}

export default Board