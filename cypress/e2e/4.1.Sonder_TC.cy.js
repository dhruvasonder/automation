const configuration = require("../support/e2e")


import '../support/commands'
import 'cypress-xpath'
let city ="Amsterdam"

describe('4.1 Verify the Destination page elements', () => {

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
  
   
  it('should verify Property listings ',()=>{
   cy.get('[class="BuildingResultsList_articleContainer__xhTXz"]')
   .should('exist')
   .invoke('text').then((text)=>{

    cy.log('property text:',text)
   })
  })

}) 