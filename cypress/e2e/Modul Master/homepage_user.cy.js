describe('Home Test Cases Module Master', ()=>{
  it('Redirect to flash sale', () =>{
      cy.viewport(1920, 1080)
      cy.visit('http://127.0.0.1:8000/login')
      cy.get('#email').type('limfort01@gmail.com')
      cy.get('#password').type('kokila123')
      cy.get(':nth-child(2) > form > .btn').click()
      cy.get('.ms-5 > .justify-content-end > .text-decoration-none').click()
      cy.url().should('be.equal', 'http://127.0.0.1:8000/flash_sale')
    })

  it('Redirect to product list', () =>{
    cy.viewport(1920, 1080)
      cy.visit('http://127.0.0.1:8000/login')
      cy.get('#email').type('limfort01@gmail.com')
      cy.get('#password').type('kokila123')
      cy.get(':nth-child(2) > form > .btn').click()
      cy.get('.text-center > .col-md > .text-decoration-none').click()
      //cy.url().should('be.equal', 'http://127.0.0.1:8000/flash_sale')
  })
})