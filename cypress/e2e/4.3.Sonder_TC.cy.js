const configuration = require("../support/e2e")


import '../support/commands'
import 'cypress-xpath'
let city ="Amsterdam"
let startDateValue
let endDateValue
let guestNumber

describe('4.3 Check-in date, check-out date, and guest count, which were previously selected in the search criteria, are displayed correctly on the destination page.', () => {

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

    cy.get('[name="startDate"]')
    .invoke('val')
    .then((value) => {   
      startDateValue = value;
    });

    cy.get('[name="endDate"]')
    .invoke('val')
    .then((value) => {   
      endDateValue = value;
    });

  cy.get('[aria-label="Increment guest counter"]').click();
  cy.get('[aria-label="Increment guest counter"]').prev()
  .invoke('text')
  .then((initialText) => {
     guestNumber = parseInt(initialText);
    });

    cy.get('button').contains('Search').click();
  
    })  
  })
  
   
  it('Check-in date, check-out date, and guest count, which were previously selected in the search criteria, are displayed correctly on the destination page',()=>{
    cy.get('[name="startDate"]')
    .invoke('val')
    .then((checkin)=>{
      expect(checkin).to.eq(startDateValue)
    })

    cy.get('[name="endDate"]')
    .invoke('val')
    .then((checkout)=>{
      expect(checkout).to.eq(endDateValue)
    })

    cy.get('[aria-label="Increment guest counter"]').prev().invoke('text')
    .then((guestnum)=>{

      expect(parseInt(guestnum)).to.eq(guestNumber)
    })

    
  })

}) 