const configuration = require("../support/e2e")


import '../support/commands'
import 'cypress-xpath'
let city ="London"


describe('4.8 Displaying address in the "Address of the Area" field on the destination page, ensuring that it correctly changes according to the selected destination city.', () => {
  before(()=>{
    cy.fixture('Sonder').then(function(data){   
      this.data=data
      cy.visit(configuration.baseURL)

  cy.get('[placeholder="Select a city"]').eq(1)
  .click({ force: true })
  .type(city)
  .next()
  .find('#home-page-destination-search-item-0')
  .should('have.text',city)
  .click({force:true})
      cy.get('button').contains('Search').click();
  
    })  
  })
  it('Showing change in values of "address of the area" on changing the city',()=>{
    let anothercity= 'Amsterdam'
    let autocompleteTexts = [];
    let autocompleteTexts_1=[];


    cy.get('#search-by-phrase-autocomplete-input').click()

    cy.get('#search-by-phrase-autocomplete-label').next().children('div').eq(0)
    .should('exist')
    .invoke('html')
    .then((innerHtml)=>{
      cy.log('Inner HTML:', innerHtml);
    })

  
  cy.get('[id^="search-by-phrase-autocomplete-item-"]')
  .each(($element) => {
    const text = $element.text().trim();
    cy.log("textt: "+ text)
    autocompleteTexts.push(text);
  })
  .then(() => {


    cy.get('[placeholder="Select a city"]')
      .click({ force: true })
      .type(anothercity)

    cy.get('span').contains(anothercity).click()
    cy.wait(10000)

    cy.log("waited......")
    cy.get('#search-by-phrase-autocomplete-input').click()
    cy.wait(1000)

    cy.get('[id^="search-by-phrase-autocomplete-item-"]')
       .each(($element) => {
         const text1 = $element.text().trim();
         cy.log("text: "+ text1)
         autocompleteTexts_1.push(text1);
      })
    .then(() => {
      expect(autocompleteTexts).to.not.deep.equal(autocompleteTexts_1);
    })
  });

  })

}) 