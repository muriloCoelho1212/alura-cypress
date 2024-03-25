const { beforeEach } = require("mocha");

describe("Register Page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:4200");
  });
  const users = require("../fixtures/users.json");
  users.forEach((user) => {
    it("register new user", () => {
      cy.get('[data-test="register"]').click();

      cy.get('[data-test="email"]').type(user.email);
      cy.get('[data-test="fullName"]').type(user.fullName);
      cy.get('[data-test="registerUserName"]').type(user.userName);
      cy.get('[data-test="registerPassword"]').type(user.password);

      cy.get('[data-test="btnRegister"]').click();
    });
  });
  it("error when register new user", () => {
    cy.contains("a", "Register now").click();
    cy.contains("button", "Register").click();
    cy.contains("button", "Register").click();

    cy.contains("Email is required!").should("be.visible");
    cy.contains("Full name is required!").should("be.visible");
    cy.contains("User name is required!").should("be.visible");
    cy.contains("Password is required!").should("be.visible");
  });
});
