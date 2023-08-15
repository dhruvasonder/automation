const configuration = require("../support/e2e")


import '../support/commands'
import 'cypress-xpath';

const cities = [
  'Amsterdam', 'Atlanta', 'Austin', 'Barcelona', 'Boston', 'Chicago', 'Dallas',
  'Denver', 'Detroit', 'Dubai', 'Dublin', 'Edinburgh', 'Glasgow', 'Houston',
  'London', 'Los Angeles', 'Madrid', 'Mexico City', 'Miami', 'Milan', 'Minneapolis',
  'Montreal', 'Nashville', 'New Orleans', 'New York City', 'Nice', 'Orlando',
  'Ottawa', 'Palm Springs', 'Paris', 'Philadelphia', 'Phoenix', 'Rome', 'San Antonio',
  'San Diego', 'San Francisco', 'Savannah', 'Seattle', 'Toronto', 'Vancouver',
  'Venice', 'Washington D.C.'
];
describe('3.3 Selected suggestion populates the search box with the corresponding city name.', () => {

  before(()=>{
    cy.fixture('Sonder').then(function(data){   
      this.data=data
      cy.visit(configuration.baseURL)
  
    })  
  })
  

  it('Selected suggestion populates the search box with the corresponding city name.',()=>{
     
    cy.get('[placeholder="Select a city"]').eq(1)
    .click({force:true})
    .next()
    .get('[id^="home-page-destination-search-item-"]')
    .should('exist')
    .each(($element, index, $list) => {
        const id = $element.attr('id');
        const lastPart = id.split('-').pop(); // Get the last part of the ID
        if (!isNaN(lastPart)) {
          const text = $element.text().trim();
          cy.log(`Element ${index + 1} Text: ${text}`);

          if (cities.includes(text)) {
            cy.log(`Match found for ${text}`);
            cy.wrap($element).should('contain', text);
        } else {
            cy.log(`No match for ${text}`);
            cy.wrap($element).should('not.exist');
        }

      }
    });


  })

}) 