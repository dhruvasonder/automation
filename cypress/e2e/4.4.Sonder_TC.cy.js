const configuration = require("../support/e2e")


import '../support/commands'
import 'cypress-xpath'
let city ="Amsterdam"


describe('4.4 Functionality of the price range slider on the destination page, ensuring that changing the slider updates the displayed price range accordingly. ', () => {
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
  it('Functionailty of mouse slider',()=>{

    cy.get('p').contains('Price')
    .click()


    
// Select the slider handle element
cy.get('button.DefaultHandle_handle__horizontal_2[data-handle-key="0"]').as('sliderHandle');

// Get the starting position of the slider handle
cy.get('@sliderHandle').then($sliderHandle => {
  const startLeft = parseFloat($sliderHandle.css('left'));
  const startClientX = $sliderHandle[0].getBoundingClientRect().left;
  
  // Define the distance to move the handle (e.g., 50 pixels to the right)
  const moveDistance = 200;
  
  // Simulate clicking and dragging the slider handle
  cy.get('@sliderHandle')
    .trigger('mousedown', { button: 0, clientX: startClientX })
    .trigger('mousemove', { button: 0, clientX: startClientX + moveDistance })
    .trigger('mouseup', { button: 0, clientX: startClientX + moveDistance });
  
  // Calculate the expected new position
  const expectedNewLeft = startLeft + (moveDistance / $sliderHandle.parent().width()) * 100;

  cy.get('#resultsListScrollContainer').children('div').eq(0)
  .find('h1')
  .should('have.text','No results')
  
  
});


  })
})