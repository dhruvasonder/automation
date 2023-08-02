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

    cy.get('#sonderPulseHeading').next()
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

    cy.get('#splide03-slide02 section p')    
    .contains('Our summer road trip guide')
    .should('exist')

    cy.get('#splide03-slide02 section a')
    .should('have.attr', 'href', 'https://blog.sonder.com/travel/our-summer-road-trip-guide/');
  
  })

  it('Verify the 3rd Slide text',()=>{

   // cy.get('#splide03-slide03').should('have.class','is-visible')

    cy.get('#splide03-slide03 section p')    
    .contains('Sonder launches operations in Madrid and explores plans for Barcelona')
    .should('exist')

    cy.get('#splide03-slide03 section a')
    .should('have.attr', 'href', 'https://blog.sonder.com/news/sonder-launches-operations-in-madrid-and-explores-plans-for-barcelona/');
  
  })

  it('Verify the 4th Slide text',()=>{

   // cy.get('#splide03-slide04').should('have.class','is-visible')

    cy.get('#splide03-slide04 section p')    
    .contains('Tips from our interior designers on optimizing your WFH space')
    .should('exist')

    cy.get('#splide03-slide04 section a')
    .should('have.attr', 'href', 'https://blog.sonder.com/design/tips-from-interior-designers-on-optimizing-your-wfh-space/');
  
  })

  it('Verify the blog link exist',()=>{
    cy.get('#splide03')
    .parent()
    .next()
    .contains('Go to blog')
    .should('be.visible')

    cy.get('#splide03')
    .parent()
    .next()
    .should('have.attr','href','https://blog.sonder.com')

  })

   
})