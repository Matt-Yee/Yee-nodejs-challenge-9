const inquirer = require('inquirer');
const fs = require('fs');

require('inquirer');
require('fs');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please enter a description of your project.'
    },
    {
        type: 'input',
        name: 'table of contents',
        message: 'Please enter the table of contents.'
    },
    {
        type: 'input',
        name: 'installation instructions',
        message: 'Please enter installation instructions.'
    },
    {
        type: 'input',
        name: 'usage information',
        message: 'Please enter usage information.'
    },
    {
        type: 'list',
        name: 'license',
        message: 'Please select license information.',
        choices: ['MIT', 'Apache', 'GPL', 'BSD', 'None']
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Please enter contributing information.'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Please enter tests information.'
    },
    {
        type: 'input',
        name: 'questions',
        message: 'Please enter questions information.'
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
    err ? console.error(err) : console.log('README Created.')
    );
};

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt([
        "What is the title of your project?",
        "Please enter a description of your project.",
        "Please enter the table of contents.",
        "Please enter installation instructions.",
        "Please enter usage information.",
        "Please enter license information.",
        "Please enter contributing information.",
        "Please enter tests information.",
        "Please enter questions information."
    ]).then((answers) => {
        const readme = generateReadme(answers);
        writeToFile('README.md', readme);
    }  
    )};

// Function call to initialize app
function init() {
    inquirer.prompt(questions).then((answers) => {
        const readme = generateReadme(answers);
        writeToFile('README.md', readme);
        }
    )};

// Function to generate README
function generateReadme(answers) {
    return `# ${answers.title}
        ${answers.description}
        ## Table of Contents
        ${answers['table of contents']}
        ## Installation Instructions
        ${answers['installation instructions']}
        ## Usage Information
        ${answers['usage information']}
        ## License
        ${answers.license}
        ## Contributing
        ${answers.contributing}
        ## Tests
        ${answers.tests}
        ## Questions
        ${answers.questions}`;
}

init();