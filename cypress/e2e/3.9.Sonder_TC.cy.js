const configuration = require("../support/e2e")


import '../support/commands'
import 'cypress-xpath';


describe('3.9 Functionality of increasing/decreasing the guest count', () => {

  before(()=>{
    cy.fixture('Sonder').then(function(data){   
      this.data=data
      cy.visit(configuration.baseURL)
  
    })  
  })
  

it('should identify the "+" button to increase the guest count.',()=>{

// Get the initial text before clicking
cy.get('[aria-label="Increment guest counter"]').prev()
  .invoke('text')
  .then((initialText) => {
    // Click the element that triggers the increment
    cy.get('[aria-label="Increment guest counter"]').click();

    // Get the updated text after clicking
    cy.get('[aria-label="Increment guest counter"]').prev()
      .invoke('text')
      .then((updatedText) => {
        const initialNumber = parseInt(initialText);
        const updatedNumber = parseInt(updatedText);

        // Assert that the updated number is greater than the initial number
        cy.expect(updatedNumber).to.be.greaterThan(initialNumber);
        });
     });
  })

  it('should identify the "-" button to decrease the guest count.',()=>{

    // Get the initial text before clicking
    cy.get('[aria-label="Decrement guest counter"]').next()
     .invoke('text')
     .then((initialText) => {
  // Click the element that triggers the decrement
  cy.get('[aria-label="Decrement guest counter"]').click();

  // Get the updated text after clicking
  cy.get('[aria-label="Decrement guest counter"]').next()
    .invoke('text')
    .then((updatedText) => {
      const initialNumber = parseInt(initialText);
      const updatedNumber = parseInt(updatedText);

      // Assert that the updated number is less than the initial number
      cy.expect(updatedNumber).to.be.lessThan(initialNumber);
    });
});


  })


}) 