const Employee = require('../lib/employee.js');
const Manager = require('../lib/employee.js');

describe("Manager", () => {
    describe("Return", () => {
      it("should return the string literal to go into the html file", () => {
        const manager = new manager('billy', '34', 'billybob@gmail.com', '302');
        const html =
`<div class="card m-3 p-2 bg-primary" style="width: 21rem;">
<div class="card-body">
    <h5 class="card-title">billy</h5>
    <p class="card-text">Manager</p>
</div>
<ul class="list-group list-group-flush">
    <li class="list-group-item bg-primary">ID: 34</li>
    <li class="list-group-item bg-primary">Email:  <a class="link-dark" href="mailto:billybob@gmail.com">billybob@gmail.com</a></li>
    <li class="list-group-item bg-primary">Office Number: 302</li>
</ul>
</div>`
        // Verify that the new object has the correct properties
        expect(dayCare).toEqual({ children: [], capacity: 3, ageLimit: 6 });
      });
    });
});