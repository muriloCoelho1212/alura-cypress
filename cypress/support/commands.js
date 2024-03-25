Cypress.Commands.add('login', (userName, password) => {
    cy.get('[data-test="loginUserName"]').type(userName)
    cy.get('[data-test="loginPassword"]').type(password)
    cy.contains('[data-test="loginBtn"]', 'login').click()
})
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })