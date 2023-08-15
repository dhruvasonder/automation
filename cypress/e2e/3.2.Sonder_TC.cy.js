const configuration = require("../support/e2e")


import '../support/commands'
import 'cypress-xpath';


describe('3.2 Search box elements e.g Destination City, check-in/check-out dates, number of guests/rooms) are clearly labeled with placeholder text and easy to identify.', () => {

  before(()=>{
    cy.fixture('Sonder').then(function(data){   
      this.data=data
      cy.visit(configuration.baseURL)
  
    })  
  })
  

  it('Placeholder text of Destnation city , check-in-checkout dates , number of guests/rooms ',()=>{
     
    cy.get('#home-page-destination-search-input')
    .should('exist')
    .should('have.attr','placeholder','Select a city')

    cy.get('[name="startDate"]')
    .should('exist')
    .should('have.attr','placeholder','Check-in')


    cy.get('[name="endDate"]')
    .should('exist')
    .should('have.attr','placeholder','Check-out')

    cy.get('[class="GuestCounterInline_label__gnmGE"]')
    .should('exist')
    .should('have.text','Guests')

  })


}) 