const configuration = require("../support/e2e")


import '../support/commands'
import 'cypress-xpath';


describe('3.1 Search box display on the homepage ', () => {

  before(()=>{
    cy.fixture('Sonder').then(function(data){   
      this.data=data
      cy.visit(configuration.baseURL)
  
    })  
  })
  

  it('should display the search box of cities ',()=>{
     
    cy.get('#home-page-destination-search-input')
    .should('exist')
    .should('have.attr','placeholder','Select a city')
  })

  
  
}) 