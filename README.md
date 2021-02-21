# Memory Game

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Overview
This is a basic memory, card matching game. Players choose two cards, if they match, the match is tallied, and the cards stay face up. If not, they flip back over.

## Technologies
This was built with [Create React App](https://github.com/facebook/create-react-app) and uses HTML and CSS.

## Architecture
The three main components in this project are ```Header.js```, ```Board.js```, and ```Card.js```.
  - ```Header.js``` contains the title, match counter, and 'new game' button.
  - ```Board.js``` is the gameboard and contains most of the logic, and renders the grid that displays the cards.
  - ```Card.js``` contains the JSX and data that relates to the individual card.

## Images
![Mobile View](https://media.giphy.com/media/C5stnpzU4tjUEmdbPk/giphy.gif)

## Thanks and Contributors

Special thanks to [Brian Forbes](https://github.com/Codeherder19) for helping architect the logic that allowed cards to be matched.
Thank you to [Cameron Aragon](https://github.com/camaragon) and [Matthew Dean](https://github.com/mattdeann) for code review and support.
This application was built by [Drew Bradley](https://github.com/DrewBradley)
