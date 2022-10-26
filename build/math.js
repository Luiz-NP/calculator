"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.root = exports.pot = exports.div = exports.mult = exports.sub = exports.sum = void 0;
const readline_sync_1 = __importDefault(require("readline-sync"));
function sum() {
    console.clear();
    console.log("this operation consists of adding 2 numbers: a + b\n");
    readline_sync_1.default.keyInPause();
    console.clear();
    const a = readline_sync_1.default.questionInt("enter a value for 'a':");
    const b = readline_sync_1.default.questionInt("enter a value for 'b':");
    console.clear();
    return `The result of ${a} + ${b} is ${a + b}\n`;
}
exports.sum = sum;
function sub() {
    console.clear();
    console.log("this operation consists of subtracting 2 numbers: a - b\n");
    readline_sync_1.default.keyInPause();
    console.clear();
    const a = readline_sync_1.default.questionInt("enter a value for 'a':");
    const b = readline_sync_1.default.questionInt("enter a value for 'b':");
    console.clear();
    return `The result of ${a} - ${b} is ${a - b}\n`;
}
exports.sub = sub;
function mult() {
    console.clear();
    console.log("This operation consists of multiplying 2 numbers: a * b\n");
    readline_sync_1.default.keyInPause();
    console.clear();
    const a = readline_sync_1.default.questionInt("enter a value for 'a':");
    const b = readline_sync_1.default.questionInt("enter a value for 'b':");
    console.clear();
    return `The result of ${a} * ${b} is ${a * b}\n`;
}
exports.mult = mult;
function div() {
    console.clear();
    console.log("This operation consists of dividing 2 numbers: a / b\n");
    readline_sync_1.default.keyInPause();
    console.clear();
    const a = readline_sync_1.default.questionInt("enter a value for 'a':");
    const b = readline_sync_1.default.questionInt("enter a value for 'b':");
    console.clear();
    return `The result of ${a} / ${b} is ${a / b}\n`;
}
exports.div = div;
function pot() {
    console.clear();
    console.log("This operation consists of doing the power of a number: a**b\n");
    readline_sync_1.default.keyInPause();
    console.clear();
    const a = readline_sync_1.default.questionInt("enter a value for 'a':");
    const b = readline_sync_1.default.questionInt("enter a value for 'b':");
    console.clear();
    return `The result of ${a} elevated to ${b} is ${a ** b}\n`;
}
exports.pot = pot;
function root() {
    console.clear();
    console.log("This operation consists of taking the square root of a number: Math.sqrt(x)\n");
    readline_sync_1.default.keyInPause();
    console.clear();
    const x = readline_sync_1.default.questionInt("enter a value for 'x':");
    console.clear();
    return `The square root of ${x} is ${Math.sqrt(x)}\n`;
}
exports.root = root;
