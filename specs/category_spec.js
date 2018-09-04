const assert = require('assert');
const Category = require('../category.js');

let category;

beforeEach(function () {
  category = new Category(6, 9, 7);
});

describe("Category", function () {
  it("should have intelligence", function () {
    const actual = category.intelligence;
    assert.strictEqual(actual, 6);
  });

  it("should have strength", function () {
    const actual = category.strength;
    assert.strictEqual(actual, 9);
  });

  it("should have agility", function () {
    const actual = category.agility;
    assert.strictEqual(actual, 7);
  });
})
