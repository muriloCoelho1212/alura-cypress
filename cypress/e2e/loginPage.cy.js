describe('Login Page', () => {
    it('login user', () => {
      cy.visit('http://localhost:4200/#/home')
    
      cy.get('[data-test="loginUserName"]').type('murilocoelho')
      cy.get('[data-test="loginPassword"]').type('teste@123')
  
      cy.contains('[data-test="loginBtn"]', 'login').click()
    })
  
    it('error when login user', () => {
      cy.visit('http://localhost:4200/#/home')
  
      cy.contains('User name is required!').should('be.visible')
      cy.contains('Password is required!').should('be.visible')
    })
  })