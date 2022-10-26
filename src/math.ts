import readline from "readline-sync";

function sum(): string {
    console.clear();
    console.log("this operation consists of adding 2 numbers: a + b\n");
    readline.keyInPause();
    console.clear();
    const a: number = readline.questionInt("enter a value for 'a':");
    const b: number = readline.questionInt("enter a value for 'b':");
    console.clear();
    return `The result of ${a} + ${b} is ${a + b}\n`;
}

function sub(): string {
    console.clear();
    console.log("this operation consists of subtracting 2 numbers: a - b\n");
    readline.keyInPause();
    console.clear();
    const a: number = readline.questionInt("enter a value for 'a':");
    const b: number = readline.questionInt("enter a value for 'b':");
    console.clear();
    return `The result of ${a} - ${b} is ${a - b}\n`;
}

function mult(): string {
    console.clear();
    console.log("This operation consists of multiplying 2 numbers: a * b\n");
    readline.keyInPause();
    console.clear();
    const a: number = readline.questionInt("enter a value for 'a':");
    const b: number = readline.questionInt("enter a value for 'b':");
    console.clear();
    return `The result of ${a} * ${b} is ${a * b}\n`;
}

function div(): string {
    console.clear();
    console.log("This operation consists of dividing 2 numbers: a / b\n");
    readline.keyInPause();
    console.clear();
    const a: number = readline.questionInt("enter a value for 'a':");
    const b: number = readline.questionInt("enter a value for 'b':");
    console.clear();
    return `The result of ${a} / ${b} is ${a / b}\n`;
}

function pot(): string {
    console.clear();
    console.log("This operation consists of doing the power of a number: a**b\n");
    readline.keyInPause();
    console.clear();
    const a: number = readline.questionInt("enter a value for 'a':");
    const b: number = readline.questionInt("enter a value for 'b':");
    console.clear();
    return `The result of ${a} elevated to ${b} is ${a**b}\n`;
}

function root(): string {
    console.clear();
    console.log("This operation consists of taking the square root of a number: Math.sqrt(x)\n");
    readline.keyInPause();
    console.clear();
    const x: number = readline.questionInt("enter a value for 'x':");
    console.clear();
    return `The square root of ${x} is ${Math.sqrt(x)}\n`;
}

export {
    sum,
    sub,
    mult,
    div,
    pot,
    root
}