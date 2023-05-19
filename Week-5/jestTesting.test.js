const mathOperations = require("./jestTesting");

console.log(mathOperations);

describe("Calculator test", () => {
  test("adding 1 + 2 should return 3", () => {
    // arrange and act
    let result = mathOperations.add(1, 2);

    // assert
    expect(result).toBe(3);
  });

  test("subtracting 5 - 3 should return 2", () => {
    let result = mathOperations.sub(5, 3);

    expect(result).toBe(2);
  });

  test("multiplying 4 X 3 should return 12", () => {
    let result = mathOperations.multiply(4, 3);

    expect(result).toBe(12);
  });
});
