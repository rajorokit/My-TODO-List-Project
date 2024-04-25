#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
let todoList = [];
let conditions = true;
console.log(chalk.magenta.bold("\n\t\t\t WELCOME To Tahira Shoaib - Todo- List Applaication \n"));
while (conditions) {
    let addTask = await inquirer.prompt([
        {
            name: "task",
            type: "input",
            message: "Enter Your New Task: "
        }
    ]);
    todoList.push(addTask.task);
    console.log(`${addTask.task} Task added in Todo-List successfully`);
    let addMoreTask = await inquirer.prompt([
        {
            name: "addmore",
            type: "confirm",
            message: " Do You want to add more task ?",
            default: "False"
        }
    ]);
    conditions = addMoreTask.addmore;
}
console.log("Your Updated Todo-List:", todoList);
