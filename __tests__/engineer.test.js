const Engineer = require("../lib/engineer")

describe("Engineer", () => {
    describe("Initialization", () => {
        it('should create an object', () => {
            const testName = 'Pinky';
            const testIdNum = '12345';
            const testEmail = 'pinky@takeovertheworld.com';
            const testGithub = 'PinkyBrainGithub'
            const className = 'Engineer';
            const testEngineer = new Employee(testName, testIdNum, testEmail, testGithub);

            it('has the expected name', () => {
                expect(testEngineer.getName()).toEqual(testName);
            });
            it('has the expected IdNum', () => {
                expect(testEngineer.getIdNum()).toEqual(testIdNum);
            });
            it('has the expected email', () => {
                expect(testEngineer.getEmail()).toEqual(testEmail);
            });
            it('has the expected jobTitle', () => {
                expect(testEngineer.getJobtitle()).toEqual(className);
            });
            it('has the expected github', () => {
                expect(testEngineer.getGithub()).toEqual(testGithub);
            });
        });
    });
});