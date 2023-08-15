const configuration = require("../support/e2e")


import '../support/commands'
import 'cypress-xpath';


describe('3.5 Input an valid/selected city into the destination city search box ', () => {

  before(()=>{
    cy.fixture('Sonder').then(function(data){   
      this.data=data
      cy.visit(configuration.baseURL)
  
    })  
  })
  

  it(' Input an valid/selected city into the destination city search box ',()=>{
    

    
  })
}) 