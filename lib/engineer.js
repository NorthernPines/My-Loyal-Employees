const Employee = require('./employee');

class Engineer extends Employee {
    constructor(name, id, email, gitHub) {
        super(name, id, email);
        this.gitHub = gitHub;
    }

    addEngineer() {
        let html = 
`<div class="card m-3 p-2 bg-success" style="width: 21rem;">
<div class="card-body">
  <h5 class="card-title">${this.name}</h5>
  <p class="card-text">Engineer</p>
</div>
<ul class="list-group list-group-flush">
  <li class="list-group-item bg-success">ID: ${this.id}</li>
  <li class="list-group-item bg-success">Email: ${this.email}</li>
  <li class="list-group-item bg-success">GitHub: ${this.gitHub}</li>
</ul>
</div>`

        return html;  
    }
}

module.exports = Engineer;