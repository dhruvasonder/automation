const configuration = require("../support/e2e")


import '../support/commands'
import 'cypress-xpath'
let city ="Amsterdam"


describe('4.5 Functionality of filters for bedroom, beds, and bathroom on the destination page', () => {
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
  it('Functionality of filters for Bedroom in the destination page',()=>{
    
    cy.get('p').contains('Filters').click()

    cy.get('[aria-label="Increment"]').eq(0).click().click()
    .click();

    cy.get('#resultsListScrollContainer').children('div').eq(0)
    .find('h1')
    .should('have.text','No results')

    cy.get('[aria-label="Decrement"]').eq(0).click().click()
    .click()

    cy.get('#resultsListScrollContainer')
    .find('article').should('exist')

    cy.get('p').contains('Filters').click()


  });


  it('Functionality of filters for Beds in the destination page',()=>{

    cy.get('p').contains('Filters').click()

    cy.get('[aria-label="Increment"]').eq(1).click().click()
    .click();

    cy.get('#resultsListScrollContainer').children('div').eq(0)
    .find('h1')
    .should('have.text','No results')

    cy.get('[aria-label="Decrement"]').eq(1).click().click()
    .click()

    cy.get('#resultsListScrollContainer')
    .find('article').should('exist')

    cy.get('p').contains('Filters').click()


  })

  it('Functionality of filters for Bathroom in the destination page',()=>{

    cy.get('p').contains('Filters').click()

    cy.get('[aria-label="Increment"]').eq(2).click().click()
    .click();

    cy.get('#resultsListScrollContainer').children('div').eq(0)
    .find('h1')
    .should('have.text','No results')

    cy.get('[aria-label="Decrement"]').eq(2).click().click()
    .click()

    cy.get('#resultsListScrollContainer')
    .find('article').should('exist')

  })
 
}) 