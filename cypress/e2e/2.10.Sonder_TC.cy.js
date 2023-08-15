const configuration = require("../support/e2e")


import '../support/commands'
import 'cypress-xpath';



describe('2.10 Functionality of the "Log In" link in the menu using Linkedln Oauth', () => {

  before(()=>{
    cy.fixture('Sonder').then(function(data){   
      this.data=data
      cy.visit(configuration.baseURL)
  
    })  
  })

  it('LinkedLn oauth login',()=>{

    cy.get('.ActionsContainer_actions-container-row__yvXHx')
    .find('p')
    .contains('Log in')
    .click()

    cy.get('span')
   .contains('Log in with linkedLn')
   .click()

  })

  
}) 