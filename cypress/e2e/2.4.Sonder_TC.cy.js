const configuration = require("../support/e2e")


import '../support/commands'
import 'cypress-xpath';



describe('2.4 Verify the menu displays a comprehensive list of language options for the user to choose from.', () => {

  before(()=>{
    cy.fixture('Sonder').then(function(data){   
      this.data=data
      cy.visit(configuration.baseURL)
  
    })  
  })
  
  it('Verify the menu options displayed under the language ',()=>{
    cy.get('[class="ActionsContainer_actions-container-row__yvXHx"]').children('div').eq(1).find('button').eq(0).click({force:true});

    cy.get('[class="Selector_listWrapper__byONT"]').children('p').eq(0)
    .contains('Select your language')
    .should('be.visible')

    cy.get('[class="Selector_listWrapper__byONT"]').children('ul').eq(0)
    .children('li').eq(0)
    .contains('English')
    .should('be.visible')

    cy.get('[class="Selector_listWrapper__byONT"]').children('ul').eq(0)
    .children('li').eq(0)
    .find('img')
    .should('have.attr','alt','us flag')

    cy.get('[class="Selector_listWrapper__byONT"]').children('ul').eq(0)
    .children('li').eq(1)
    .contains('English')
    .should('be.visible')

    cy.get('[class="Selector_listWrapper__byONT"]').children('ul').eq(0)
    .children('li').eq(1)
    .find('img')
    .should('have.attr','alt','ca flag')


    cy.get('[class="Selector_listWrapper__byONT"]').children('ul').eq(0)
    .children('li').eq(2)
    .contains('English')
    .should('be.visible')

    cy.get('[class="Selector_listWrapper__byONT"]').children('ul').eq(0)
    .children('li').eq(2)
    .find('img')
    .should('have.attr','alt','gb flag')

    cy.get('[class="Selector_listWrapper__byONT"]').children('ul').eq(0)
    .children('li').eq(2)
    .contains('English')
    .should('be.visible')

    cy.get('[class="Selector_listWrapper__byONT"]').children('ul').eq(0)
    .children('li').eq(2)
    .find('img')
    .should('have.attr','alt','gb flag')

    cy.get('[class="Selector_listWrapper__byONT"]').children('ul').eq(0)
    .children('li').eq(3)
    .contains('Français')
    .should('be.visible')

    cy.get('[class="Selector_listWrapper__byONT"]').children('ul').eq(0)
    .children('li').eq(3)
    .find('img')
    .should('have.attr','alt','fr flag')

    cy.get('[class="Selector_listWrapper__byONT"]').children('ul').eq(0)
    .children('li').eq(4)
    .contains('Français')
    .should('be.visible')

    cy.get('[class="Selector_listWrapper__byONT"]').children('ul').eq(0)
    .children('li').eq(4)
    .find('img')
    .should('have.attr','alt','ca flag')

    cy.get('[class="Selector_listWrapper__byONT"]').children('ul').eq(0)
    .children('li').eq(5)
    .contains('Español')
    .should('be.visible')

    cy.get('[class="Selector_listWrapper__byONT"]').children('ul').eq(0)
    .children('li').eq(5)
    .find('img')
    .should('have.attr','alt','es flag')

    cy.get('[class="Selector_listWrapper__byONT"]').children('ul').eq(0)
    .children('li').eq(6)
    .contains('Español')
    .should('be.visible')

    cy.get('[class="Selector_listWrapper__byONT"]').children('ul').eq(0)
    .children('li').eq(6)
    .find('img')
    .should('have.attr','alt','mx flag')

    cy.get('[class="Selector_listWrapper__byONT"]').children('ul').eq(0)
    .children('li').eq(7)
    .contains('Italiano')
    .should('be.visible')

    cy.get('[class="Selector_listWrapper__byONT"]').children('ul').eq(0)
    .children('li').eq(7)
    .find('img')
    .should('have.attr','alt','it flag')


  })

})