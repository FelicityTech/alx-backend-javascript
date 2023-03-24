const calculateNumber = require("./2-calcul_chai")
const chai = require("chai");

const expect = chai.expect;

describe("calculateNumber", () => {
  it("checks sum", function() {
    const test = calculateNumber('SUM', 1.4, 4.5);
    expect(test).to.equal(6);
  });
  it("checks subtract", () => {
    const test = calculateNumber('SUBTRACT', 1.4, 4.5);
    expect(test).to.equal(-4);
  });
  it("checks divide", () => {
    const test = calculateNumber('DIVIDE', 1.4, 4.5);
    expect(test).to.equal(0.2);
  });
  it("checks division by 0", () => {
    const test = calculateNumber('DIVIDE', 1.4, 0);
    expect(test).to.equal('Error');
  });
});
