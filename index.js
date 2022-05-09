const fs = require('fs');
const inquirer = require('inquirer');
const genHTML = require('./src/genHTML');
const { Console, clear } = require('console');
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');


var employees = []


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
    message: "Enter the employee's identification number.",
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
    choices: ['manager', 'engineer','intern'],
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

function askAgain () {
    return inquirer.prompt ([
        {
            type: "list",
            name: "again",
            message: "Would you like to add another employee?",
            choices: ["yes", "no"]
        }
    ])
    .then(response => {
        if (response.again === "yes") {
            init ()
        } else {
        const html = genHTML(employees)
    fs.writeFile('dist/genHTML.html', html, (err) => {
        err ? console.error(err) : console.log('Generating HTML')
    })
            return;
        }
    })
}


function init() {
    inquirer
    .prompt(questions)
    .then((response) => {
        // console.log(response);
        if (response.jobTitle === "manager") {
            inquirer.prompt (questionsMgr) 
            .then(managerInfo => {
                // console.log(managerInfo)
                const manager = new Manager (response.name, response.idNum, response.email, managerInfo.officeNum)
                employees.push (manager)
                // console.log(employees)
                askAgain();
            }) 
        } else if (response.jobTitle === "engineer") {
            inquirer.prompt (questionsEng)
            .then(engineerInfo => {
                const engineer = new Engineer (response.name, response.idNum, response.email, engineerInfo.github)
                employees.push (engineer)
                // console.log(employees)
                askAgain();
            })
        } else if (response.jobTitle === "intern") {
            inquirer.prompt (questionsInt)
            .then(internInfo => {
                const intern = new Intern (response.name, response.idNum, response.email, internInfo.school)
                employees.push (intern)
                // console.log(employees)
                askAgain();
            })
        }
    })
    }


    init()
