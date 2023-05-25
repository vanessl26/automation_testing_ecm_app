describe('Add Item Test Cases for Admin', ()=>{
    it('Add item valid', () =>{
        cy.viewport(1920, 1080)
        cy.visit('http://127.0.0.1:8000/login')
        cy.get('#email').type('akimichi4455@gmail.com')
        cy.get('#password').type('kokila123')
        cy.get(':nth-child(2) > form > .btn').click()
        cy.url().should('be.equal', 'http://127.0.0.1:8000/admin')
        cy.get(':nth-child(3) > .px-sm-0 > .ms-1').click()
        cy.get(':nth-child(3) > .submenu > :nth-child(1) > .nav-link').click()
        cy.get('.col-md-4 > .btn').click()
        cy.get('.form-group > :nth-child(1) > .form-control').type('Test Item Baru')
        cy.get(':nth-child(4) > .form-control').type('10')
        cy.get(':nth-child(5) > .form-control').type('1000')
        cy.get(':nth-child(6) > .form-control').click().type('2026-12-25')
        cy.get('.modal-footer > .btn-primary').click()
        cy.contains('success').should('exist')
    })

    it('Add item but item name is empty', () =>{
        cy.viewport(1920, 1080)
        cy.visit('http://127.0.0.1:8000/login')
        cy.get('#email').type('akimichi4455@gmail.com')
        cy.get('#password').type('kokila123')
        cy.get(':nth-child(2) > form > .btn').click()
        cy.url().should('be.equal', 'http://127.0.0.1:8000/admin')
        cy.get(':nth-child(3) > .px-sm-0 > .ms-1').click()
        cy.get(':nth-child(3) > .submenu > :nth-child(1) > .nav-link').click()
        cy.get('.col-md-4 > .btn').click()
        //cy.get('.form-group > :nth-child(1) > .form-control').type('Test Item Baru')
        cy.get(':nth-child(4) > .form-control').type('10')
        cy.get(':nth-child(5) > .form-control').type('1000')
        cy.get(':nth-child(6) > .form-control').click().type('2026-12-25')
        cy.get('.modal-footer > .btn-primary').click()
        cy.get('.modal-header').should('exist')
    })

    it('Add item but stock empty', () =>{
        cy.viewport(1920, 1080)
        cy.visit('http://127.0.0.1:8000/login')
        cy.get('#email').type('akimichi4455@gmail.com')
        cy.get('#password').type('kokila123')
        cy.get(':nth-child(2) > form > .btn').click()
        cy.url().should('be.equal', 'http://127.0.0.1:8000/admin')
        cy.get(':nth-child(3) > .px-sm-0 > .ms-1').click()
        cy.get(':nth-child(3) > .submenu > :nth-child(1) > .nav-link').click()
        cy.get('.col-md-4 > .btn').click()
        cy.get('.form-group > :nth-child(1) > .form-control').type('Test Item Baru')
        //cy.get(':nth-child(4) > .form-control').type('10')
        cy.get(':nth-child(5) > .form-control').type('1000')
        cy.get(':nth-child(6) > .form-control').click().type('2026-12-25')
        cy.get('.modal-footer > .btn-primary').click()
        cy.get('.modal-header').should('exist')
    })

    it('Add item but price is empty', () =>{
        cy.viewport(1920, 1080)
        cy.visit('http://127.0.0.1:8000/login')
        cy.get('#email').type('akimichi4455@gmail.com')
        cy.get('#password').type('kokila123')
        cy.get(':nth-child(2) > form > .btn').click()
        cy.url().should('be.equal', 'http://127.0.0.1:8000/admin')
        cy.get(':nth-child(3) > .px-sm-0 > .ms-1').click()
        cy.get(':nth-child(3) > .submenu > :nth-child(1) > .nav-link').click()
        cy.get('.col-md-4 > .btn').click()
        cy.get('.form-group > :nth-child(1) > .form-control').type('Test Item Baru')
        cy.get(':nth-child(4) > .form-control').type('10')
        //cy.get(':nth-child(5) > .form-control').type('1000')
        cy.get(':nth-child(6) > .form-control').click().type('2026-12-25')
        cy.get('.modal-footer > .btn-primary').click()
        cy.get('.modal-header').should('exist')
    })
})