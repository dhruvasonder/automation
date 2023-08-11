const configuration = require("../support/e2e")


import '../support/commands'
import 'cypress-xpath';



describe('2.5 Verify the functionality of the "Select Your Language" menu option ', () => {

  before(()=>{
    cy.fixture('Sonder').then(function(data){   
      this.data=data
      cy.visit(configuration.baseURL)
  
    })  
  })
  
  it('Verify the selection of Canadian english language',()=>{
    cy.get('[class="ActionsContainer_actions-container-row__yvXHx"]').children('div').eq(1).find('button').eq(0).click({force:true});

    cy.get('[class="Selector_listWrapper__byONT"]').children('ul').eq(0)
    .children('li').eq(1)
    .contains('English')
    .click({force:true})

    cy.url().should("include", "en-ca");

    cy.get('.ActionsContainer_actions-container-row__yvXHx div button p')
    .contains('CAD')
    .should('be.visible')

    cy.get('.ActionsContainer_actions-container-row__yvXHx div button p').next()
    .contains('($)')
    .should('be.visible')


  })


  it('Verify the selection of UK english language',()=>{
    cy.get('[class="Selector_listWrapper__byONT"]').children('ul').eq(0)
    .children('li').eq(2)
    .contains('English')
    .click({force:true})

    cy.url().should("include", "en-gb");

    cy.get('.ActionsContainer_actions-container-row__yvXHx div button p')
    .contains('GBP')
    .should('be.visible')

    cy.get('.ActionsContainer_actions-container-row__yvXHx div button p').next()
    .contains('(£)')
    .should('be.visible')  

  })


  
  it('Verify the selection of French Français language',()=>{
    cy.get('[class="Selector_listWrapper__byONT"]').children('ul').eq(0)
    .children('li').eq(3)
    .contains('Français')
    .click({force:true})

    cy.url().should("include", "fr-fr");

    cy.get('.ActionsContainer_actions-container-row__yvXHx div button p')
    .contains('EUR')
    .should('be.visible')

    cy.get('.ActionsContainer_actions-container-row__yvXHx div button p').next()
    .contains('(€)')
    .should('be.visible')  

  })


  it('Verify the selection of Canadian Français language',()=>{
    cy.get('[class="Selector_listWrapper__byONT"]').children('ul').eq(0)
    .children('li').eq(4)
    .contains('Français')
    .click({force:true})

    cy.url().should("include", "fr-ca");

    cy.get('.ActionsContainer_actions-container-row__yvXHx div button p')
    .contains('CAD')
    .should('be.visible')

    cy.get('.ActionsContainer_actions-container-row__yvXHx div button p').next()
    .contains('($)')
    .should('be.visible')  

  })

  it('Verify the selection of Spanish language',()=>{
    cy.get('[class="Selector_listWrapper__byONT"]').children('ul').eq(0)
    .children('li').eq(5)
    .contains('Español')
    .click({force:true})

    cy.url().should("include", "es-es");

    cy.get('.ActionsContainer_actions-container-row__yvXHx div button p')
    .contains('EUR')
    .should('be.visible')

    cy.get('.ActionsContainer_actions-container-row__yvXHx div button p').next()
    .contains('(€)')
    .should('be.visible')  

  })

  it('Verify the selection of Mexican Spanish language',()=>{
    cy.get('[class="Selector_listWrapper__byONT"]').children('ul').eq(0)
    .children('li').eq(6)
    .contains('Español')
    .click({force:true})

    cy.url().should("include", "es-mx");

    cy.get('.ActionsContainer_actions-container-row__yvXHx div button p')
    .contains('MXN')
    .should('be.visible')

    cy.get('.ActionsContainer_actions-container-row__yvXHx div button p').next()
    .contains('($)')
    .should('be.visible')  

  })

  it('Verify the selection of Italian language',()=>{
    cy.get('[class="Selector_listWrapper__byONT"]').children('ul').eq(0)
    .children('li').eq(7)
    .contains('Italiano')
    .click({force:true})

    cy.url().should("include", "it-it");

    cy.get('.ActionsContainer_actions-container-row__yvXHx div button p')
    .contains('EUR')
    .should('be.visible')

    cy.get('.ActionsContainer_actions-container-row__yvXHx div button p').next()
    .contains('(€)')
    .should('be.visible')  
  })

  it('Verify the selection of American language',()=>{
    cy.get('[class="Selector_listWrapper__byONT"]').children('ul').eq(0)
    .children('li').eq(0)
    .contains('English')
    .click({force:true})

    cy.url().should("eq", "https://www.sonder.com/");


    cy.get('.ActionsContainer_actions-container-row__yvXHx div button p')
    .contains('USD')
    .should('be.visible')

    cy.get('.ActionsContainer_actions-container-row__yvXHx div button p').next()
    .contains('($)')
    .should('be.visible')  
  })


}) 