const configuration = require("../support/e2e")


import '../support/commands'
import 'cypress-xpath'
let city ="Amsterdam"

describe('4.1 Verify the Destination page elements', () => {

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
  
   
  it('should verify Property listings ',()=>{
   cy.get('[class="BuildingResultsList_articleContainer__xhTXz"]')
   .eq(0)
   .should('exist')
   .invoke('text').then((text)=>{
    cy.log('property text:',text)
   })

   cy.get('[class="BuildingResultsList_articleContainer__xhTXz"]').eq(0)
   .children('a').eq(0)
   .should('exist')

   cy.get('[aria-label="Map"]')
   .should('exist')
    
  })

  it('Verify that each property listing includes information such as the property name, description, amenities, and photos.',()=>{

    cy.get('[class="BuildingResultsList_articleContainer__xhTXz"]').eq(0)
    .find('h4')
    .invoke('text').then((propertyname)=>{
      expect(propertyname).to.eq('Park House')
    })
    
    cy.get('[class="BuildingResultsList_articleContainer__xhTXz"]').eq(0)
    .find('.Text_subtitle1__Mmfj1').should('contain.text','Oud-Zuid, Amsterdam')
   
    
    const expectedTexts=['Lounge and Work Space','Air conditioning','Outdoor Space','Elevator']

    cy.get('[class="BuildingResultsList_articleContainer__xhTXz"]').eq(0)
    .find('.Features_tag__JzQ7W')
    .should(($element)=>{
      const textContent = $element.text()

      expectedTexts.forEach((text)=>{
        expect(textContent).to.include(text)
      });

    })

    cy.get('[class="BuildingResultsList_articleContainer__xhTXz"]').eq(0)
    .find('.swiper-slide').eq(2)
    .children('img').eq(0)
    .should('have.attr','data-src','https://res.cloudinary.com/sonder/image/private/s--BkPuT5LC--/c_pad,h_853,q_auto,w_1280/v1/s3assets/unit_images/images/000/551/328/original/PX9taB7v.jpg')



  })
}) 