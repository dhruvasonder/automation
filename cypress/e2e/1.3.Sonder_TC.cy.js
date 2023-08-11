const configuration = require("../support/e2e")


import '../support/commands'


describe('1.3. City on Homepage', () => {

  before(()=>{
    cy.fixture('Sonder').then(function(data){   
      this.data=data
      cy.visit(configuration.baseURL)
  
    })  
  })
  beforeEach(() => {
    cy.get('[type="button"]').contains('View all 40+ cities').should('be.visible');
    cy.get('[type="button"]').contains('View all 40+ cities').click();
   });
   afterEach(() => {
    // Execute this code after each test case
    cy.go(-1);
  });

  it("Should be able to click Chicago city and correctly redirects the user to the Chicago city property page ", () => {
    cy.get('[href="/destinations/chicago/search?"]').should('exist')
    cy.get('[href="/destinations/chicago/search?"]').click()
    cy.url().should('include', 'chicago');
    cy.get('p').contains('Chicago').then((paragraph)=>{
      const paragraphtext = paragraph.text();
      expect(paragraphtext).to.match(/^\d+ (property|properties) in Chicago$/)
    })
   })

   it("Should be able to click london city and correctly redirects the user to the london city property page ", () => {
    cy.get('[href="/destinations/london/search?"]').should('exist')
    cy.get('[href="/destinations/london/search?"]').click()
    cy.url().should('include', 'london');
    cy.get('p').contains('London').then((paragraph)=>{
      const paragraphtext = paragraph.text();
      expect(paragraphtext).to.match(/^\d+ (property|properties) in London$/)
    })
   })


   it("Should be able to click New York city and correctly redirects the user to the New York city property page ", () => {
    cy.get('[href="/destinations/new_york_city/search?"]').should('exist')
    cy.get('[href="/destinations/new_york_city/search?"]').click()
    cy.url().should('include', 'new_york_city');
    cy.get('p').contains('New York City').then((paragraph)=>{
      const paragraphtext = paragraph.text();
      expect(paragraphtext).to.match(/^\d+ (property|properties) in New York City$/)
    })
   })

   it("Should be able to click New Orlean city and correctly redirects the user to the New Orlean city property page ", () => {
    cy.get('[href="/destinations/new_orleans/search?"]').should('exist')
    cy.get('[href="/destinations/new_orleans/search?"]').click()
    cy.url().should('include', 'new_orleans');
    cy.get('p').contains('New Orleans').then((paragraph)=>{
      const paragraphtext = paragraph.text();
      expect(paragraphtext).to.match(/^\d+ (property|properties) in New Orleans$/)
    })
   })

   it("Should be able to click Miami city and correctly redirects the user to the Miami property page ", () => {
    cy.get('[href="/destinations/miami/search?"]').should('exist')
    cy.get('[href="/destinations/miami/search?"]').click()
    cy.url().should('include', 'miami');
    cy.get('p').contains('Miami').then((paragraph)=>{
      const paragraphtext = paragraph.text();
      expect(paragraphtext).to.match(/^\d+ (property|properties) in Miami$/)
    })
   })

   it("Should be able to click Amsterdam city and correctly redirects the user to the Amsterdam property page ", () => {
    cy.get('[href="/destinations/amsterdam/search?"]').should('exist')
    cy.get('[href="/destinations/amsterdam/search?"]').click()
    cy.url().should('include', 'amsterdam');
    cy.get('p').contains('Amsterdam').then((paragraph)=>{
      const paragraphtext = paragraph.text();
      expect(paragraphtext).to.match(/^\d+ (property|properties) in Amsterdam$/)
    })
   })

   it("Should be able to click Atlanta city and correctly redirects the user to the Atlanta property page ", () => {
    cy.get('[href="/destinations/atlanta/search?"]').should('exist')
    cy.get('[href="/destinations/atlanta/search?"]').click()
    cy.url().should('include', 'atlanta');
    cy.get('p').contains('Atlanta').then((paragraph)=>{
      const paragraphtext = paragraph.text();
      expect(paragraphtext).to.match(/^\d+ (property|properties) in Atlanta$/)
    })
   })


   it("Should be able to click Austin city and correctly redirects the user to the Austin property page ", () => {
    cy.get('[href="/destinations/austin/search?"]').should('exist')
    cy.get('[href="/destinations/austin/search?"]').click()
    cy.url().should('include', 'austin');
    cy.get('p').contains('Austin').then((paragraph)=>{
      const paragraphtext = paragraph.text();
      expect(paragraphtext).to.match(/^\d+ (property|properties) in Austin$/)
    })
   })

   it("Should be able to click Barcelona city and correctly redirects the user to the barcelona property page ", () => {
    cy.get('[href="/destinations/barcelona/search?"]').should('exist')
    cy.get('[href="/destinations/barcelona/search?"]').click()
    cy.url().should('include', 'barcelona');
    cy.get('p').contains('Barcelona').then((paragraph)=>{
      const paragraphtext = paragraph.text();
      expect(paragraphtext).to.match(/^\d+ (property|properties) in Barcelona$/)
    })
   })

   it("Should be able to click Boston city and correctly redirects the user to the Boston property page ", () => {
    cy.get('[href="/destinations/boston/search?"]').should('exist')
    cy.get('[href="/destinations/boston/search?"]').click()
    cy.url().should('include', 'boston');
    cy.get('p').contains('Boston').then((paragraph)=>{
      const paragraphtext = paragraph.text();
      expect(paragraphtext).to.match(/^\d+ (property|properties) in Boston$/)
    })
   })

   it("Should be able to click Dallas city and correctly redirects the user to the Dallas property page ", () => {
    cy.get('[href="/destinations/dallas/search?"]').should('exist')
    cy.get('[href="/destinations/dallas/search?"]').click()
    cy.url().should('include', 'dallas');
    cy.get('p').contains('Dallas').then((paragraph)=>{
      const paragraphtext = paragraph.text();
      expect(paragraphtext).to.match(/^\d+ (property|properties) in Dallas$/)
    })
   })

   it("Should be able to click Denver city and correctly redirects the user to the Denver property page ", () => {
    cy.get('[href="/destinations/denver/search?"]').should('exist')
    cy.get('[href="/destinations/denver/search?"]').click()
    cy.url().should('include', 'denver');
    cy.get('p').contains('Denver').then((paragraph)=>{
      const paragraphtext = paragraph.text();
      expect(paragraphtext).to.match(/^\d+ (property|properties) in Denver$/)
    })
   })

   it("Should be able to click Detroit city and correctly redirects the user to the Detroit property page ", () => {
    cy.get('[href="/destinations/detroit/search?"]').should('exist')
    cy.get('[href="/destinations/detroit/search?"]').click()
    cy.url().should('include', 'detroit');
    cy.get('p').contains('Detroit').then((paragraph)=>{
      const paragraphtext = paragraph.text();
      expect(paragraphtext).to.match(/^\d+ (property|properties) in Detroit$/)
    })
   })

   it("Should be able to click Dubai city and correctly redirects the user to the Dubai property page ", () => {
    cy.get('[href="/destinations/dubai/search?"]').should('exist')
    cy.get('[href="/destinations/dubai/search?"]').click()
    cy.url().should('include', 'dubai');
    cy.get('p').contains('Dubai').then((paragraph)=>{
      const paragraphtext = paragraph.text();
      expect(paragraphtext).to.match(/^\d+ (property|properties) in Dubai$/)
    })
   })

   it("Should be able to click Dublin city and correctly redirects the user to the Dublin property page ", () => {
    cy.get('[href="/destinations/dublin/search?"]').should('exist')
    cy.get('[href="/destinations/dublin/search?"]').click()
    cy.url().should('include', 'dublin');
    cy.get('p').contains('Dublin').then((paragraph)=>{
      const paragraphtext = paragraph.text();
      expect(paragraphtext).to.match(/^\d+ (property|properties) in Dublin$/)
    })
   })

   it("Should be able to click Edinburgh city and correctly redirects the user to the Edinburgh property page ", () => {
    cy.get('[href="/destinations/edinburgh/search?"]').should('exist')
    cy.get('[href="/destinations/edinburgh/search?"]').click()
    cy.url().should('include', 'edinburgh');
    cy.get('p').contains('Edinburgh').then((paragraph)=>{
      const paragraphtext = paragraph.text();
      expect(paragraphtext).to.match(/^\d+ (property|properties) in Edinburgh$/)
    })
   })

   it("Should be able to click Glasgow city and correctly redirects the user to the Glasgow property page ", () => {
    cy.get('[href="/destinations/glasgow/search?"]').should('exist')
    cy.get('[href="/destinations/glasgow/search?"]').click()
    cy.url().should('include', 'glasgow');
    cy.get('p').contains('Glasgow').then((paragraph)=>{
      const paragraphtext = paragraph.text();
      expect(paragraphtext).to.match(/^\d+ (property|properties) in Glasgow$/)
    })
   })

   it("Should be able to click Houston city and correctly redirects the user to the Houston property page ", () => {
    cy.get('[href="/destinations/houston/search?"]').should('exist')
    cy.get('[href="/destinations/houston/search?"]').click()
    cy.url().should('include', 'houston');
    cy.get('p').contains('Houston').then((paragraph)=>{
      const paragraphtext = paragraph.text();
      expect(paragraphtext).to.match(/^\d+ (property|properties) in Houston$/)
    })
   })

   it("Should be able to click Los Angeles city and correctly redirects the user to the Los Angeles property page ", () => {
    cy.get('[href="/destinations/los_angeles/search?"]').should('exist')
    cy.get('[href="/destinations/los_angeles/search?"]').click()
    cy.url().should('include', 'los_angeles');
    cy.get('p').contains('Los Angeles').then((paragraph)=>{
      const paragraphtext = paragraph.text();
      expect(paragraphtext).to.match(/^\d+ (property|properties) in Los Angeles$/)
    })
   })

   it("Should be able to click Madrid city and correctly redirects the user to the madrid property page ", () => {
    cy.get('[href="/destinations/madrid/search?"]').should('exist')
    cy.get('[href="/destinations/madrid/search?"]').click()
    cy.url().should('include', 'madrid');
    cy.get('p').contains('Madrid').then((paragraph)=>{
      const paragraphtext = paragraph.text();
      expect(paragraphtext).to.match(/^\d+ (property|properties) in Madrid$/)
    })
   })


   it("Should be able to click Mexico city and correctly redirects the user to the Mexico city property page ", () => {
    cy.get('[href="/destinations/mexico_city/search?"]').should('exist')
    cy.get('[href="/destinations/mexico_city/search?"]').click()
    cy.url().should('include', 'mexico_city');
    cy.get('p').contains('Mexico City').then((paragraph)=>{
      const paragraphtext = paragraph.text();
      expect(paragraphtext).to.match(/^\d+ (property|properties) in Mexico City$/)
    })
   })


   it("Should be able to click Milan city and correctly redirects the user to the Milan property page ", () => {
    cy.get('[href="/destinations/milan/search?"]').should('exist')
    cy.get('[href="/destinations/milan/search?"]').click()
    cy.url().should('include', 'milan');
    cy.get('p').contains('Milan').then((paragraph)=>{
      const paragraphtext = paragraph.text();
      expect(paragraphtext).to.match(/^\d+ (property|properties) in Milan$/)
    })
   })


   it("Should be able to click Minneapolis city and correctly redirects the user to the Minneapolis property page ", () => {
    cy.get('[href="/destinations/minneapolis/search?"]').should('exist')
    cy.get('[href="/destinations/minneapolis/search?"]').click()
    cy.url().should('include', 'minneapolis');
    cy.get('p').contains('Minneapolis').then((paragraph)=>{
      const paragraphtext = paragraph.text();
      expect(paragraphtext).to.match(/^\d+ (property|properties) in Minneapolis$/)
    })
   })


   it("Should be able to click Montreal city and correctly redirects the user to the Montreal property page ", () => {
    cy.get('[href="/destinations/montreal/search?"]').should('exist')
    cy.get('[href="/destinations/montreal/search?"]').click()
    cy.url().should('include', 'montreal');
    cy.get('p').contains('Montreal').then((paragraph)=>{
      const paragraphtext = paragraph.text();
      expect(paragraphtext).to.match(/^\d+ (property|properties) in Montreal$/)
    })
   })


   it("Should be able to click Nashville city and correctly redirects the user to the Nashville property page ", () => {
    cy.get('[href="/destinations/nashville/search?"]').should('exist')
    cy.get('[href="/destinations/nashville/search?"]').click()
    cy.url().should('include', 'nashville');
    cy.get('p').contains('Nashville').then((paragraph)=>{
      const paragraphtext = paragraph.text();
      expect(paragraphtext).to.match(/^\d+ (property|properties) in Nashville$/)
    })
   })

   it("Should be able to click Nice city and correctly redirects the user to the Nice property page ", () => {
    cy.get('[href="/destinations/nice/search?"]').should('exist')
    cy.get('[href="/destinations/nice/search?"]').click()
    cy.url().should('include', 'nice');
    cy.get('p').contains('Nice').then((paragraph)=>{
      const paragraphtext = paragraph.text();
      expect(paragraphtext).to.match(/^\d+ (property|properties) in Nice$/)
    })
   })

   it("Should be able to click Orlando city and correctly redirects the user to the Orlando property page ", () => {
    cy.get('[href="/destinations/orlando/search?"]').should('exist')
    cy.get('[href="/destinations/orlando/search?"]').click()
    cy.url().should('include', 'orlando');
    cy.get('p').contains('Orlando').then((paragraph)=>{
      const paragraphtext = paragraph.text();
      expect(paragraphtext).to.match(/^\d+ (property|properties) in Orlando$/)
    })
   })


   it("Should be able to click Ottawa city and correctly redirects the user to the Ottawa property page ", () => {
    cy.get('[href="/destinations/ottawa/search?"]').should('exist')
    cy.get('[href="/destinations/ottawa/search?"]').click()
    cy.url().should('include', 'ottawa');
    cy.get('p').contains('Ottawa').then((paragraph)=>{
      const paragraphtext = paragraph.text();
      expect(paragraphtext).to.match(/^\d+ (property|properties) in Ottawa$/)
    })
   })

   it("Should be able to click Paris city and correctly redirects the user to the Paris property page ", () => {
    cy.get('[href="/destinations/paris/search?"]').should('exist')
    cy.get('[href="/destinations/paris/search?"]').click()
    cy.url().should('include', 'paris');
    cy.get('p').contains('Paris').then((paragraph)=>{
      const paragraphtext = paragraph.text();
      expect(paragraphtext).to.match(/^\d+ (property|properties) in Paris$/)
    })
   })


   it("Should be able to click Philadelphia city and correctly redirects the user to the Philadelphia property page ", () => {
    cy.get('[href="/destinations/philadelphia/search?"]').should('exist')
    cy.get('[href="/destinations/philadelphia/search?"]').click()
    cy.url().should('include', 'philadelphia');
    cy.get('p').contains('Philadelphia').then((paragraph)=>{
      const paragraphtext = paragraph.text();
      expect(paragraphtext).to.match(/^\d+ (property|properties) in Philadelphia$/)
    })
   })

   it("Should be able to click Phoenix city and correctly redirects the user to the Phoenix property page ", () => {
    cy.get('[href="/destinations/phoenix/search?"]').should('exist')
    cy.get('[href="/destinations/phoenix/search?"]').click()
    cy.url().should('include', 'phoenix');
    cy.get('p').contains('Phoenix').then((paragraph)=>{
      const paragraphtext = paragraph.text();
      expect(paragraphtext).to.match(/^\d+ (property|properties) in Phoenix$/)
    })
   })

   it("Should be able to click Rome city and correctly redirects the user to the Rome property page ", () => {
    cy.get('[href="/destinations/rome/search?"]').should('exist')
    cy.get('[href="/destinations/rome/search?"]').click()
    cy.url().should('include', 'rome');
    cy.get('p').contains('Rome').then((paragraph)=>{
      const paragraphtext = paragraph.text();
      expect(paragraphtext).to.match(/^\d+ (property|properties) in Rome$/)
    })
   })


   it("Should be able to click San Diego city and correctly redirects the user to the San Diego property page ", () => {
    cy.get('[href="/destinations/san_diego/search?"]').should('exist')
    cy.get('[href="/destinations/san_diego/search?"]').click()
    cy.url().should('include', 'san_diego');
    cy.get('p').contains('San Diego').then((paragraph)=>{
      const paragraphtext = paragraph.text();
      expect(paragraphtext).to.match(/^\d+ (property|properties) in San Diego$/)
    })
   })

   it("Should be able to click San Francisco city and correctly redirects the user to the San Francisco property page ", () => {
    cy.get('[href="/destinations/san_francisco/search?"]').should('exist')
    cy.get('[href="/destinations/san_francisco/search?"]').click()
    cy.url().should('include', 'san_francisco');
    cy.get('p').contains('San Francisco').then((paragraph)=>{
      const paragraphtext = paragraph.text();
      expect(paragraphtext).to.match(/^\d+ (property|properties) in San Francisco$/)
    })
   })


   it("Should be able to click Savannah city and correctly redirects the user to the Savannah property page ", () => {
    cy.get('[href="/destinations/savannah/search?"]').should('exist')
    cy.get('[href="/destinations/savannah/search?"]').click()
    cy.url().should('include', 'savannah');
    cy.get('p').contains('Savannah').then((paragraph)=>{
      const paragraphtext = paragraph.text();
      expect(paragraphtext).to.match(/^\d+ (property|properties) in Savannah$/)
    })
   })


   it("Should be able to click Seattle city and correctly redirects the user to the Seattle property page ", () => {
    cy.get('[href="/destinations/seattle/search?"]').should('exist')
    cy.get('[href="/destinations/seattle/search?"]').click()
    cy.url().should('include', 'seattle');
    cy.get('p').contains('Seattle').then((paragraph)=>{
      const paragraphtext = paragraph.text();
      expect(paragraphtext).to.match(/^\d+ (property|properties) in Seattle$/)
    })
   })

   it("Should be able to click Toronto city and correctly redirects the user to the Toronto property page ", () => {
    cy.get('[href="/destinations/toronto/search?"]').should('exist')
    cy.get('[href="/destinations/toronto/search?"]').click()
    cy.url().should('include', 'toronto');
    cy.get('p').contains('Toronto').then((paragraph)=>{
      const paragraphtext = paragraph.text();
      expect(paragraphtext).to.match(/^\d+ (property|properties) in Toronto$/)
    })
   })


   it("Should be able to click Vancouver city and correctly redirects the user to the Vancouver property page ", () => {
    cy.get('[href="/destinations/vancouver/search?"]').should('exist')
    cy.get('[href="/destinations/vancouver/search?"]').click()
    cy.url().should('include', 'vancouver');
    cy.get('p').contains('Vancouver').then((paragraph)=>{
      const paragraphtext = paragraph.text();
      expect(paragraphtext).to.match(/^\d+ (property|properties) in Vancouver$/)
    })
   })

   it("Should be able to click Venice city and correctly redirects the user to the Venice city property page ", () => {
      cy.get('[href="/destinations/venice/search?"]').should('exist')
      cy.get('[href="/destinations/venice/search?"]').click()
      cy.url().should('include', 'venice');
      cy.get('p').contains('Venice').then((paragraph)=>{
        const paragraphtext = paragraph.text();
        expect(paragraphtext).to.match(/^\d+ (property|properties) in Venice$/)
        })
    })

    it("Should be able to click Washington D.C city and correctly redirects the user to the Washington D.C city property page ", () => {
      cy.get('[href="/destinations/washington_dc/search?"]').should('exist')
      cy.get('[href="/destinations/washington_dc/search?"]').click()
      cy.url().should('include', 'washington_dc');
      cy.get('p').contains('Washington D.C.').then((paragraph)=>{
        const paragraphtext = paragraph.text();
        expect(paragraphtext).to.match(/^\d+ (property|properties) in Washington D.C.$/)
        })
    })


})