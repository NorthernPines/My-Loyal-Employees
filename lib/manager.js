const Employee = require('./employee');

class Manager extends Employee {
    constructor(name, id, email, officeNum) {
        super(name, id, email);
        this.officeNum = officeNum;
    }

    addManager() {
        let html = 
`<div class="card m-3 p-2 bg-primary" style="width: 21rem;">
<div class="card-body">
  <h5 class="card-title">${this.name}</h5>
  <p class="card-text">Manager</p>
</div>
<ul class="list-group list-group-flush">
  <li class="list-group-item bg-primary">ID: ${this.id}</li>
  <li class="list-group-item bg-primary">Email:  <a class="link-dark" href="mailto:${this.email}">${this.email}</a></li>
  <li class="list-group-item bg-primary">Office Number: ${this.officeNum}</li>
</ul>
</div>`

        return html;  
    }
}

module.exports = Manager;