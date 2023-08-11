const configuration = require("../support/e2e")


import '../support/commands'
import 'cypress-xpath';



describe('2.1  Menu Options on sonder', () => {

  before(()=>{
    cy.fixture('Sonder').then(function(data){   
      this.data=data
      cy.visit(configuration.baseURL)
  
    })  
  })
  it('should verify currency menu element if exist',()=>{
 
    cy.get('.ActionsContainer_actions-container-row__yvXHx div button').should('exist')
  })

  it('should verify the language menu element if exist ',()=>{
    cy.get('.ActionsContainer_actions-container-row__yvXHx div:nth-of-type(2)').should('exist')

  })

  it('should verify check-in element if exist',()=>{
    cy.get('.ActionsContainer_actions-container-row__yvXHx').find('p').contains('Check In').should('exist')
  })

  it('should verify the log-in element exist',()=>{
    cy.get('.ActionsContainer_actions-container-row__yvXHx').find('p').contains('Log in').should('exist')
  })

  it('should verify Sign up element if exist',()=>{
    cy.get('.ActionsContainer_actions-container-row__yvXHx').find('p').contains('Sign up').should('exist')
  })

  it('should verify the existence of the hamburger menu button and various menu options ', () => {
    cy.get('[class="Hamburger_container__56rGn"]').should('exist');
    cy.get('[class="Hamburger_container__56rGn"]').click({force:true})
    cy.wait(1000)

    cy.get('[class="ActionsContainer_user_action___2FsM"]')
    .find('a[href="/about"]')
      .should('exist')
      .contains('About us');

      cy.get('[class="ActionsContainer_user_action___2FsM"]')
      .find('a[href="/business-and-group"]')
      .should('exist')
      .contains('Business and groups');


      cy.get('[class="ActionsContainer_user_action___2FsM"]')
      .find('a[href="/contact"]') // Adjust the href attribute based on the actual URL
      .should('exist')
      .contains('Support');

    cy.get('[class="ActionsContainer_user_action___2FsM"]')
      .find('a[href="/csr"]') // Adjust the href attribute based on the actual URL
      .should('exist')
      .contains('Responsibility');

    cy.get('[class="ActionsContainer_user_action___2FsM"]')
      .find('a[href="https://blog.sonder.com"]') // Adjust the href attribute based on the actual URL
      .should('exist')
      .contains('Blog');
  })


})