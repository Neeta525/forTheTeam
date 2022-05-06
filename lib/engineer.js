const Employee = require("./employee");

class Engineer extends Employee {
    constructor (name, idNum, email, github) {
        super (name, idNum, email);
        this.github = github;
    }
    getGitHub() {
        return this.github;
    }
    getJobTitle() {
        return "Engineer";
    }
}
module.exports = Engineer;