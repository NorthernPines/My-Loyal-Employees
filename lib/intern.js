const Employee = require('./employee');

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
    }

    addIntern() {
        let html = 
`<div class="card m-3 p-2 bg-warning" style="width: 21rem;">
<div class="card-body">
  <h5 class="card-title">${this.name}</h5>
  <p class="card-text">Intern</p>
</div>
<ul class="list-group list-group-flush">
  <li class="list-group-item bg-warning">ID: ${this.id}</li>
  <li class="list-group-item bg-warning">Email: ${this.email}</li>
  <li class="list-group-item bg-warning">School: ${this.school}</li>
</ul>
</div>`

        return html;  
    }
}

module.exports = Intern;