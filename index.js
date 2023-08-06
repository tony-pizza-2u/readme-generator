// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const generateMkd = require('./utils/generateMarkdown')

// TODO: Create an array of questions for user input
const questions = [

    {
        type: 'input',
        name: "title",
        message: "What is the title of your project?"
    },
    {
        type: 'input',
        name: "description",
        message: "What is the description of your project? Please explain what you learned, what problems this solves, and how it can be used. Include any screenshots within this section."
    },
    {
        type: 'input',
        name: "install",
        message: "What packages are required to run your project? Is there anything the user needs to know about installation?"
    },
    {
        type: 'input',
        name: "credits",
        message: "Project credits, sources, and tutorials should be listed here."
    },
    {
        type: 'input',
        name: 'license',
        message: "Insert high-quality README into this section"

    }

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data)
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((responses) => {
        console.log(responses);
        writeToFile('NewREADME.md', generateMkd({...responses}))
    })
}

// Function call to initialize app
init();

