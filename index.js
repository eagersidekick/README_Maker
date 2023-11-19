// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'username',
            message: 'What is your Github username?',
        },
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your application or webpage?',
        },
        {
            type: 'input',
            name: 'description',
            message: 'Input a brief description of your application:',
        },
        {
            type: 'input',
            name: 'install',
            message: 'Input installation instructions:',
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Input usage instructions:',
        },
        {
            type: 'input',
            name: 'contributors',
            message: 'Who contributed to your repository?',
        },
        {
            type: 'input',
            name: 'tests',
            message: 'Input required tests:',
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email address?',
        },
        {
            type: "list",
            name: "license",
            message: "What license does our project have?",
            choices: ["MIT", "APACHE2.0", "Boost1.0", "GLP3.0", "BSD2", "BSD3", "None"]
        },
    ]);
};

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
