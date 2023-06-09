describe('Login Test Cases', () => {
    it('Validating Login Page', () => {
      cy.viewport(1920, 1080)
      cy.visit('http://127.0.0.1:8000/login')
      //Validating objects needed for loging in
      cy.get('#email').should('exist')
      cy.get('#password').should('exist')
      cy.get('form > .row > .small > .text-light').should('exist')
      cy.get(':nth-child(2) > form > .btn').should('exist')
      cy.get(':nth-child(3) > .small > .text-light').should('exist')
    })
  
    it('Email and Password not listed', ()=>{
      cy.viewport(1920, 1080)
      cy.visit('http://127.0.0.1:8000/login')
      cy.get('#email').type('email@gmail.com')
      cy.get('#password').type('12345')
      cy.get(':nth-child(2) > form > .btn').click()
      cy.contains('Error').should('exist')
    })

    it('Email and Password already verified', ()=>{
      cy.viewport(1920, 1080)
      cy.visit('http://127.0.0.1:8000/login')
      cy.get('#email').type('akimichi4455@gmail.com')
      cy.get('#password').type('kokila123')
      cy.get(':nth-child(2) > form > .btn').click()
      cy.url().should('be.equal', 'http://127.0.0.1:8000/admin')
    })

    it('Email not verified', ()=>{
      cy.viewport(1920, 1080)
      cy.visit('http://127.0.0.1:8000/login')
      cy.get('#email').type('littlegiantt26@gmail.com')
      cy.get('#password').type('12345')
      cy.get(':nth-child(2) > form > .btn').click()
      cy.contains('Error').should('exist')
    })

    it('Wrong password', ()=>{
      cy.viewport(1920, 1080)
      cy.visit('http://127.0.0.1:8000/login')
      cy.get('#email').type('akimichi4455@gmail.com')
      cy.get('#password').type('passwordsalah')
      cy.get(':nth-child(2) > form > .btn').click()
      cy.contains('Error').should('exist')
    })

    it('Email empty', ()=>{
      cy.viewport(1920, 1080)
      cy.visit('http://127.0.0.1:8000/login')
      cy.get('#password').type('passwordsalah')
      cy.get(':nth-child(2) > form > .btn').click()
      cy.url().should('be.equal', 'http://127.0.0.1:8000/login')
    })

    it('Password empty', ()=>{
      cy.viewport(1920, 1080)
      cy.visit('http://127.0.0.1:8000/login')
      cy.get('#email').type('akimichi4455@gmail.com')
      cy.get(':nth-child(2) > form > .btn').click()
      cy.url().should('be.equal', 'http://127.0.0.1:8000/login')
    })

    it('Forgot Password clicked', ()=>{
      cy.viewport(1920, 1080)
      cy.visit('http://127.0.0.1:8000/login')
      cy.get('form > .row > .small > .text-light').click()
      cy.url().should('be.equal', 'http://127.0.0.1:8000/forgot_password')
    })

    it('Register clicked', ()=>{
      cy.viewport(1920, 1080)
      cy.visit('http://127.0.0.1:8000/login')
      cy.get(':nth-child(3) > .small > .text-light').click()
      cy.url().should('be.equal', 'http://127.0.0.1:8000/register')
    })
  })