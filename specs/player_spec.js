const assert = require('assert');
const Card = require('../card.js');
const Category = require('../category.js');
const Player = require('../player.js');

let player;
let card1;
let card2;
let card3;
let category1;
let category2;
let category3;

beforeEach( function () {
  category1 = new Category(6, 9, 7);
  category2 = new Category(7, 10, 5);
  category3 = new Category(8, 6, 9);
  card1 = new Card("Superman", category1);
  card2 = new Card("Scarlet Witch", category2);
  card3 = new Card("Black Widow", category3);
  player = new Player("Sharon", [card1, card2, card3]);
});

describe("Player", function () {
  it("should have name", function () {
    const actual = player.name;
    assert.strictEqual(actual, "Sharon");
  });

  it("should have a hand of cards", function () {
    const actual = player.handOfCards;
    assert.deepStrictEqual(actual, [card1, card2, card3]);
  });

  it("should select category", function () {
    const actual = player.selectCategory();
    assert.strictEqual(actual, "strength");
  });

  it("should play a card", function () {
    const actual = player.playCard();
    assert.strictEqual(actual, card1);
  });

});
