describe('Account Management', () => {
    //add data test cases
    it('Edit full name only', ()=>{
        cy.viewport(1920, 1080)
        cy.visit('http://127.0.0.1:8000/login')
        cy.get('#email').type('vanessa.angelica@student.umn.ac.id')
        cy.get('#password').type('12345')
        cy.get(':nth-child(2) > form > .btn').click()
        cy.url().should('be.equal', 'http://127.0.0.1:8000/admin')
        cy.get('[href="admin/edit/55551"] > .fa-regular').click()
        cy.get('.mt-5 > .form-control').clear().type('Nama Baru')
        cy.get(':nth-child(3) > .btn').click()
        cy.contains('success').should('exist')
    })

    it('Edit phone number only', ()=>{
        cy.viewport(1920, 1080)
        cy.visit('http://127.0.0.1:8000/login')
        cy.get('#email').type('vanessa.angelica@student.umn.ac.id')
        cy.get('#password').type('12345')
        cy.get(':nth-child(2) > form > .btn').click()
        cy.url().should('be.equal', 'http://127.0.0.1:8000/admin')
        cy.get('[href="admin/edit/55551"] > .fa-regular').click()
        cy.get(':nth-child(4) > .form-control').clear().type('6789')
        cy.get(':nth-child(3) > .btn').click()
        cy.contains('success').should('exist')
    })

    it('Edit user status only', ()=>{
        cy.viewport(1920, 1080)
        cy.visit('http://127.0.0.1:8000/login')
        cy.get('#email').type('vanessa.angelica@student.umn.ac.id')
        cy.get('#password').type('12345')
        cy.get(':nth-child(2) > form > .btn').click()
        cy.url().should('be.equal', 'http://127.0.0.1:8000/admin')
        cy.get('[href="admin/edit/55551"] > .fa-regular').click()
        cy.get(':nth-child(5) > .form-select').select('Inactive')
        cy.get(':nth-child(3) > .btn').click()
        cy.contains('success').should('exist')
    })

    it('Edit role staff', ()=>{
        cy.viewport(1920, 1080)
        cy.visit('http://127.0.0.1:8000/login')
        cy.get('#email').type('vanessa.angelica@student.umn.ac.id')
        cy.get('#password').type('12345')
        cy.get(':nth-child(2) > form > .btn').click()
        cy.url().should('be.equal', 'http://127.0.0.1:8000/admin')
        cy.get('[href="admin/edit/55551"] > .fa-regular').click()
        cy.get('.mb-5 > .form-select').select('Staff')
        cy.get(':nth-child(3) > .btn').click()
        cy.contains('success').should('exist')
    })

    it('Edit role user', ()=>{
        cy.viewport(1920, 1080)
        cy.visit('http://127.0.0.1:8000/login')
        cy.get('#email').type('vanessa.angelica@student.umn.ac.id')
        cy.get('#password').type('12345')
        cy.get(':nth-child(2) > form > .btn').click()
        cy.url().should('be.equal', 'http://127.0.0.1:8000/admin')
        cy.get('[href="admin/edit/55551"] > .fa-regular').click()
        cy.get('.mb-5 > .form-select').select('User')
        cy.get(':nth-child(3) > .btn').click()
        cy.contains('success').should('exist')
    })
})