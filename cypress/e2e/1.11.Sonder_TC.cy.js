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

  
  
  
  it('Verify the sonder logo and alt text in the footer section ',()=>{

    cy.scrollTo('bottom');

    cy.get('.Footer_sonder_logo__MvA2K img').invoke('attr', 'src').then((src) => {
      expect(src).to.eq('https://images.sonder.com/image/upload/v1616013214/catalina/icons/sonder_icon_logo.svg');
    });

    cy.get('.Footer_sonder_logo__MvA2K img').invoke('attr', 'alt').then((alt) => {
      expect(alt).to.eq('Image of Sonder logo');
    });

  })

  it('Should verify all links under company section of the footer',()=>{
    cy.get('footer section div p').eq(0).should('contain','Company')

    cy.get('footer section div p').eq(1).should('contain','About Us')
    .parent()
    .should('have.attr','href','/about')

    cy.get('footer section div p').eq(2).should('contain','News')
    .parent()
    .should('have.attr','href','https://blog.sonder.com')


    cy.get('footer section div p').eq(3).should('contain','Careers')
    .parent()
    .should('have.attr','href','/careers')

    cy.get('footer section div p').eq(4).should('contain','Press')
    .parent()
    .should('have.attr','href','https://investors.sonder.com/media-page')

    cy.get('footer section div p').eq(5).should('contain','Business and Groups')
    .parent()
    .should('have.attr','href','/business-and-group')

    cy.get('footer section div p').eq(6).should('contain','Real Estate')
    .parent()
    .should('have.attr','href','/partner-with-sonder')

    cy.get('footer section div p').eq(7).should('contain','Corporate Responsibility')
    .parent()
    .should('have.attr','href','https://investors.sonder.com/corporate-responsibility-sustainability')

    cy.get('footer section div p').eq(8).should('contain','Investor Relations')
    .parent()
    .should('have.attr','href','https://investors.sonder.com')

    cy.get('footer section div p').eq(9).should('contain','Modern Slavery Act')
    .parent()
    .should('have.attr','href','/modern-slavery-act-statement')

    cy.get('footer section div p').eq(10).should('contain','Biometrics Policy')
    .parent()
    .should('have.attr','href','/biometrics-policy')

  })  

  it('Should verify link under support section of the footer',()=>{
    cy.get('footer section div p').eq(11).should('contain','Support')
    
    cy.get('footer section div p').eq(12).should('contain','Help Center')
    .parent()
    .should('have.attr','href','/help')

  })

  it('Should verify social link under support section of the footer',()=>{
    cy.get('footer section div p').eq(13).should('contain','Social')

    cy.get('footer section div p').eq(13).next()
    .find('[class="sr-only"]').should('contain','facebook')

    cy.get('footer section div p').eq(13).next().next()
    .should('have.attr','src','https://images.sonder.com/image/upload/v1566408331/catalina/icons/facebook.svg')

  })
     
})