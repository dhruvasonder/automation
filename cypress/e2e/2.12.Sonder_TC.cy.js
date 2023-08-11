const configuration = require("../support/e2e")


import '../support/commands'
import 'cypress-xpath';

describe('2.12 Clicking on "Sign Up" link in the "log in" link pop-up', () => {

  before(()=>{
    cy.fixture('Sonder').then(function(data){   
      this.data=data
      cy.visit(configuration.baseURL)
  
    })  
  })

  it('Click on the "Sign up" link in the pop-up. ',()=>{

    cy.get('.ActionsContainer_actions-container-row__yvXHx')
    .find('p')
    .contains('Sign up')
    .click()

  })

  it('Verify the "Sign up" page elements',()=>{

    cy.get('p').contains('Sign up for access to member pricing')
    .should('be.visible')

    cy.get('#email')
    .should('exist')

    cy.get('button')
    .contains('Continue')
    .should('exist')

    cy.get('p').contains('or continue with')
    .should('exist')

    cy.get('button')
    .contains('Google')
    .should('exist')

    cy.get('button')
    .contains('Facebook')
    .should('exist')

    cy.get('button')
    .contains('LinkedIn')
    .should('exist')

    cy.get('button')
    .contains('Apple')
    .should('exist')

    cy.get('p')
    .contains("By providing your email address, you agree to our Privacy Policy and Terms of Service")
    .should('be.visible')

    cy.get('a')
    .contains('Privacy Policy')
    .should('exist')

    cy.get('a')
    .contains('Terms of Service')
    .should('exist')

  })

}) 