#!/usr/bin/env node

import inquirer from "inquirer";

import chalk from "chalk";

const currency:any = 
  {
    USD: 1,
    EUR: 0.94,
    PKR: 279,
    INR: 84,
    GBP: 0.80,
    Taka:109.30,
  };
  let condition = true;

  while(condition)
 { let usrAnswer = await inquirer.prompt(
    [
        {
            name: "from",
            message: `${chalk.bgRed.bold.italic("Enter currency you want to convert: ")}`,
            type: "list",
            choices: ["USD","EUR","PKR","INR","GBP","Taka"]
        },
        {
            name: "to",
            message: `${chalk.bgRed.bold.italic("Enter currency you want to convert in: ")}`,
            type: "list",
            choices: ["USD","EUR","PKR","INR","GBP","Taka"]
        },
        {
            name: "amount",
            message: `${chalk.bgRed.bold.italic("How much amount you want to convert: ")}`,
            type: "number"
        }
    ]
  );

  let toAmount = currency[usrAnswer.to];
  let fromAmount = currency[usrAnswer.from];
  let amount = usrAnswer.amount;
  
  let conversionAmount = amount / fromAmount;
  let convertedAmount = conversionAmount * toAmount;
  
  console.log(chalk.bgYellow.italic.underline(convertedAmount))
  
let ConvertAgain = await inquirer.prompt(
    {
        name: "action",
        message: "Choose An Action",
        type: "list",
        choices: ["Convert Again", "Exit"],
    }
);
 if(ConvertAgain.action === "Exit"){
      condition = false
      console.log(chalk.bgYellow.bold.italic.underline("Thank You For Using hasnainalvi Currency Converter."));
 };
};