import React from 'react';

const Header = (props) => {
  return (
    <header>
      <h1>Memory!</h1>
      <button onClick={props.shuffle}>New Game</button>
      <p className="match-title">{props.clicks} clicks!</p>
      <p className="match-title">{props.count} Matches!!!</p>
    </header>
  )
}

export default Header
