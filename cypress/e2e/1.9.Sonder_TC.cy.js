const configuration = require("../support/e2e")


import '../support/commands'
import 'cypress-xpath';



describe('1.9 "Every stay has a story" Slider on  Homepage', () => {

  before(()=>{
    cy.fixture('Sonder').then(function(data){   
      this.data=data
      cy.visit(configuration.baseURL)
  
    })  
  })

  it("Verify the title and subtitle text", () => {

    cy.get('#everyStayHasAStoryHeading').contains('Every stay has a story').should('be.visible')

    cy.get('#everyStayHasAStoryHeading').next()
    .contains('It’s hard to explain what makes Sonder so special. Unless, of course, you’re one of our guests.')
    .should('be.visible')
   
  }) 
  
  
  it('Verify the 1st Slide text ',()=>{

    cy.get('#splide02-slide01').should('have.class','is-visible')

    cy.get('#splide02-slide01 section h3')    
    .contains('This unit was perfect! I needed a furnished apartment for a few months and Sonder thought of everything!')
    .should('be.visible')

    cy.get('#splide02-slide01 section div div').invoke('text').then((text)=>{
      expect(text).to.equal('LeahSan Antonio')
    })
  })

  it('Verify the 2nd Slide text',()=>{
    cy.get('#splide02-track').next().find('.splide__arrow--next').click()

    cy.get('#splide02-slide02').should('have.class','is-visible')

    cy.get('#splide02-slide02 section h3')    
    .contains('Our stay at the Wellborne was absolutely fabulous! The check-in process was a breeze. The room and entire hotel were adorably decorated and everything was super clean!')
    .should('be.visible')

    cy.get('#splide02-slide02 section div div').invoke('text').then((text)=>{
      expect(text).to.equal('ErinOrlando')
    })

  })

    it('Verify the 3rd Slide text',()=>{
      cy.get('#splide02-track').next().find('.splide__arrow--next').click()
  
      cy.get('#splide02-slide03').should('have.class','is-visible')
  
      cy.get('#splide02-slide03 section h3')    
      .contains('Love the app! It works like magic and all the information is super helpful to make the experience seamless')
      .should('be.visible')
  
      cy.get('#splide02-slide03 section div div').invoke('text').then((text)=>{
        expect(text).to.equal('JimenaMiami')
      })
  
    })

    it('Verify the 4th Slide text',()=>{
      cy.get('#splide02-track').next().find('.splide__arrow--next').click()
  
      cy.get('#splide02-slide04').should('have.class','is-visible')
  
      cy.get('#splide02-slide04 section h3')    
      .contains('Loved everything about Sonder. The staff made me feel at home. Would definitely recommend this to everyone looking for a home away from home.')
      .should('be.visible')
  
      cy.get('#splide02-slide04 section div div').invoke('text').then((text)=>{
        expect(text).to.equal('SrinithyaPhoenix')
      })
  
    })

    it('Verify the 5th Slide text',()=>{
      cy.get('#splide02-track').next().find('.splide__arrow--next').click()
  
      cy.get('#splide02-slide05').should('have.class','is-visible')
  
      cy.get('#splide02-slide05 section h3')    
      .contains('I had a wonderful stay and was blown away by the thoughtful design and functionality of the apartment. Can’t wait to check out other Sonders in the future.')
      .should('be.visible')
  
      cy.get('#splide02-slide05 section div div').invoke('text').then((text)=>{
        expect(text).to.equal('Fleur RLondon')
      })
  
    })
  
   
   
})