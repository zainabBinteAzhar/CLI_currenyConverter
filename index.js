#!/usr/bin/env node
import chalk from "chalk";
import inquirer from "inquirer";
import chalkanimation from "chalk-animation";
import figlet from "figlet";
import gradient from "gradient-string";
const sleep = (ms = 2000) => new Promise((r) => setTimeout(r, ms));
async function Title() {
    const rainbowTitle = chalkanimation.rainbow("\nCURRENCY CONVERTER\n");
    await sleep();
    rainbowTitle.stop();
}
function Exit() {
    console.clear();
    const msg = "\nDo Visit Again!\n";
    figlet(msg, (_err, data) => {
        console.log(gradient.pastel.multiline(data));
    });
}
let currency = {
    "PKR": 278.23,
    "USD": 1,
    "EUR": 0.938,
    "DHS": 3.673,
};
await Title();
let choice, fromAmt, toAmt, amt, convertedAmt;
do {
    console.log(chalk.magenta("\n**********MENU**********\n"));
    let options = await inquirer.prompt([
        {
            name: "data",
            type: "list",
            message: chalk.bgMagenta("\nSelect the Option: "),
            choices: ["Convert Currency", "Exit"]
        }
    ]);
    choice = options.data;
    if (choice === "Convert Currency") {
        console.log(chalk.greenBright("\n*****Convert Currency*****"));
        let userInputs = await inquirer.prompt([
            {
                name: "from",
                type: "list",
                message: chalk.bgMagenta("\nConvert from: "),
                choices: ["PKR", "USD", "EUR", "DHS"],
            },
            {
                name: "to",
                type: "list",
                message: chalk.bgMagenta("\nTo: "),
                choices: ["PKR", "USD", "EUR", "DHS"],
            },
            {
                name: "amount",
                type: "number",
                message: chalk.bgMagenta("\nAmount to convert: "),
            }
        ]);
        fromAmt = currency[userInputs.from];
        console.log(fromAmt);
        toAmt = currency[userInputs.to];
        console.log(toAmt);
        amt = userInputs.amount;
        console.log(amt);
        convertedAmt = (amt / fromAmt) * toAmt;
        console.log(convertedAmt);
    }
    else if (choice === "Exit") {
        Exit();
    }
} while (choice != "Exit");
