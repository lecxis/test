var passwordIsValid=require('../src/index.js');

describe("Password is valid", () => {
    it("password exist", () => {
      expect(passwordIsValid('mypass')).toBe(true);
    });
});