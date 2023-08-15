const configuration = require("../support/e2e")


import '../support/commands'
import 'cypress-xpath';

const invalid_value='@'
describe('3.4 Input an invalid value into the destination city search box', () => {

  before(()=>{
    cy.fixture('Sonder').then(function(data){   
      this.data=data
      cy.visit(configuration.baseURL)
  
    })  
  })
  

  it('invalid value into the destination city search box',()=>{
    cy.get('[placeholder="Select a city"]').eq(1)
      .click({force:true})
      .type(invalid_value)
      .next()
      .find('#home-page-destination-search-item-1')
      .should('not.exist')
  })
}) 