const configuration = require("../support/e2e")


import '../support/commands'
import 'cypress-xpath';



describe('1.10 "Sonder Pulse" section of homepage', () => {

  before(()=>{
    cy.fixture('Sonder').then(function(data){   
      this.data=data
      cy.visit(configuration.baseURL)
  
    })  
  })

  it("Verify the title and subtitle text", () => {

    cy.get('#sonderPulseHeading').contains('Sonder pulse').should('be.visible')

    cy.get('#everyStayHasAStoryHeading').next()
    .contains('From latest news to team interviews, learn more about the passion that powers a Sonder.')
    .should('be.visible')
   
  }) 
  
  
  it('Verify the 1st Slide text ',()=>{

    cy.get('#splide03-slide01').should('have.class','is-visible')

    cy.get('#splide03-slide01 section p')    
    .contains('The next step in travel’s future')
    .should('be.visible')

    cy.get('#splide03-slide01 section a')
    .should('have.attr', 'href', 'https://blog.sonder.com/news/the-next-step-in-travels-future/');
  
  })

  it('Verify the 2nd Slide text',()=>{

    cy.get('#splide03-slide02').should('have.class','is-visible')

    cy.get('#splide03-slide02 section h3')    
    .contains('Our summer road trip guide')
    .should('be.visible')

    cy.get('#splide03-slide01 section a')
    .should('have.attr', 'href', 'https://blog.sonder.com/travel/our-summer-road-trip-guide');
  
  })
   
})