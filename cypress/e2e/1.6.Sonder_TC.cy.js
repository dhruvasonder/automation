const configuration = require("../support/e2e")


import '../support/commands'
import 'cypress-xpath';



describe('1.6 Visibility of the "New York Time" logo, "Google Customer Reviews" badge, and mention of "Fast Company" on the homepage', () => {

  before(()=>{
    cy.fixture('Sonder').then(function(data){   
      this.data=data
      cy.visit(configuration.baseURL)
  
    })  
  })
  it("Visibility of the 'New York Time' logo , text and attributes", () => {
   cy.get('[class="FeaturedPress_container__3TJkE TechValueProps_press_container__LrcPY"]')
   .scrollIntoView()
   .should('be.visible')

    cy.xpath("(//div[contains(@class,'FeaturedPress_icon_wrapper__dZ_Ae')])[1]/img") .scrollIntoView()
    .should('exist')

    .should('have.attr', 'src', 'https://images.sonder.com/image/upload/v1616468217/sondercom/homepage/tech_value_props/nyt_logo.svg')
    .should('have.attr', 'alt', 'The New York Times logo')

    cy.xpath("(//div[contains(@class,'FeaturedPress_icon_wrapper__dZ_Ae')])[1]/span")
    .contains('The next billion-dollar startups 2019')
    .should('exist')
    
   })

   it("Visibility of the 'Google' logo , text and attributes", () => {

    cy.get('[class="FeaturedPress_container__3TJkE TechValueProps_press_container__LrcPY"]')
    .scrollIntoView()
    .should('be.visible')
 
     cy.xpath("(//div[contains(@class,'FeaturedPress_icon_wrapper__dZ_Ae')])[2]/img") .scrollIntoView()
     .should('exist')
 
     .should('have.attr', 'src', 'https://images.sonder.com/image/upload/v1616465635/sondercom/homepage/tech_value_props/google_reviews.svg')
     .should('have.attr', 'alt', 'Google store rating')
 
     
    })


    
  it("Visibility of the 'Fastcompany' logo , text and attributes", () => {

    cy.get('[class="FeaturedPress_container__3TJkE TechValueProps_press_container__LrcPY"]')
        .scrollIntoView()
        .should('be.visible')
     
    cy.xpath("(//div[contains(@class,'FeaturedPress_icon_wrapper__dZ_Ae')])[3]/img") .scrollIntoView()
     .should('exist')
     
    .should('have.attr', 'src', 'https://images.sonder.com/image/upload/v1565166163/catalina/press/fastco_logo.svg')
    .should('have.attr', 'alt', 'Fast Company logo')
     
    cy.xpath("(//div[contains(@class,'FeaturedPress_icon_wrapper__dZ_Ae')])[3]/span")
    .contains('The world’s #1 most innovative travel company of 2019')
    .should('exist')
    
         
    })
    
  

 })