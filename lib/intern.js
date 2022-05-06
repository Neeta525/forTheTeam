const Employee = require("./employee");

class Intern extends Employee {
    constructor (name, idNum, email, school) {
        super (name, idNum, email, school);
        this.school = school;
    }
    getSchool() {
        return this.school;
    }
    getJobTitle() {
        return "Intern";
    }
}
module.exports = Intern;