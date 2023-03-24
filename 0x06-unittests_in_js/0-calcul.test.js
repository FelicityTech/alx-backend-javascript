const assert = require("assert");
const calculateNumber = require("./0-calcul");


describe("calculateNumber", () => {
    it("Checks sum of rounded numbers", () => {
        const test1 = calculateNumber(1, 3);
        assert.equal(test1, 4);
    });
    it("checks Sum of mixed numbers", () => {
        const test1 = calculateNumber(1, 3.7);
        assert.equal(test1, 5);
    });
    it("check sum of float numbers", () => {
        const test1 = calculateNumber(1.2, 3.7);
        assert.equal(test1, 5);
    });
    it("Checks sum of float numbers", () => {
        const test1 = calculateNumber(1.5, 3.7);
        assert.equal(test1, 6);
    });
    it("checks sum of mixed sign float numbers", () => {
        const test1 = calculateNumber(-1.2, 3.7);
        assert.equal(test1, 3);
    });
    it("checks sum of negative float numbers", () => {
        const test1 = calculateNumber(-1.5, -3.7);
        assert.equal(test1, -5);
    });
});