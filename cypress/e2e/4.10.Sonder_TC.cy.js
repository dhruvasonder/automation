const configuration = require("../support/e2e")


import '../support/commands'
import 'cypress-xpath'
let city ="London"


describe('4.10 Presence and functionality of the Google Map displayed on the destination page', () => {
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


  it('Presence and functionality of the Google Map displayed on the destination page',()=>{
      cy.get('#myMap').should('exist')

      cy.get('[aria-label="Map"]').should('exist')

      cy.get('[aria-label="Zoom in"]').should('be.visible')
      .click({force:true})

      cy.wait(1000)
      cy.get('[aria-label="Zoom out"]').should('be.visible')
      .click({force:true})
   
  })


}) 