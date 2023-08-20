const configuration = require("../support/e2e")


import '../support/commands'
import 'cypress-xpath'
let city ="London"


describe('4.9 Functionality of the "Address of the Area" field on the destination page, ensuring that it works  according to the selected destination city.', () => {
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


  it('selecting a city in the "Address of the Area" changes according to the selected destination city.',()=>{

    cy.get('#search-by-phrase-autocomplete-input').click()

    cy.get('div').contains('Belgravia').click()

    cy.wait(2000)

    cy.get('article') // Select all article elements with class 'BuildingCard_container__3a6g9'
    .first() // Select the first article element
    .should('contain', 'Sloane Square', { timeout: 10000 }); // Assert that the text 'Sloane Square' is contained within the element

    cy.get('#search-by-phrase-autocomplete-input').next().children('div').eq(0).click()

  })

  it('selecting All neighbourhood of the address of the area in the destination city',()=>{

    cy.get('#search-by-phrase-autocomplete-input').click()

    cy.get('div').contains('All Neighborhoods').click()

    cy.get('article') // Select all article elements with class 'BuildingCard_container__3a6g9'
    .first() // Select the first article element
    .should('contain', 'The Henry', { timeout: 10000 }); // Assert that the text 'Sloane Square' is contained within the element

  })

}) 