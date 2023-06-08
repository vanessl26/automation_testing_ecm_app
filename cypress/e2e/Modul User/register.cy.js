describe('Register Test Cases', () => {
    it('Validating Register Page', () => {
        cy.visit('http://127.0.0.1:8000/register')
        //Validating objects needed for forgot password
        cy.get(':nth-child(1) > .form-control').should('exist')
        cy.get('.form-group > :nth-child(2) > .form-control').should('exist')
        cy.get(':nth-child(3) > .form-control').should('exist')
        cy.get('#exampleFormControlTextarea1').should('exist')
        cy.get(':nth-child(5) > .form-control').should('exist')
        cy.get('.col > .btn').should('exist')
        cy.get('.small > .text-light').should('exist')
    })
    
    it('All field valid', () => {
        cy.visit('http://127.0.0.1:8000/register')
        cy.get(':nth-child(1) > .form-control').type('Nama Lengkap')
        cy.get('.form-group > :nth-child(2) > .form-control').type('irene.joseph@student.umn.ac.id')
        cy.get(':nth-child(3) > .form-control').type('123')
        cy.get('#exampleFormControlTextarea1').type('Di bumi')
        cy.get(':nth-child(5) > .form-control').type('12345')
        cy.get('.col > .btn').click()
    })

    it('Input email invalid', () => {
        cy.visit('http://127.0.0.1:8000/register')
        cy.get(':nth-child(1) > .form-control').type('Nama Lengkap')
        cy.get('.form-group > :nth-child(2) > .form-control').type('aaaa')
        cy.get(':nth-child(3) > .form-control').type('123')
        cy.get('#exampleFormControlTextarea1').type('Di bumi')
        cy.get(':nth-child(5) > .form-control').type('12345')
        cy.get('.col > .btn').click()
    })
    
    it('Phone number filled with alphabets', () => {
        cy.visit('http://127.0.0.1:8000/register')
        cy.get(':nth-child(1) > .form-control').type('Nama Lengkap')
        cy.get('.form-group > :nth-child(2) > .form-control').type('irene.joseph@student.umn.ac.id')
        cy.get(':nth-child(3) > .form-control').type('coba')
        cy.get('#exampleFormControlTextarea1').type('Di bumi')
        cy.get(':nth-child(5) > .form-control').type('12345')
        cy.get('.col > .btn').click()
    })

    it('Access to login page', () => {
        cy.visit('http://127.0.0.1:8000/register')
        //Validating objects needed for forgot password
        cy.get('.small > .text-light').click()
        cy.url().should('be.equal', 'http://127.0.0.1:8000/login')
    })
  })