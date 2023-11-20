// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([
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
            type: 'input',
            name: 'username',
            message: 'What is your Github username?',
        },
        {
            type: "list",
            name: "license",
            message: "What license does our project have?",
            choices: ["MIT", "Apache License 2.0", "GNU General Public License 3.0", "BSD 2-Clause", "BSD 3-Cause", "Boost 1.0", "Creative Commons Zero 1.0", "Eclipse Public 1.0", "None"]
        },
    ]);
};

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) console.error(err);
        console.log('The file has been saved!')});
}

// TODO: Create a function to initialize app
function init() {
    questions()
    .then((answers) => writeToFile('README.md', generateMarkdown(answers)))
}

// Function call to initialize app
init();
