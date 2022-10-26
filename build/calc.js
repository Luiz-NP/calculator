"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const readline_sync_1 = __importDefault(require("readline-sync"));
const math_1 = require("./math");
const options = ["sum", "subtraction", "multiplication", "division", "potentiation", "rooting"];
let option;
do {
    option = readline_sync_1.default.keyInSelect(options, "Which operation do you want to do?");
    switch (option) {
        case 0:
            {
                console.log((0, math_1.sum)());
                readline_sync_1.default.keyInPause();
            }
            break;
        case 1:
            {
                console.log((0, math_1.sub)());
                readline_sync_1.default.keyInPause();
            }
            break;
        case 2:
            {
                console.log((0, math_1.mult)());
                readline_sync_1.default.keyInPause();
            }
            break;
        case 3:
            {
                console.log((0, math_1.div)());
                readline_sync_1.default.keyInPause();
            }
            break;
        case 4:
            {
                console.log((0, math_1.pot)());
                readline_sync_1.default.keyInPause();
            }
            break;
        case 5: {
            console.log((0, math_1.root)());
            readline_sync_1.default.keyInPause();
        }
    }
} while (option != -1);
