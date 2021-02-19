import React, { Component } from 'react';
import './Board.css'
import Card from './Card'
import Header from './Header'
import Winner from './Winner'
import cardsData from '../data/card-data'

class Board extends Component {
  constructor() {
    super()
    this.state = {
      cards: cardsData.sort(() => Math.random() - 0.5),
      flipped: [],
      match: []
    }
  }

  shuffleDeck = () => {
    this.setState({
      deck: cardsData.sort(() => Math.random() - 0.5),
      flipped: [],
      match: []
    })
  }

  pickCard = ({ id, symbol }) => {
    this.setState({flipped: [...this.state.flipped, {'symbol': symbol, 'id': id, 'flipped': true}]})
  }

  componentDidUpdate() {
    this.findMatch()
  }

  findMatch = () => {
    const card1 = this.state.flipped[0]
    const card2 = this.state.flipped[1]
    if(this.state.flipped.length > 1) {
      card1.symbol === card2.symbol ? this.itsAMatch(card1, card2) : this.resetCards()
    }
    if(this.state.match.length > 15) {
      this.showWin()
    }
  }

  showWin = () => {
    setTimeout(() => {
      this.shuffleDeck()
    }, 4000)
  }

  itsAMatch = (card1, card2) => {
    this.setState({
      match: [...this.state.match, card1, card2],
      flipped: []
    })
  }

  resetCards = () => {
    setTimeout(() => {
      this.setState({
      flipped: []
      })
    }, 1000)  
  }

  render() {
    const cardsInPlay = this.state.cards.map(card => {
      if(this.state.flipped.find(flipCard => flipCard.id === card.id)) {
        return <Card key={card.id} id={card.id} symbol={card.symbol} flipped={true} pickCard={this.pickCard}/>
      } else if (this.state.match.find(matchCard => matchCard.id === card.id)) {
        return <Card key={card.id} id={card.id} symbol={card.symbol} flipped={true} pickCard={this.pickCard}/>
      } else {
        return <Card key={card.id} id={card.id} symbol={card.symbol} flipped={false} pickCard={this.pickCard} />}
      })
    return(
      <div className="game-container">
        <Header shuffle={this.shuffleDeck} count={this.state.match.length/2}/>
        { this.state.match.length > 15 && <Winner /> }
        <section className="game-board">
          { cardsInPlay }
        </section>
      </div>
    )
  }
}

export default Board