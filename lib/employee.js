class Employee {
    constructor (name, idNum, email) {
        this.name = name;
        this.idNum = idNum;
        this.email = email;
    }
    getName() {
        return this.name;
    }
    getIdNum() {
        return this.idNum;
    }
    getEmail() {
        return this.email;
    }
    getJobTitle() {
        return 'Employee'
    }
}

module.exports = Employee;