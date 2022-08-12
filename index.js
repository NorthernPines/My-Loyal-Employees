const inquirer = require('inquirer');
let team = [];

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
    })