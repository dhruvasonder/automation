const configuration = require("../support/e2e")


import '../support/commands'
import 'cypress-xpath';


describe('3.7 Selecting a valid check-in/check-out date using the Datepicker  ', () => {

  before(()=>{
    cy.fixture('Sonder').then(function(data){   
      this.data=data
      cy.visit(configuration.baseURL)
  
    })  
  })
  

  it('Selecting a valid check-in/check-out date ',()=>{

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

   
  })
}) 