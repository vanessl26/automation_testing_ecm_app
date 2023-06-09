describe('Forgot Password Test Cases', () => {
    it('Validating Login Page', () => {
        cy.viewport(1920, 1080)
        cy.visit('http://127.0.0.1:8000/forgot_password')
        //Validating objects needed for forgot password
        cy.get(':nth-child(3) > .form-control').should('exist')
        cy.get(':nth-child(5) > .btn').should('exist')
    })
    
    it('Email registered in database', ()=>{
        cy.viewport(1920, 1080)
        cy.visit('http://127.0.0.1:8000/forgot_password')
        cy.get(':nth-child(3) > .form-control').type('limfort01@gmail.com')
        cy.get(':nth-child(5) > .btn').click()
        cy.contains("We have e-mailed your password reset link").should('exist')
    })

    it('Email not registered in database', ()=>{
        cy.viewport(1920, 1080)
        cy.visit('http://127.0.0.1:8000/forgot_password')
        cy.get(':nth-child(3) > .form-control').type('test@gmail.com')
        cy.get(':nth-child(5) > .btn').click()
        cy.contains("The selected email is invalid.").should('exist')
    })

    it('Input email empty', ()=>{
        cy.viewport(1920, 1080)
        cy.visit('http://127.0.0.1:8000/forgot_password')
        cy.get(':nth-child(5) > .btn').click()
        cy.contains("The email field is required.").should('exist')
    })
  })