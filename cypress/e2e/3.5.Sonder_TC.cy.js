const configuration = require("../support/e2e")


import '../support/commands'
import 'cypress-xpath';

let city="Amsterdam"
describe('3.5 Input an valid/selected city into the destination city search box ', () => {

  before(()=>{
    cy.fixture('Sonder').then(function(data){   
      this.data=data
      cy.visit(configuration.baseURL)
  
    })  
  })
  

  it(' Input an valid/selected city into the destination city search box ',()=>{
  
  cy.get('[placeholder="Select a city"]').eq(1)
  .click({ force: true })
  .type(city)
  .next()
  .find('#home-page-destination-search-item-0')
  .should('have.text',city)
  .click({force:true})

  })
}) 