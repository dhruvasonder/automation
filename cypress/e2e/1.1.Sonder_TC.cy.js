const configuration = require("../support/e2e")


import '../support/commands'


describe('1.4 Download App from App Store', () => {

  before(()=>{
    cy.fixture('Sonder').then(function(data){   
      this.data=data
      cy.visit(configuration.baseURL)
  
    })  
  })
  it("Verify the title and logo of the site", () => {


    cy.title().should('include', 'Sonder | A better way to stay.');

    cy.get('img[src="https://images.sonder.com/image/upload/v1616013214/catalina/icons/sonder_icon_logo.svg"][alt="Sonder"]')
    .should('exist')
    .then(($img) => {
        // Scroll to the element to make it visible
        cy.wrap($img).scrollIntoView();
        
        // Now make assertions
        cy.wrap($img)
            .should('have.attr', 'src', 'https://images.sonder.com/image/upload/v1616013214/catalina/icons/sonder_icon_logo.svg')
            .should('have.attr', 'alt', 'Sonder');
    });


  
   })

 })