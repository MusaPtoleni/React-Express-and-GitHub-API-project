const expect = require('chai').expect
const username = require('../controllers/profiles')

// testing if Github user name is at least 12 letters long
// unit testing
describe("Github name", () => {
    it("Github username length to be 12",async () => {
        const name = await username.profileTest();
        expect(name.length).to.be.at.least(12);
    })
});
