const configuration = require("../support/e2e")


import '../support/commands'
import 'cypress-xpath';



describe('2.3 Verify the currency list available in the "Select Your Currency" menu ', () => {

  before(()=>{
    cy.fixture('Sonder').then(function(data){   
      this.data=data
      cy.visit(configuration.baseURL)
  
    })  
  })
  it('should verify the existence of specific currencies in the dropdown menu', () => {
    // Click the button to show the currency selector
    cy.get('[class="ActionsContainer_actions-container-row__yvXHx"]').children('div').first().find('button').eq(0).click({force:true});

    // Verify the existence of specific currencies in the dropdown menu
    cy.get('ul.Selector_list__D9uMW')
      .contains('USD')
      .should('exist');

    cy.get('ul.Selector_list__D9uMW')
      .contains('CAD')
      .should('exist');

    cy.get('ul.Selector_list__D9uMW')
      .contains('EUR')
      .should('exist');

    cy.get('ul.Selector_list__D9uMW')
      .contains('GBP')
      .should('exist');

    cy.get('ul.Selector_list__D9uMW')
      .contains('AED')
      .should('exist');

    cy.get('ul.Selector_list__D9uMW')
      .contains('MXN')
      .should('exist');

  });


})