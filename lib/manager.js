const Employee = require('./employee');

class Manager extends Employee {
    constructor(name, id, email, officeNum) {
        super(name, id, email);
        this.officeNum = officeNum;
    }

    addManager() {
        let html = 
`<div class="card" style="width: 18rem;">
<div class="card-body">
  <h5 class="card-title">${this.name}</h5>
  <p class="card-text">Manager</p>
</div>
<ul class="list-group list-group-flush">
  <li class="list-group-item">ID: ${this.id}</li>
  <li class="list-group-item">Email: ${this.email}</li>
  <li class="list-group-item">Office Number: ${this.officeNum}</li>
</ul>
</div>`

        return html;  
    }
}

module.exports = Manager;