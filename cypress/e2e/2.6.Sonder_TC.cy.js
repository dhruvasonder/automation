const configuration = require("../support/e2e")


import '../support/commands'
import 'cypress-xpath';



describe(' 2.6 "Check-in" menu option as Guest as user', () => {

  before(()=>{
    cy.fixture('Sonder').then(function(data){   
      this.data=data
      cy.visit(configuration.baseURL)
  
    })  
  })
  
  it('should verify check-in element if exist',()=>{
    cy.get('.ActionsContainer_actions-container-row__yvXHx').find('p').contains('Check In').should('exist')
  })

  it('should click on the check-in and enter the invalid confirmation code',()=>{

    cy.get('.ActionsContainer_actions-container-row__yvXHx').find('p').contains('Check In').click()

    cy.get('#confirmationCode').type('code123')

    cy.get('p').contains('Enter your booking site confirmation number:').should('be.visible')

    cy.get('[class="Button_button__G26FP Button_centered__fxBNJ Button_without_uppercase__tpjxj"]').contains('Next').click()

    cy.get('p').contains('Confirmation code not found.').should('be.visible')

  })

  it('should enter the valid confirmation code',()=>{
 
    // Need the correct confirmation code to implement
  })

}) 