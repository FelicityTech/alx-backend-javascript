const assert = require("assert");
const calculateNumber = require("./1-calcul")

describe("calculateNumber", () => {
  it("checks sum", () => {
    const test = calculateNumber('SUM', 1.4, 4.5);
    assert.equal(test, 6);
  });
  it("checks subtract", () => {
    const test = calculateNumber('SUBTRACT', 1.4, 4.5);
    assert.equal(test, -4);
  });
  it("checks divide", () => {
    const test = calculateNumber('DIVIDE', 1.4, 4.5);
    assert.equal(test, 0.2);
  });
  it("checks division by 0", () => {
    const test = calculateNumber('DIVIDE', 1.4, 0);
    assert.equal(test, 'Error');
  });
});
