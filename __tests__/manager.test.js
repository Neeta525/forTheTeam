const Manager = require("../lib/manager")

describe("Manager", () => {
    describe("Initialization", () => {
        it('should create an object', () => {
            const testName = 'Pinky';
            const testIdNum = '12345';
            const testEmail = 'pinky@takeovertheworld.com';
            const className = 'Employee';
            const testOfficeNum = '369'
            const testManager = new Employee(testName, testIdNum, testEmail, testOfficeNum);

            it('has the expected name', () => {
                expect(testManager.getName()).toEqual(testName);
            });
            it('has the expected IdNum', () => {
                expect(testManager.getIdNum()).toEqual(testIdNum);
            });
            it('has the expected email', () => {
                expect(testManager.getEmail()).toEqual(testEmail);
            });
            it('has the expected jobTitle', () => {
                expect(testManager.getJobtitle()).toEqual(className);
            });
            it('has the expected officeNum', () => {
                expect(testManager.getOfficeNum()).toEqual(testOficeNum);
            });
        });
    });
});