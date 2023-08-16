const configuration = require("../support/e2e")


import '../support/commands'
import 'cypress-xpath'
let city ="Amsterdam"

describe('3.12 Behavior of search button is clicked after selecting a city, check-in and check-out dates, and providing guest information.', () => {

  before(()=>{
    cy.fixture('Sonder').then(function(data){   
      this.data=data
      cy.visit(configuration.baseURL)
  
    })  
  })
  
   
  it('Behavior of search button is clicked after selecting a city, check-in and check-out dates, and providing no of guests',()=>{
    
    let startDateValue;
    let endDateValue;
    let  guestNumber;

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

  cy.url().should('include', city.toLowerCase())

  cy.get('#search-page-destination-search-input')
  .should('have.attr', 'value', city);

  cy.get('[name="startDate"]').invoke('val').then((stDateValue)=>{
    expect(stDateValue).to.eq(startDateValue)
  })

  cy.get('[name="endDate"]').invoke('val').then((enDateValue)=>{
    expect(enDateValue).to.eq(endDateValue)
  })

  cy.get('[aria-label="Increment guest counter"]').prev().invoke('text')
  .then((text)=>{
    cy.log("guest number:",text)
    expect(parseInt(text)).to.eq(guestNumber)
  })
 
  
 })

}) 