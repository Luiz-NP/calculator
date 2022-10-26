import readline from "readline-sync";
import { sum, sub, mult, div, pot, root } from "./math";

const options: string [] = ["sum", "subtraction", "multiplication", "division", "potentiation", "rooting"];
let option: number;

do {
    option = readline.keyInSelect(options, "Which operation do you want to do?");

    switch(option) {
        case 0: {
            console.log(sum());
            readline.keyInPause();
        }
        break;
        case 1: {
            console.log(sub());
            readline.keyInPause();
        }
        break;
        case 2: {
            console.log(mult());
            readline.keyInPause();
        }
        break;
        case 3: {
            console.log(div());
            readline.keyInPause();
        }
        break;
        case 4: {
            console.log(pot());
            readline.keyInPause();
        }
        break;
        case 5: {
            console.log(root());
            readline.keyInPause();
        }
    }
} while(option != -1);

