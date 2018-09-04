const Game = function (players, cards) {
  this.players = players;
  this.cards = cards;
};

Game.prototype.dealCards = function () {
  let currentPlayer = 0;
  for (let card of this.cards){
    this.players[currentPlayer].handOfCards.push(card);
    if (currentPlayer === 0) {
      currentPlayer = 1;
    } else {
      currentPlayer = 0;
    }
  }
};

Game.prototype.play = function () {
  let currentPlayer = 0;
  const category = this.players[currentPlayer].selectCategory();
  const player1 = this.players[0];
  const player2 = this.players[1];
  const p1Card = player1.playCard();
  const p2Card = player2.playCard();

  if (p1Card.category[category] > p2Card.category[category]) {
    return player1;
  } else if (p1Card.category[category] < p2Card.category[category]) {
    return player2;
  } else {
    return this.players[currentPlayer];
  }
};

module.exports = Game;
