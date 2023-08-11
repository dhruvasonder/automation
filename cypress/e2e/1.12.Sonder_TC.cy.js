const configuration = require("../support/e2e")


import '../support/commands'
import 'cypress-xpath';



describe('1.11 Footer section on the homepage.', () => {

  before(()=>{
    cy.fixture('Sonder').then(function(data){   
      this.data=data
      cy.visit(configuration.baseURL)
  
    })  
  })
  it('should veriy the world of choice title text and its subtitle',()=>{

    cy.get('#aWorldOfChoiceHeading').contains('A world of choice').should('be.visible')
    
    cy.get('#aWorldOfChoiceHeading').next()
    .contains('From a room for a night to a loft for as long as you like, there’s a Sonder for every occasion.')
    .should('be.visible')

  })

  it('should click a city like chicago and see if its relevant information is displayed',()=>{

    cy.get('[href="/destinations/chicago/search?"]').should('exist')
    cy.get('[href="/destinations/chicago/search?"]').invoke('text').then((text) => {
      const linkText = text.trim(); // Trim any leading/trailing whitespace
    
      // Perform the comparison
      const expectedText = "6 neighborhoodsChicago";
      expect(linkText).to.equal(expectedText);
    });

  })


    
})