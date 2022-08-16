const inquirer = require('inquirer');
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
const fs = require('fs');
let team = [];
let html = 
`<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>My-Loyal-Employees</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx" crossorigin="anonymous">
  </head>
  <body>
  <div class="bg-info p-5 rounded-lg">
    <h1 class="display-4 text-center">My Loyal Employees</h1>
    <p class="lead text-center">This is a simple page to display my employees and what you need to know about them</p>
  </div>
  <section class="d-flex flex-wrap mx-5 px-5 justify-content-evenly">
  `
 
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
            choices: ['Create Engineer', 'Create Intern', 'No more employees']
        },
    ])
    .then((data) => {
        const manager = new Manager(data.name, data.id, data.email, data.office);
        team.push(manager);
        html += manager.addManager();
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
                        choices: ['Create Engineer', 'Create Intern', 'No more employees']
                    },
                ])
                .then((data) => {
                    const engineer = new Engineer(data.name, data.id, data.email, data.github);
                    team.push(engineer);
                    html += engineer.addEngineer();
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
                        choices: ['Create Engineer', 'Create Intern', 'No more employees']
                    },
                ])
                .then((data) => {
                    const intern = new Intern(data.name, data.id, data.email, data.school);
                    team.push(intern);
                    html += intern.addIntern();
                    inputNext(data.choice);
                })
        } else {
            console.log();
            console.log(team);
            html += 
`
</section>
</body>
</html>`

            fs.writeFile('dist/index.html', html, (err) =>
            err ? console.error(err) : console.log("Go into the dist folder to see the html file you created")
            );
        }
    }