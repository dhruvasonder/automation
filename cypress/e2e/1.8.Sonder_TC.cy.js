const configuration = require("../support/e2e")


import '../support/commands'
import 'cypress-xpath';



describe('1.8 "View All Spaces" on the homepage.', () => {

  before(()=>{
    cy.fixture('Sonder').then(function(data){   
      this.data=data
      cy.visit(configuration.baseURL)
  
    })  
  })

  afterEach(() => {
    // Execute this code after each test case
    cy.go(-1);
  });

  it("Verify 'View all spaces' of Philadelphia city", () => {
   
    cy.contains('li.TabBar_tab__0y4cS', 'Philadelphia')
    .should('have.class', 'TabBar_selected__3Zvlj');


    cy.contains('a.Link_base__FORAY', 'View all spaces')
    .should('have.attr', 'href', '/destinations/philadelphia/search?building_id=1150')
    .should('have.attr', 'target', '_self');

    cy.contains('a.Link_base__FORAY', 'View all spaces').click()

    cy.get('p').contains('Philadelphia').then((paragraph)=>{
      const paragraphtext = paragraph.text();
      expect(paragraphtext).to.match(/^\d+ (property|properties) in Philadelphia$/)
    })

  })

  it("Verify 'view all spaces' of London city",()=>{

    cy.get("#aStayInfusedWithCreativityAndCultureHeading").parent().parent().next().find('li').eq(1).contains('London').click()

    cy.contains('li.TabBar_tab__0y4cS', 'London')
    .should('have.class', 'TabBar_selected__3Zvlj');

    cy.contains('a.Link_base__FORAY', 'View all spaces')
    .should('have.attr', 'href', '/destinations/london/search?building_id=1411')
    .should('have.attr', 'target', '_self');

    cy.contains('a.Link_base__FORAY', 'View all spaces').click()

    cy.get('p').contains('London').then((paragraph)=>{
      const paragraphtext = paragraph.text();
      expect(paragraphtext).to.match(/^\d+ (property|properties) in London$/)
    })

    
  })

  it("Verify 'view all spaces' of Orlando city",()=>{

    cy.get("#aStayInfusedWithCreativityAndCultureHeading").parent().parent().next().find('li').eq(2).contains('Orlando').click()

    cy.contains('li.TabBar_tab__0y4cS', 'Orlando')
    .should('have.class', 'TabBar_selected__3Zvlj');

    cy.contains('a.Link_base__FORAY', 'View all spaces')
    .should('have.attr', 'href', '/destinations/orlando/search?building_id=1396')
    .should('have.attr', 'target', '_self');
    
    cy.contains('a.Link_base__FORAY', 'View all spaces').click()

    cy.get('p').contains('Orlando').then((paragraph)=>{
      const paragraphtext = paragraph.text();
      expect(paragraphtext).to.match(/^\d+ (property|properties) in Orlando$/)
    })


  })

  it("Verify 'view all spaces' of Detroit city",()=>{

    cy.get("#aStayInfusedWithCreativityAndCultureHeading").parent().parent().next().find('li').eq(3).contains('Detroit').click()

    cy.contains('li.TabBar_tab__0y4cS', 'Detroit')
    .should('have.class', 'TabBar_selected__3Zvlj');

    cy.contains('a.Link_base__FORAY', 'View all spaces')
    .should('have.attr', 'href', '/destinations/detroit/search?building_id=1325')
    .should('have.attr', 'target', '_self');
    
    cy.contains('a.Link_base__FORAY', 'View all spaces').click()

    cy.get('p').contains('Detroit').then((paragraph)=>{
      const paragraphtext = paragraph.text();
      expect(paragraphtext).to.match(/^\d+ (property|properties) in Detroit$/)
    })


  })


  it("Verify 'view all spaces' of Houston city",()=>{
    cy.wait(2000)
    cy.get("#aStayInfusedWithCreativityAndCultureHeading").parent().parent().next().find('li').eq(4).contains('Houston').click()

    cy.contains('li.TabBar_tab__0y4cS', 'Houston')
    .should('have.class', 'TabBar_selected__3Zvlj');

    cy.contains('a.Link_base__FORAY', 'View all spaces')
    .should('have.attr', 'href', '/destinations/houston/search?building_id=1287')
    .should('have.attr', 'target', '_self');
   
    cy.contains('a.Link_base__FORAY', 'View all spaces').click()

    cy.get('p').contains('Houston').then((paragraph)=>{
      const paragraphtext = paragraph.text();
      expect(paragraphtext).to.match(/^\d+ (property|properties) in Houston$/)
    })


  })


 })