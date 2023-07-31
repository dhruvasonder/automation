const configuration = require("../support/e2e")


import '../support/commands'


describe('1.5 Get it On Google Play', () => {

  before(()=>{
    cy.fixture('Sonder').then(function(data){   
      this.data=data
      cy.visit(configuration.baseURL)
  
    })  
  })
  it("Verify Get sonder app On Google Play exist on Homepage", () => {
      cy.get('[class="Link_base__FORAY DownloadButtons_android__AHVWB"]')
      .should('have.attr', 'href')
      .and('include', 'https://play.google.com/store/apps/details?id=com.sonder.mahalo')
      .should('exist')

      cy.get('[class="Link_base__FORAY DownloadButtons_android__AHVWB"]')
      .find('[class="Image_image__bK_5T"]')
      .should('exist')
  
   })

 })