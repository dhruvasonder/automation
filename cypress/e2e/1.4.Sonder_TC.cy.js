const configuration = require("../support/e2e")


import '../support/commands'


describe('1.4 Download App from App Store', () => {

  before(()=>{
    cy.fixture('Sonder').then(function(data){   
      this.data=data
      cy.visit(configuration.baseURL)
  
    })  
  })
  it("Verify Download App from App Store exists on Homepage", () => {
      cy.get('[class="Link_base__FORAY DownloadButtons_ios__uzL_5"]')
      .should('have.attr', 'href')
      .and('include', 'https://itunes.apple.com/app/apple-store/id1422914567')
      .should('exist')

      cy.get('[class="Link_base__FORAY DownloadButtons_ios__uzL_5"]')
      .find('[class="Image_image__bK_5T"]')
      .should('exist')
  
   })

 })