const configuration = require("../support/e2e")


import '../support/commands'
import 'cypress-xpath';


describe('2.18 Functionality of Sub-menu links', () => {

  before(()=>{
    cy.fixture('Sonder').then(function(data){   
      this.data=data
      cy.visit(configuration.baseURL)
  
    })  
  })
  

  it('should verify About us link',()=>{

    cy.get('p').contains('About us')
    .parent()
    .should('have.attr','href','/about')
  })

  it('should verify Business and groups link',()=>{

    cy.get('p').contains('Business and groups')
    .parent()
    .should('have.attr','href','/business-and-group')
  })

  it('should verify Support link',()=>{

    cy.get('p').contains('Support')
    .parent()
    .should('have.attr','href', '/contact')
  })

  it('should verify Responsibility link',()=>{

    cy.get('p').contains('Responsibility')
    .parent()
    .should('have.attr','href','/csr')
  })

  it('should verify Blog link',()=>{
    cy.get('p').contains('Blog')
    .parent()
    .should('have.attr','href','https://blog.sonder.com')

  })
  
}) 