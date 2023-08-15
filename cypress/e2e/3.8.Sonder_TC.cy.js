const configuration = require("../support/e2e")


import '../support/commands'
import 'cypress-xpath';


describe('3.8 Check-in and Check-out date format ', () => {

  before(()=>{
    cy.fixture('Sonder').then(function(data){   
      this.data=data
      cy.visit(configuration.baseURL)
  
    })  
  })
  

  it('should check the presence of check in and check out date  ',()=>{

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
        expect(value).to.match(/^\w+, \w+ \d+$/);
    });


    cy.get('[name="endDate"]')
    .invoke('val')
    .then((value) => {   
        expect(value).to.match(/^\w+, \w+ \d+$/);
    });

  })
}) 