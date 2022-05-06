const Intern = require("../lib/intern")

describe("Intern", () => {
    describe("Initialization", () => {
        it('should create an object', () => {
            const testName = 'Pinky';
            const testIdNum = '12345';
            const testEmail = 'pinky@takeovertheworld.com';
            const className = 'Intern';
            const testSchool = 'Brain Academy'
            const testIntern = new Employee(testName, testIdNum, testEmail, testSchool);

            it('has the expected name', () => {
                expect(testIntern.getName()).toEqual(testName);
            });
            it('has the expected IdNum', () => {
                expect(testIntern.getIdNum()).toEqual(testIdNum);
            });
            it('has the expected email', () => {
                expect(testIntern.getEmail()).toEqual(testEmail);
            });
            it('has the expected jobTitle', () => {
                expect(testIntern.getJobtitle()).toEqual(className);
            });
            it('has the expected school', () => {
                expect(testIntern.getSchool()).toEqual(testSchool);
            });
        });
    });
});