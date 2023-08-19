const configuration = require("../support/e2e")


import '../support/commands'
import 'cypress-xpath'
let city ="Amsterdam"

describe('4.2 Name of the city selected in the search criteria is displayed on the city search box within the destination page.', () => {

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
  
   
  it('should verify Name of the city selected in the search criteria displayed on the city search box within the destination page ',()=>{
   
    cy.get('#search-page-destination-search-input')
    .invoke('val').then((text)=>{
      expect(text).to.eq(city)
    })
    
  })

  
}) 