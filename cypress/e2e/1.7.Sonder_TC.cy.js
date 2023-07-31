const configuration = require("../support/e2e")


import '../support/commands'
import 'cypress-xpath';



describe('1.7 Award-Winning Interiors in Philadelphia, London, Orlando, Detroit, and Houston Tabs on Homepage', () => {

  before(()=>{
    cy.fixture('Sonder').then(function(data){   
      this.data=data
      cy.visit(configuration.baseURL)
  
    })  
  })
  it("Visibility of title , text and tabs", () => {
    
    cy.get("#aStayInfusedWithCreativityAndCultureHeading").contains('A stay infused with creativity and culture').should('be.visible')

    cy.get("#aStayInfusedWithCreativityAndCultureHeading").next()
    .contains('From award-winning interiors to curated neighborhood guides, our stays celebrate what’s special about each city we call home')
    .should('be.visible')


    cy.get("#aStayInfusedWithCreativityAndCultureHeading").parent().parent().next().find('li').eq(0).contains('Philadelphia').should('be.visible')
    cy.get("#aStayInfusedWithCreativityAndCultureHeading").parent().parent().next().find('li').eq(1).contains('London').should('be.visible')
    cy.get("#aStayInfusedWithCreativityAndCultureHeading").parent().parent().next().find('li').eq(2).contains('Orlando').should('be.visible')
    cy.get("#aStayInfusedWithCreativityAndCultureHeading").parent().parent().next().find('li').eq(3).contains('Detroit').should('be.visible')
    cy.get("#aStayInfusedWithCreativityAndCultureHeading").parent().parent().next().find('li').eq(4).contains('Houston').should('be.visible')

    
  })

  it('')

 })