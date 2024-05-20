import chalk from "chalk";
import inquirer from "inquirer";
let score = 0;
const quizQns = await inquirer.prompt([
    {
        name: "Q1",
        type: "list",
        message: "What is the correct way to check if two values are not equal in Typescript ?",
        choices: ["a = b", "a == b", "a !== b", "a === b"]
    },
    {
        name: "Q2",
        type: "list",
        message: "Which method of Inquirer.js is used to start the prompt Interface and receive user input ?",
        choices: ["start()", "run()", "prompt()", "init()"]
    },
    {
        name: "Q3",
        type: "list",
        message: "In Typescript which symbol is commonly used to terminate a statement ?",
        choices: [";", ".", ":", ","]
    },
    {
        name: "Q4",
        type: "list",
        message: "Which of the following character is commonly allowed in variable name in Typescript ?",
        choices: ["&", "@", "#", "$"]
    },
    {
        name: "Q5",
        type: "list",
        message: "Which operator is commonly used for string concatenation in Typescript ?",
        choices: ["/", "-", "''", "+"]
    }
]);
switch (quizQns.Q1) {
    case "a !== b":
        console.log("Your Answer is Correct !");
        ++score;
        break;
    default:
        console.log("Your Answer is Incorrect !");
}
switch (quizQns.Q2) {
    case "prompt()":
        console.log("Your Answer is Correct !");
        ++score;
        break;
    default:
        console.log("Your Answer is Incorrect !");
}
switch (quizQns.Q3) {
    case ";":
        console.log("Your Answer is Correct !");
        ++score;
        break;
    default:
        console.log("Your Answer is Incorrect !");
}
switch (quizQns.Q4) {
    case "$":
        console.log("Your Answer is Correct !");
        ++score;
        break;
    default:
        console.log("Your Answer is Incorrect !");
}
switch (quizQns.Q5) {
    case "+":
        console.log("Your Answer is Correct !\n");
        ++score;
        break;
    default:
        console.log("Your Answer is Incorrect !\n");
}
if (score == 1) {
    console.log(chalk.red.bold `Very Bad your Score is 2.`);
}
else if (score == 2) {
    console.log(chalk.red.bold `Bad your Score is 4.`);
}
else if (score == 3) {
    console.log(chalk.yellow.bold `Good your Score is 6.`);
}
else if (score == 4) {
    console.log(chalk.green.bold `Very Good your Score is 8.`);
}
else {
    console.log(chalk.green.bold `Very Good your Score is 10.`);
}
