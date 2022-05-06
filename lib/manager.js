const { of } = require("rxjs");
const Employee = require("./employee");

class Manager extends Employee {
    constructor (name, idNum, email, officeNum) {
        super (name, idNum, email, officeNum);
        this.officeNum = officeNum;
    }
    getOfficeNum() {
        return this.officeNum;
    }
    getJobTitle() {
        return "Manager";
    }
}
module.exports = Manager;