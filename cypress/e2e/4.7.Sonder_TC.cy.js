const configuration = require("../support/e2e")


import '../support/commands'
import 'cypress-xpath'
let city ="London"


describe('4.7 Functionality of the sort by feature on the destination page by testing different options', () => {
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
  it('Selecting the top from low to high price',()=>{

    cy.get('.react-select__dropdown-indicator')
    .click()
    cy.wait(1000)

    cy.get('[id^="react-select-2-option-"]').contains('Price (Low to High)').click()

    // Select all elements with the class 'RoomTypes_priceLabel__6dyMA'
cy.get('.RoomTypes_priceLabel__6dyMA').then($priceLabels => {
  const prices = [];

  // Loop through each price label element and extract the price
  $priceLabels.each((index, priceLabel) => {
    const priceText = Cypress.$(priceLabel).text();
    const price = parseFloat(priceText.match(/US\$(\d+)/)[1]); // Extract the price value
    prices.push(price);
  });

  // Verify that the first price is the lowest among all prices
  const lowestPrice = Math.min(...prices);
  cy.wrap(lowestPrice).should('eq', prices[0]);
});


  });


  it("Selecting Distance to City Center",()=>{

    cy.get('.react-select__single-value').click()

    cy.wait(1000)

    //Select the element with a dynamic ID
    cy.get('[id^="react-select-2-option-"]').contains('Distance to City Center').click()

    cy.wait(2000)

    cy.get('article') // Select all article elements with class 'BuildingCard_container__3a6g9'
    .first() // Select the first article element
    .should('contain', 'Oxford Circus'); // Assert that the text 'Oxford Circus' is contained within the element

  })

  
  it("Selecting Distance to Address",()=>{

    cy.get('.react-select__single-value').click()

    cy.wait(1000)

    cy.get('[id^="react-select-2-option-"]').contains('Distance to Address').click()

    cy.wait(2000)

    cy.get('#search-by-phrase-autocomplete-label').next().children('div').eq(0)
    .should('exist')
    .invoke('html')
    .then((innerHtml)=>{
      cy.log('Inner HTML:', innerHtml);
    })

    cy.get('div').contains('Belgravia').click()

    cy.wait(2000)

    cy.get('article') // Select all article elements with class 'BuildingCard_container__3a6g9'
    .first() // Select the first article element
    .should('contain', 'Sloane Square', { timeout: 10000 }); // Assert that the text 'Oxford Circus' is contained within the element

    cy.get('#search-by-phrase-autocomplete-input').next().children('div').eq(0).click()

    cy.wait(1000)

  })

  it("Selecting Top picks",()=>{

    cy.get('.react-select__single-value').click()

    cy.wait(1000)

    cy.get('[id^="react-select-2-option-"]').contains('Top Picks').click()

    cy.wait(2000)

    cy.get('article') // Select all article elements with class 'BuildingCard_container__3a6g9'
    .first() // Select the first article element
    .should('contain', 'The Henry'); // Assert that the text 'Oxford Circus' is contained within the element


  })

}) 