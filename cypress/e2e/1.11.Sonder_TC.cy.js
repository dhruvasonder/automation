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
    .find('[class="sr-only"]').eq(0).should('contain','facebook')

    
    cy.xpath("(//span[contains(text(),'facebook')])[2]")
    .next()
    .should('have.attr','src','https://images.sonder.com/image/upload/v1566408331/catalina/icons/facebook.svg')

    cy.get('footer section div p').eq(13).next()
    .find('[class="sr-only"]').eq(1).should('contain','instagram')

    cy.xpath("(//span[contains(text(),'instagram')])[2]")
    .next()
    .should('have.attr','src','https://images.sonder.com/image/upload/v1566408397/catalina/icons/insta.svg')

    cy.get('footer section div p').eq(13).next()
    .find('[class="sr-only"]').eq(2).should('contain','twitter')

    cy.xpath("(//span[contains(text(),'twitter')])[2]")
    .next()
    .should('have.attr','src','https://images.sonder.com/image/upload/v1566408432/catalina/icons/twitter.svg')

  })

  it('should verify language text and its options in the footer',()=>{
    cy.get('[for="language-select-desktop"]')
    .contains('Language')
    .should('be.visible')

    cy.get('#language-select-desktop')
  .find('option')
  .then(($options) => {
    const expectedLanguages = [
      'English (US)',
      'English (CA)',
      'English (GB)',
      'Français (FR)',
      'Français (CA)',
      'Español (ES)',
      'Español (MX)',
      'Italiano (IT)'
    ];

    // Make sure the number of options matches the expected number of languages
    expect($options).to.have.length(expectedLanguages.length);

    // Loop through each option and verify its text against the expected language text
    $options.each((index, option) => {
      const text = Cypress.$(option).text().trim(); // Get the text of the option and remove any leading/trailing spaces
      const expectedLanguage = expectedLanguages[index];
      expect(text).to.equal(expectedLanguage); // Verify the option's text against the expected language text
    });
  });


  it('should verify currency and its options',()=>{
    cy.get('[for="currency-select-desktop"]')
    .contains('Currency')
    .should('be.visible')

    cy.get('#currency-select-desktop')
  .find('option')
  .then(($options) => {
    const expectedCurrencies = [
      'USD ($)',
      'CAD ($)',
      'EUR (€)',
      'GBP (£)',
      'AED (د.إ)',
      'MXN ($)'
    ];

    // Make sure the number of options matches the expected number of currencies
    expect($options).to.have.length(expectedCurrencies.length);

    // Loop through each option and verify its text against the expected currency
    $options.each((index, option) => {
      const text = Cypress.$(option).text().trim(); // Get the text of the option and remove any leading/trailing spaces
      const expectedCurrency = expectedCurrencies[index];
      expect(text).to.equal(expectedCurrency); // Verify the option's text against the expected currency
        });
     });

   })

  })

  it('Verify copyright text , phone , terms and privavy policy',()=>{
    cy.get('.Footer_legal__pOY5I').within(() => {
      cy.contains('Ⓒ 2023 Sonder Holdings Inc. All rights reserved.')
        .should('be.visible');
    
      cy.contains('+1 617-300-0956')
        .should('be.visible');
    
      cy.contains('Terms of Service')
        .should('be.visible')
        .and('have.attr', 'href', '/terms-of-service');
    
      cy.contains('Privacy Policy')
        .should('be.visible')
        .and('have.attr', 'href', '/privacy-policy');
    });
    
  })
    
})