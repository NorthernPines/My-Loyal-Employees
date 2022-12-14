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
  <li class="list-group-item bg-success">Email: <a class="link-dark" href="mailto:${this.email}">${this.email}</a></li>
  <li class="list-group-item bg-success">GitHub: <a class="link-dark" href="https://github.com/${this.gitHub}" target="_blank">${this.gitHub}</a></li>
</ul>
</div>`

        return html;  
    }
}

module.exports = Engineer;