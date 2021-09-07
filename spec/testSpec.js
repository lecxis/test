var {passwordIsValid,passwordStrength}=require('../src/index.js');

describe("Password is valid", () => {
    it("password exist", () => {
     // passwordIsValid('');
      expect(function(){passwordIsValid('')}).toThrow(new Error('password should exist'));
    });
    it("password should be longer than 8 characters", () => {
      // passwordIsValid('');
       expect(function(){passwordIsValid('abcdefgh')}).toThrow(new Error('password should be longer than than 8 characters'));
     });
     it("password should contain at least one lower case characters", () => {
      // passwordIsValid('');
       expect(function(){passwordIsValid('ABSGVTHSA')}).toThrow(new Error('password should have at least one lowercase letter'));
     });
    it("password should contain at least one upper case characters", () => {
      // passwordIsValid('');
       expect(function(){passwordIsValid('a1234b56789')}).toThrow(new Error('password should have at least one uppercase letter'));
     });
     it("password should contain at least one digit", () => {
      // passwordIsValid('');
       expect(function(){passwordIsValid('abghdbABaaa')}).toThrow(new Error('password should at least have one digit'));
     });
     it("password should contain at least one special character", () => {
      // passwordIsValid('');
       expect(function(){passwordIsValid('abghdbABaaa78')}).toThrow(new Error('password should have at least one special character'));
     });
     it("password should contain at least one whitespace character", () => {
      // passwordIsValid('');
       expect(function(){passwordIsValid('abghdbABa*aa78')}).toThrow(new Error('password should have at least one whitespace character'));
     });
});

describe("Password strength", () => {
    it("password is strong", () => {
     // passwordIsValid('');
      expect(passwordStrength('asdefg hh8FGi')).toBe('strong');
    });
});