describe('Register Page', () => {
  it('register new user', () => {
    cy.visit('http://localhost:4200/#/home')

    cy.contains('[data-test="register"]').click()

    cy.get('[data-test="email"]').type('murilocoelho@gmail.com')
    cy.get('[data-test="fullName"]').type('Murilo Coelho')
    cy.get('[data-test="registerUserName"]').type('murilocoelho')
    cy.get('[data-test="registerPassword"]').type('teste@123')

    cy.contains('[data-test="btnRegister"]').click()
  })

  it('error when register new user', () => {
    cy.visit('http://localhost:4200/#/home')

    cy.contains('a', 'Register now').click()
    cy.contains('button', 'Register').click()
    cy.contains('button', 'Register').click()


    cy.contains('Email is required!').should('be.visible')
    cy.contains('Full name is required!').should('be.visible')
    cy.contains('User name is required!').should('be.visible')
    cy.contains('Password is required!').should('be.visible')
  })
})