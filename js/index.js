//NPM

const inquirer = require("inquirer");
inquirer.registerPrompt('selectLine', require('inquirer-selectLine'));
const chalk = require("chalk");
const figlet = require("figlet");
const app = express("express");
const mysql = require("mysql");

//Add a script intro

const init = () => {
  console.log(
    chalk.green(
      figlet.textSync("Node JS CLI", {
        font: "Ghost",
        horizontalLayout: "default",
        verticalLayout: "default"
      })
    )
  );
}

const run = async () => {
  "EMPLOYEE%nMANAGER";
  init();
};

'use strict';

const inquirer = require('inquirer');
inquirer.registerPrompt('selectLine', require('../index'));

const firstQuestion = {
  type: 'selectLine',
  message: 'Where add line?',
  name: 'line',
  choices: ['first', 'second', 'third', 'fourth'],
};

const secondQuestion = {
  type: 'selectLine',
  message: 'After which line?',
  name: 'after',
  choices: ['line 1', 'line 2', 'last line'],
  placeholder: index => index === 0 ? 'At first line' : `After: '${secondQuestion.choices[index - 1]}'`,
};