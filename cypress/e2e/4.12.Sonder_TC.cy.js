const configuration = require("../support/e2e")


import '../support/commands'
import 'cypress-xpath'
let city ="Amsterdam"


describe('4.12 Functionality of clicking on tags associated with each property on the destination page.', () => {
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


  it('Functionality of clicking on tags associated with each property on the destination page.',()=>{
   
    cy.get('article').first().children('div').eq(1)
   .find('p').eq(0).should('have.text','Lounge and Work Space')

   cy.get('article').first().children('div').eq(1)
   .find('p').eq(1).should('have.text','Air conditioning')

   cy.get('article').first().children('div').eq(1)
   .find('p').eq(2).should('have.text','Outdoor Space')

   cy.get('article').first().children('div').eq(1)
   .find('p').eq(3).should('have.text','Elevator')


   cy.get('a[aria-label="Park House"]').should('have.attr', 'href').then((hrefValue) => {
    // Now you can use the hrefValue variable to work with the retrieved URL
    cy.visit("https://sonder.com/"+hrefValue)
    });
 
    cy.get('p').contains('Top amenities').next()
    .should('have.text','Lounge and Work Space')

    cy.get('p').contains('Top amenities').next().next()
    .should('have.text','Air conditioning')

    cy.get('p').contains('Top amenities').next().next().next()
    .should('have.text','Outdoor Space')

    cy.get('p').contains('Top amenities').next().next().next().next()
    .should('have.text','Elevator')


  })
 
}) 