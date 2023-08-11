const configuration = require("../support/e2e")


import '../support/commands'
import 'cypress-xpath';



describe('2.7 "Log In" link in the menu using username/password', () => {

  before(()=>{
    cy.fixture('Sonder').then(function(data){   
      this.data=data
      cy.visit(configuration.baseURL)
  
    })  
  })

  it('should verify the login element exist',()=>{
    cy.get('.ActionsContainer_actions-container-row__yvXHx').find('p').contains('Log in').should('exist')
  })


  it('should verify the presence of element in the login pop-up',()=>{

    cy.get('.ActionsContainer_actions-container-row__yvXHx')
    .find('p')
    .contains('Log in')
    .click()

    cy.get('#loginFormHeading')
    .contains('Log in')
    .should('be.visible')

    cy.get('#email')
    .should('exist')

   cy.get('#password')
    .should('exist')

   cy.contains('Forgot your password?')
   .should('be.visible')

   cy.get('button')
   .contains('Reset password')
   .should('be.visible')

   cy.get('[type="submit"]')
   .should('be.disabled')

   cy.get('span')
   .contains('Log in with google')
   .should('be.visible')

   cy.get('span')
   .contains('Log in with facebook')
   .should('be.visible')

   cy.get('span')
   .contains('Log in with linkedIn')
   .should('be.visible')
   
   cy.get('span')
   .contains('Log in with apple')
   .should('be.visible')
    
  })
  

  it('should click the login and enter valid credentials',()=>{

    cy.get('#email')
    .type("ankurgupta510@gmail.com")

   cy.get('#password')
    .type("Qwerty@123")

    cy.get('[type="submit"]')
    .click()

    cy.get('#loginFormHeading')
    .contains('Log in')
    .should('not.be.visible')

  })

  it('should log out and find elements on reset password pop-up',()=>{

    cy.get('[class="Dropdown_dropdown_indicator__QvjQL"]')
    .click()

    cy.get('p').contains('Log Out')
    .click()

    cy.get('.ActionsContainer_actions-container-row__yvXHx')
    .find('p')
    .contains('Log in')
    .click()

    cy.get('button')
    .contains('Reset password')
    .click()

    cy.get('p')
    .contains('Password reset link')
    .should('be.visible')

    cy.get('p')
    .contains("Enter the email address for your account and we'll send a link to reset your password.")
    .should('be.visible')

    cy.get('#email')
    .should('have.attr','placeholder','Send Reset Link')

    cy.get('button')
    .contains('Send Reset Link')
    .should('be.visible')

    cy.get('p')
    .contains('Back to Login')
    .should('be.visible')

  })

  it('Reset password functionality',()=>{

    const email ="ankurgupta510@gmail.com"

    cy.get('#email')
    .type(email)

    cy.get('button')
    .contains('Send Reset Link')
    .click()

    cy.get('p')
    .contains('We sent the link to '+email)
    .should('be.visible')

    cy.get('button')
    .contains('close')
    .should('exist')

    cy.get('button')
    .contains('close')
    .click()


  })

  
}) 