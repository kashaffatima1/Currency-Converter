import inquirer from "inquirer";
const currency = {
    "USD": 1, //BASE CURRENCY
    "EURO": 1.92,
    "GBP": 1.36,
    "AUD": 0.67,
    "PKR": 278.25,
    "INR": 0.014,
    "AED": 0.27,
};
let useranswer = await inquirer.prompt([
    {
        type: "list",
        message: "Enter from currency",
        name: "from",
        choices: ["USD", "EURO", "GBP", "AUD", "PKR", "INR", "AED"]
    },
    {
        type: "list",
        message: "Enter to currency",
        name: "to",
        choices: ["USD", "EURO", "GBP", "AUD", "PKR", "INR", "AED"],
    },
    {
        type: "number",
        message: "Enter your amount",
        name: "amount",
    },
]);
const fromamount = useranswer.amount * currency[useranswer.from];
const toamount = fromamount / currency[useranswer.to];
console.log(`Converted amount from ${useranswer.from} to ${useranswer.to}: ${toamount}`);
