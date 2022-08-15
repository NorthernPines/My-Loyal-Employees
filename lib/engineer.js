const Employee = require('./employee');

class Engineer extends Employee {
    constructor(name, id, email, gitHub) {
        super(name, id, email);
        this.gitHub = gitHub;
    }

    addEngineer() {
        let html = 
`<div class="card" style="width: 18rem;">
<div class="card-body">
  <h5 class="card-title">${this.name}</h5>
  <p class="card-text">Engineer</p>
</div>
<ul class="list-group list-group-flush">
  <li class="list-group-item">ID: ${this.id}</li>
  <li class="list-group-item">Email: ${this.email}</li>
  <li class="list-group-item">GitHub: ${this.gitHub}</li>
</ul>
</div>`

        return html;  
    }
}

module.exports = Engineer;