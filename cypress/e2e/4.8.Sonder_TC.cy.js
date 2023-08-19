const configuration = require("../support/e2e")


import '../support/commands'
import 'cypress-xpath'
let city ="Atlanta"


describe('4.8 Displaying address in the "Address of the Area" field on the destination page, ensuring that it correctly changes according to the selected destination city.', () => {
  before(()=>{
    cy.fixture('Sonder').then(function(data){   
      this.data=data
      cy.visit(configuration.baseURL)

  cy.get('[placeholder="Select a city"]').eq(1)
  .click({ force: true })
  .type(city)
  .next()
  .find('#home-page-destination-search-item-0')
  .should('have.text',city)
  .click({force:true})
      cy.get('button').contains('Search').click();
  
    })  
  })
  it('Displaying address in the "Address of the Area" changes according to the selected destination city.',()=>{

    
  })

}) 