const configuration = require("../support/e2e")


import '../support/commands'
import 'cypress-xpath';


describe('3.6 UI provides seperate date pickers for selecting the check-in and check-out dates. ', () => {

  before(()=>{
    cy.fixture('Sonder').then(function(data){   
      this.data=data
      cy.visit(configuration.baseURL)
  
    })  
  })
  

  it(' UI provides seperate date picker ',()=>{

    cy.get('.DateRangePickerInput_input__UEZC_').eq(0)
    .should('exist')
    .click()

    cy.wait(1000)

    cy.get('[name="startDate"]')
    .should('exist')


    cy.get('[name="endDate"]')
    .should('exist')

  })
}) 