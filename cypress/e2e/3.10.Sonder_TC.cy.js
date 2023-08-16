const configuration = require("../support/e2e")


import '../support/commands'
import 'cypress-xpath';


describe('3.10 Behavior of search button when clicked without selecting a city or check-in and check-out date, and guest information.', () => {

  before(()=>{
    cy.fixture('Sonder').then(function(data){   
      this.data=data
      cy.visit(configuration.baseURL)
  
    })  
  })
  

it('Behavior of search button clicked without selecting a city',()=>{

  cy.get('.DateRangePickerInput_input__UEZC_').eq(0)
    .should('exist')
    .click()

    cy.wait(1000)

    cy.get('.CalendarDay_day__xUf_z:not(.CalendarDay_unavailableDay___ZR3R)')
    .eq(2)
    .click()


    cy.get('.CalendarDay_day__xUf_z:not(.CalendarDay_unavailableDay___ZR3R)')
    .eq(14)
    .click()

    cy.wait(1000)
    
  cy.get('[aria-label="Increment guest counter"]').click();
  cy.get('button').contains('Search').click();
  cy.url().should('eq', 'https://www.sonder.com/');
  
  })


}) 