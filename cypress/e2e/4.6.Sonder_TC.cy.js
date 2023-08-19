const configuration = require("../support/e2e")


import '../support/commands'
import 'cypress-xpath'
let city ="Amsterdam"


describe('4.6 Functionality of filters with checkbox options for Other features on the destination page', () => {
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
  it('selecting Air conditioning checkbox options for Other features on the destination page',()=>{
    cy.get('p').contains('Filters').click()

    cy.wait(1000)

    cy.get('#air_conditioning').click({force:true})

    cy.get('#resultsListScrollContainer')
    .find('article').should('exist')

    cy.wait(1000)
    cy.get('#air_conditioning').click({force:true})

  
  });

  it('selecting cable television checkbox option for other features on the destination page',()=>{

    cy.wait(1000)
    cy.get('#cable_tv').click({force:true})

    cy.get('#resultsListScrollContainer').children('div').eq(0)
    .find('h1')
    .should('have.text','No results')

    cy.get('#cable_tv').click({force:true})
    cy.wait(1000)


  })

  it('selecting Doorman building checkbox option for other features on the destination page',()=>{

    cy.wait(1000)
    cy.get('#front_desk').click({force:true})

    cy.get('#resultsListScrollContainer')
    .find('article').should('exist')

    cy.wait(1000)

    cy.get('#front_desk').click({force:true})
  
  })

  it('selecting Elevator access checkbox option for other features on the destination page',()=>{

    cy.get('#elevator').click({force:true})

    cy.get('#resultsListScrollContainer')
    .find('article').should('exist')

    cy.wait(1000)

    cy.get('#elevator').click({force:true})


  })

  it('selecting Fitness access checkbox option for other features on the destination page',()=>{

    cy.wait(1000)

    cy.get('#fitness_center').click({force:true})

    cy.get('#resultsListScrollContainer').children('div').eq(0)
    .find('h1')
    .should('have.text','No results')

    cy.get('#fitness_center').click({force:true})

  })

  it('selecting in suite laundry for other features on the destination page',()=>{
    cy.wait(1000)

    cy.get('#insuite_laundry').click({force:true})

    cy.get('#resultsListScrollContainer').children('div').eq(0)
    .find('h1')
    .should('have.text','No results')

    cy.get('#insuite_laundry').click({force:true})

    cy.wait(1000)

  })

  it('selecting outdoor space for other features on the destination page',()=>{

    cy.wait(1000)

    cy.get('#outdoor_space').click({force:true})

    cy.get('#resultsListScrollContainer')
    .find('article').should('exist')

    cy.wait(1000)

    cy.get('#outdoor_space').click({force:true})

  })


  it('selecting Parking for other features on the destination page',()=>{

    cy.wait(1000)
    cy.get('#private_parking').click({force:true})

    cy.get('#resultsListScrollContainer')
    .find('article').should('exist')

    cy.get('#private_parking').click({force:true})


  })

}) 