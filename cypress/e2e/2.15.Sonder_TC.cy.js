const configuration = require("../support/e2e")


import '../support/commands'
import 'cypress-xpath';


describe('2.15 Functionality of "Sign Up" link using FB Oauth in the homepage menu', () => {

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

  
  it('should sign up in FB Oauth functionality',()=>{

    cy.get('button')
    .contains('Facebook').click()
    
  })
  
}) 