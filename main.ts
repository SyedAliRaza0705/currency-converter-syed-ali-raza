import inquirer from "inquirer";

let exchange_rate: any = {
    "USD": 1, // Base Currency
    "JYP": 113, // japenese Yen
    "AUD": 1.65, // Autralain Dollar
    "PKR": 280 // Pakistani Rupees 
}
let user_answer = await inquirer.prompt([
    {
        name: "from_currency",
        type: "list",
        message: "Select your currency to convrt from",
        choices: ["USD", "JYP", "AUD", "PKR"]
    },
    {
        name: "to_currency",
        type: "list",
        message: "Select your currency to convrt into",
        choices: ["USD", "JYP", "AUD", "PKR"]

    },
    {
        name: "amount",
        type: "input",
        message: "Enter your amount to convrt ",

    }
]);

let from_amount=exchange_rate[user_answer.from_currency]
let to_amount=exchange_rate[user_answer.to_currency]
let amount = user_answer.amount

let baseAmount = amount / from_amount
let convertedAmount = baseAmount * to_amount

console.log(`Converted Amount = ${convertedAmount}`)