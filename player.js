const Player = function (name, handOfCards) {
  this.name = name;
  this.handOfCards = handOfCards;
};


Player.prototype.playCard = function () {
  const firstCard = this.handOfCards[0];
  return firstCard;
};

Player.prototype.selectCategory = function () {
  const firstCard = this.handOfCards[0];
  const cardCategory = firstCard.category;

  let cardStat = cardCategory.intelligence;
  let category = "intelligence";

  if (cardStat < cardCategory.strength)
  {
    cardStat = cardCategory.strength;
    category = "strength";
  }

  if (cardStat < category.agility)
  {
    cardStat = cardCategory.agility;
    category = "agility";
  }

  return category;
};

module.exports = Player;
