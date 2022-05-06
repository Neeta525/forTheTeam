const Employee = require("../lib/employee")

describe("Employee", () => {
    describe("Initialization", () => {
        it('should create an object', () => {
            const testName = 'Pinky';
            const testIdNum = '12345';
            const testEmail = 'pinky@takeovertheworld.com';
            const className = 'Employee';
            const testEmployee = new Employee(testName, testIdNum, testEmail);

            it('has the expected name', () => {
                expect(testEmployee.getName()).toEqual(testName);
            });
            it('has the expected IdNum', () => {
                expect(testEmployee.getIdNum()).toEqual(testIdNum);
            });
            it('has the expected email', () => {
                expect(testEmployee.getEmail()).toEqual(testEmail);
            });
            it('has the expected jobTitle', () => {
                expect(testEmployee.getJobtitle()).toEqual(className);
            });
        });
    });
});