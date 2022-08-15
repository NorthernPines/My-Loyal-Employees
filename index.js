const inquirer = require('inquirer');
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
let team = [];
console.log("\n  Manager\n-----------")
inquirer
    .prompt([
        {
            type: 'input',
            message: 'Please enter the manager\'s name',
            name: 'name',
        },
        {
            type: 'input',
            message: 'Please enter the manager\'s ID',
            name: 'id',
        },
        {
            type: 'input',
            message: 'Please enter the manager\'s email',
            name: 'email',
        },
        {
            type: 'input',
            message: 'Please enter the manager\'s office number',
            name: 'office',
        },
        {
            type: 'list',
            message: 'Do you have another employee to enter?',
            name: 'choice',
            choices: ['Create Engineer', 'Create Intern', 'no more employees']
        },
    ])
    .then((data) => {
        const manager = new Manager(data.name, data.id, data.email, data.office);
        team.push(manager);
        inputNext(data.choice);
    })

    function inputNext(choice) {
        if (choice === 'Create Engineer') {
        // for creating engineer
            console.log("\n  Engineer\n------------")
            inquirer
                .prompt([
                    {
                        type: 'input',
                        message: 'Please enter the engineer\'s name',
                        name: 'name',
                    },
                    {
                        type: 'input',
                        message: 'Please enter the engineers\'s ID',
                        name: 'id',
                    },
                    {
                        type: 'input',
                        message: 'Please enter the engineers\'s email',
                        name: 'email',
                    },
                    {
                        type: 'input',
                        message: 'Please enter the engineers\'s GitHub',
                        name: 'github',
                    },
                    {
                        type: 'list',
                        message: 'Do you have another employee to enter?',
                        name: 'choice',
                        choices: ['Create Engineer', 'Create Intern', 'no more employees']
                    },
                ])
                .then((data) => {
                    const engineer = new Engineer(data.name, data.id, data.email, data.github);
                    team.push(engineer);
                    inputNext(data.choice);
                 })
        }   else if (choice === 'Create Intern') {
            // for creating an intern
            console.log("\n  Intern\n----------");
            inquirer
                .prompt([
                    {
                        type: 'input',
                        message: 'Please enter the interns\'s name',
                        name: 'name',
                    },
                    {
                        type: 'input',
                        message: 'Please enter the interns\'s ID',
                        name: 'id',
                    },
                    {
                        type: 'input',
                        message: 'Please enter the interns\'s email',
                        name: 'email',
                    },
                    {
                        type: 'input',
                        message: 'Please enter the interns\'s school',
                        name: 'school',
                    },
                    {
                        type: 'list',
                        message: 'Do you have another employee to enter?',
                        name: 'choice',
                        choices: ['Create Engineer', 'Create Intern', 'no more employees']
                    },
                ])
                .then((data) => {
                    const intern = new Intern(data.name, data.id, data.email, data.school);
                    team.push(intern);
                    inputNext(data.choice);
                })
        } else {
            console.log(team);
        }
    }