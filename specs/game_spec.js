const assert = require('assert');
const Card = require('../card.js');
const Category = require('../category.js');
const Player = require('../player.js');
const Game = require('../game.js');

let player1;
let player2;
let card1;
let card2;
let card3;
let card4;
let game;

beforeEach( function () {
  card1 = new Card("Superman", new Category(6, 9, 7));
  card2 = new Card("Scarlet Witch", new Category(7, 10, 5));
  card3 = new Card("Black Widow", new Category(8, 6, 9));
  card4 = new  Card("The Flash", new Category(7, 4, 10))
  player1 = new Player("Sharon", []);
  player2 = new Player("Max", []);
  game = new Game([player1, player2], [card1, card2, card3, card4]);
});

describe("Game", function () {
  it("should have players", function () {
    const actual = game.players;
    assert.deepStrictEqual(actual, [player1, player2]);
  });

  it("should have cards", function(){
    const actual = game.cards;
    assert.deepStrictEqual(actual, [card1, card2, card3, card4]);
  });

  it ("should deal cards", function(){
    game.dealCards();
    assert.deepStrictEqual(player1.handOfCards, [card1, card3]);
    assert.deepStrictEqual(player2.handOfCards, [card2, card4]);
  });

  it("should play a game", function() {
    game.dealCards();
    const actual = game.play();
    assert.strictEqual(actual, player2);
  });
});
