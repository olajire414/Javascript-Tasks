const {add,multiply,sub} = require("./calculate");

test("test that i can add two numbers", () => {
    let number1 = 2;
    let number2 = 7;
    let result = add(number1, number2);
    expect(result).toBe(9);
})

test("i can multiply two numbers", () => {
    let number1 = 3;
    let number2 = 2;
    let result = multiply(number1, number2);
    expect(result).toBe(6);
})

test("i can subtract two numbers", () => {
    let number1 = 3;
    let number2 = 1;
    let result = sub(number1, number2);
    expect(result).toBe(2);
})
