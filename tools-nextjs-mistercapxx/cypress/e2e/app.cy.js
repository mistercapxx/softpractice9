describe('Demo  App Test', () => {
  
    it('Start page successfully loads', () => {
      cy.visit('/')
    })
  
    it('Start page hase desired content', () => {
      cy.visit('/');
      cy.get('nav').should('contain', 'Travel Journal');
    })
  
  })