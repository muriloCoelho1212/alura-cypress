describe('Login Page', () => {
    beforeEach(() => {
        cy.visit('http://localhost:4200/#/home')

        cy.intercept('POST', 'http://localhost:3000/user/login', {
            statusCode: 401
        }).as('stubPost')
    })
    
    it('login user', () => {
      cy.login('murilocoelho', 'teste@123')
    })
    it('error when some field is empty', () => {  
      cy.contains('User name is required!').should('be.visible')
      cy.contains('Password is required!').should('be.visible')
    })
    it('unauthorized when login user is invalid', () => {  
      cy.login('teste', '12345678')
      cy.wait('@stubPost')
    })
  })