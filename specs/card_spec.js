const assert = require('assert');
const Card = require('../card.js');
const Category = require('../category.js');

let card;
let category;

beforeEach( function () {
  category = new Category(6, 9, 7);
  card = new Card("Superman", category);
});

describe ("Card", function (){

  it("should have name", function () {
    const actual = card.name;
    assert.strictEqual(actual, "Superman");
  });

  it("should have category", function () {
    const actual = card.category;
    assert.deepStrictEqual(actual, category);
  });

  it("should have category attribute", function () {
    const actual = card.category.intelligence;
    assert.strictEqual(actual, 6);
  });

});
