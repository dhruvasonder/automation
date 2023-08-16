const configuration = require("../support/e2e")


import '../support/commands'
import 'cypress-xpath';

let city ="Amsterdam"
describe('3.11 Behavior of search button when clicked, selecting city only', () => {

  before(()=>{
    cy.fixture('Sonder').then(function(data){   
      this.data=data
      cy.visit(configuration.baseURL)
  
    })  
  })
  

it('Behavior of search button clicked selecting a city',()=>{
  cy.get('[placeholder="Select a city"]').eq(1)
  .click({ force: true })
  .type(city)
  .next()
  .find('#home-page-destination-search-item-0')
  .should('have.text',city)
  .click({force:true})


  cy.get('button')
  .contains('Search')
  .click()


  cy.wait(1000)
  cy.url().should('include', city.toLowerCase());
  cy.get('p').contains(city).then((paragraph)=>{
    const paragraphtext = paragraph.text();
    const regexPattern = new RegExp(`^\\d+ (property|properties) in ${city}$`)

    expect(paragraphtext).to.match(regexPattern);

  })


 })

}) 