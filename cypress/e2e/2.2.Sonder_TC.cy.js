const configuration = require("../support/e2e")


import '../support/commands'
import 'cypress-xpath';



describe('2.2  Select Your Currency option in the menu', () => {

  before(()=>{
    cy.fixture('Sonder').then(function(data){   
      this.data=data
      cy.visit(configuration.baseURL)
  
    })  
  })

  it('Verify the Canadian dollar and is visible on the nav menu ',()=>{
    cy.get('[class="ActionsContainer_actions-container-row__yvXHx"]')
    .children('div').first().find('button').eq(0).click({force:true});

    cy.get('ul.Selector_list__D9uMW')
    .contains('CAD')
    .click({force:true})

    cy.get('.ActionsContainer_actions-container-row__yvXHx div button p')
    .contains('CAD')
    .should('be.visible')

    cy.get('.ActionsContainer_actions-container-row__yvXHx div button p').next()
    .contains('($)')
    .should('be.visible')


  })

  it('Verify the Euro currency and is visible on the nav menu',()=>{
    cy.get('[class="ActionsContainer_actions-container-row__yvXHx"]')
    .children('div').first().find('button').eq(0).click({force:true});

    cy.get('ul.Selector_list__D9uMW')
    .contains('EUR')
    .click({force:true})

    cy.get('.ActionsContainer_actions-container-row__yvXHx div button p')
    .contains('EUR')
    .should('be.visible')

    cy.get('.ActionsContainer_actions-container-row__yvXHx div button p').next()
    .contains('(€)')
    .should('be.visible')

  })

  it('Verify the UAE Dirham currency and is visible on the nav menu',()=>{
    cy.get('[class="ActionsContainer_actions-container-row__yvXHx"]')
    .children('div').first().find('button').eq(0).click({force:true});

    cy.get('ul.Selector_list__D9uMW')
    .contains('AED')
    .click({force:true})

    cy.get('.ActionsContainer_actions-container-row__yvXHx div button p')
    .contains('AED')
    .should('be.visible')

    cy.get('.ActionsContainer_actions-container-row__yvXHx div button p').next()
    .contains('(د.إ)')
    .should('be.visible')

  })

  
  it('Verify the British pound currency and is visible on the nav menu',()=>{
    cy.get('[class="ActionsContainer_actions-container-row__yvXHx"]')
    .children('div').first().find('button').eq(0).click({force:true});

    cy.get('ul.Selector_list__D9uMW')
    .contains('GBP')
    .click({force:true})

    cy.get('.ActionsContainer_actions-container-row__yvXHx div button p')
    .contains('GBP')
    .should('be.visible')

    cy.get('.ActionsContainer_actions-container-row__yvXHx div button p').next()
    .contains('(£)')
    .should('be.visible')

  })


  it('Verify the Mexican currency and is visible on the nav menu',()=>{
    cy.get('[class="ActionsContainer_actions-container-row__yvXHx"]')
    .children('div').first().find('button').eq(0).click({force:true});

    cy.get('ul.Selector_list__D9uMW')
    .contains('MXN')
    .click({force:true})

    cy.get('.ActionsContainer_actions-container-row__yvXHx div button p')
    .contains('MXN')
    .should('be.visible')

    cy.get('.ActionsContainer_actions-container-row__yvXHx div button p').next()
    .contains('($)')
    .should('be.visible')

  })

  it('Verify the US currency and is visible on the nav menu',()=>{
    cy.get('[class="ActionsContainer_actions-container-row__yvXHx"]')
    .children('div').first().find('button').eq(0).click({force:true});

    cy.get('ul.Selector_list__D9uMW')
    .contains('USD')
    .click({force:true})

    cy.get('.ActionsContainer_actions-container-row__yvXHx div button p')
    .contains('USD')
    .should('be.visible')

    cy.get('.ActionsContainer_actions-container-row__yvXHx div button p').next()
    .contains('($)')
    .should('be.visible')

  })







})