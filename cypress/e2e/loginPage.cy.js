describe('Login Page', () => {
    beforeEach(() => {
        cy.visit('http://localhost:4200/#/home')
    })
    it('login user', () => {
      cy.login('murilocoelho', 'teste@123')
    })
    it('error when login user', () => {  
      cy.contains('User name is required!').should('be.visible')
      cy.contains('Password is required!').should('be.visible')
    })
  })