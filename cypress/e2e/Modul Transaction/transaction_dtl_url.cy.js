describe('Payment Detail Transaction Detail Url Test', () =>{
    it('Url valid for payment detail id = 29', () =>{
        cy.viewport(1920, 1080)
        cy.visit('http://127.0.0.1:8000/login')
        cy.get('#email').type('akimichi4455@gmail.com')
        cy.get('#password').type('kokila123')
        cy.get(':nth-child(2) > form > .btn').click()
        cy.url().should('be.equal', 'http://127.0.0.1:8000/admin')
        cy.get(':nth-child(4) > .px-sm-0').click()
        cy.get(':nth-child(4) > .submenu > :nth-child(2) > .nav-link').click()
        cy.url().should('be.equal', 'http://127.0.0.1:8000/transaction_dtl')
    })
})