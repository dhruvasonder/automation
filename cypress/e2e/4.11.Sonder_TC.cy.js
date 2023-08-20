const configuration = require("../support/e2e")


import '../support/commands'
import 'cypress-xpath'
let city ="Amsterdam"


describe('4.11 Display and accuracy of property details on the destination page.', () => {
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


  it('Display and accuracy of property details including Property name, Room types & Nightly rates, Suite , pricing on the destination page. ',()=>{
   
    cy.get('article').first().children('div').eq(0)
   .should('include.text','Park House')

   cy.get('article').first().children('div').eq(0)
   .should('include.text','Oud-Zuid, Amsterdam')

   cy.get('article').first().children('div').eq(1)
   .find('p').eq(0).should('have.text','Lounge and Work Space')

   cy.get('article').first().children('div').eq(1)
   .find('p').eq(1).should('have.text','Air conditioning')

   cy.get('article').first().children('div').eq(1)
   .find('p').eq(2).should('have.text','Outdoor Space')

   cy.get('article').first().children('div').eq(1)
   .find('p').eq(3).should('have.text','Elevator')

   cy.get('.swiper-slide p').eq(0).should('have.text','Room')

   cy.get('.swiper-slide p').eq(1).should('have.text','from US$191')

   cy.get('.swiper-slide p').eq(2).should('have.text','Suite')

   cy.get('.swiper-slide p').eq(3).should('have.text','from US$327')

   cy.get('article').first().children('div').eq(2)
   .find('a').should('have.text','See what’s available')

  })

}) 