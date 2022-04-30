const fs = require('fs');
const inquirer = require('inquirer');
const genHTML = require('.dist/genHTML');



//Questions
const questions = [
{
    type: 'input',
    name: 'name',
    message: "Type in the employee's name.",
    },
{
    type: 'input',
    name: 'idNum',
    message: "Enter the employee's 5-digit identification number.",
    },
{
    type: 'input',
    name: 'email',
    message: "Enter the employee's work email.",
    },
{
    type: 'list',
    name: 'jobTitle',
    message: "What is the employee's job title?",
    choices: ['manager', 'engineer','intern', 'teleporter'],
    },
]

//Unique to each employee questions
questionsMgr = [
{
    type: 'input',
    name: 'officeNum',
    message: "Enter the manager's office number.",
    },
]  

questionsEng = [
{
    type: 'input',
    name: 'github',
    message: "Enter the engineer's GitHub username.",
    },    
]

questionsInt = [
{
    type: 'input',
    name: 'school',
    message: "Enter the school the intern is currently enrolled in.",
    },
]

function genHTML(html) {
    fs.writeFile('./genHTML.html', html, (err) => {
        err ? console.error(err) : console.log('Generating HTML')
    })
}

function init() {
    inquirer
    .prompt()
    .then
    }
}