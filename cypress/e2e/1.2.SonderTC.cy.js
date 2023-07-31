const configuration = require("../support/e2e")


import '../support/commands'


describe('1.2 Cities Displayed with the "View all 40+ Cities" Button on the Sonder.com Homepage', () => {

  before(()=>{
    cy.fixture('Sonder').then(function(data){   
      this.data=data
      cy.visit(configuration.baseURL)
  
    })  
  })
  it('Cities Displayed with the "View all 40+ Cities" Button on the Sonder.com Homepage', () => {
    cy.get('[type="button"]').contains('View all 40+ cities').should('be.visible')
    cy.get('[type="button"]').contains('View all 40+ cities').click()

  })
  it("Should display Chicago city container with correct elements", () => {
    cy.get('[href="/destinations/chicago/search?"]').should('exist')
    cy.get('[href="/destinations/chicago/search?"]').invoke('text').then((text) => {
      const linkText = text.trim(); // Trim any leading/trailing whitespace
    
      // Perform the comparison
      const expectedText = "6 neighborhoodsChicago";
      expect(linkText).to.equal(expectedText);
    });

  })

  it("Should display london city container with correct elements", () => {
    cy.get('[href="/destinations/london/search?"]').should('exist')
    cy.get('[href="/destinations/london/search?"]').invoke('text').then((text) => {
      const linkText = text.trim(); // Trim any leading/trailing whitespace
    
      // Perform the comparison
      const expectedText = "14 neighborhoodsLondon";
      expect(linkText).to.equal(expectedText);
    });

  })

  it("Should display New York city container with correct elements", () => {
    cy.get('[href="/destinations/new_york_city/search?"]').should('exist')
    cy.get('[href="/destinations/new_york_city/search?"]').invoke('text').then((text) => {
      const linkText = text.trim(); // Trim any leading/trailing whitespace
    
      // Perform the comparison
      const expectedText = "4 neighborhoodsNew York City";
      expect(linkText).to.equal(expectedText);
    });

  })

  it("Should display New Orlean city container with correct elements", () => {
    cy.get('[href="/destinations/new_orleans/search?"]').should('exist')
    cy.get('[href="/destinations/new_orleans/search?"]').invoke('text').then((text) => {
      const linkText = text.trim(); // Trim any leading/trailing whitespace
    
      // Perform the comparison
      const expectedText = "10 neighborhoodsNew Orleans";
      expect(linkText).to.equal(expectedText);
    });

  })


  it("Should display Miami city container with correct elements", () => {
    cy.get('[href="/destinations/miami/search?"]').should('exist')
    cy.get('[href="/destinations/miami/search?"]').invoke('text').then((text) => {
      const linkText = text.trim(); // Trim any leading/trailing whitespace
    
      // Perform the comparison
      const expectedText = "4 neighborhoodsMiami";
      expect(linkText).to.equal(expectedText);
    });

  })

  it("Should display Amsterdam city container with correct elements", () => {
    cy.get('[href="/destinations/amsterdam/search?"]').should('exist')
    cy.get('[href="/destinations/amsterdam/search?"]').invoke('text').then((text) => {
      const linkText = text.trim(); // Trim any leading/trailing whitespace
    
      // Perform the comparison
      const expectedText = "1 neighborhoodAmsterdam";
      expect(linkText).to.equal(expectedText);
    });

   
    })

    it("Should display Atlanta city container with correct elements", () => {
      cy.get('[href="/destinations/atlanta/search?"]').should('exist')
      cy.get('[href="/destinations/atlanta/search?"]').invoke('text').then((text) => {
        const linkText = text.trim(); // Trim any leading/trailing whitespace
      
        // Perform the comparison
        const expectedText = "2 neighborhoodsAtlanta";
        expect(linkText).to.equal(expectedText);
        })
     })

     it("Should display Austin city container with correct elements", () => {
      cy.get('[href="/destinations/austin/search?"]').should('exist')
      cy.get('[href="/destinations/austin/search?"]').invoke('text').then((text) => {
        const linkText = text.trim(); // Trim any leading/trailing whitespace
      
        // Perform the comparison
        const expectedText = "4 neighborhoodsAustin";
        expect(linkText).to.equal(expectedText);
        })
     })

     it("Should display Barcelona city container with correct elements", () => {
      cy.get('[href="/destinations/austin/search?"]').should('exist')
      cy.get('[href="/destinations/austin/search?"]').invoke('text').then((text) => {
        const linkText = text.trim(); // Trim any leading/trailing whitespace
      
        // Perform the comparison
        const expectedText = "4 neighborhoodsAustin";
        expect(linkText).to.equal(expectedText);
        })
     })

     it("Should display Boston city container with correct elements", () => {
      cy.get('[href="/destinations/boston/search?"]').should('exist')
      cy.get('[href="/destinations/boston/search?"]').invoke('text').then((text) => {
        const linkText = text.trim(); // Trim any leading/trailing whitespace
      
        // Perform the comparison
        const expectedText = "3 neighborhoodsBoston";
        expect(linkText).to.equal(expectedText);
        })
     })

     it("Should display Dallas city container with correct elements", () => {
      cy.get('[href="/destinations/dallas/search?"]').should('exist')
      cy.get('[href="/destinations/dallas/search?"]').invoke('text').then((text) => {
        const linkText = text.trim(); // Trim any leading/trailing whitespace
      
        // Perform the comparison
        const expectedText = "2 neighborhoodsDallas";
        expect(linkText).to.equal(expectedText);
        })
     })

     it("Should display Denver city container with correct elements", () => {
      cy.get('[href="/destinations/denver/search?"]').should('exist')
      cy.get('[href="/destinations/denver/search?"]').invoke('text').then((text) => {
        const linkText = text.trim(); // Trim any leading/trailing whitespace
      
        // Perform the comparison
        const expectedText = "3 neighborhoodsDenver";
        expect(linkText).to.equal(expectedText);
        })
     })
     it("Should display Detroit city container with correct elements", () => {
      cy.get('[href="/destinations/detroit/search?"]').should('exist')
      cy.get('[href="/destinations/detroit/search?"]').invoke('text').then((text) => {
        const linkText = text.trim(); // Trim any leading/trailing whitespace
      
        // Perform the comparison
        const expectedText = "1 neighborhoodDetroit";
        expect(linkText).to.equal(expectedText);
        })
     })

     it("Should display Dubai city container with correct elements", () => {
      cy.get('[href="/destinations/dubai/search?"]').should('exist')
      cy.get('[href="/destinations/dubai/search?"]').invoke('text').then((text) => {
        const linkText = text.trim(); // Trim any leading/trailing whitespace
      
        // Perform the comparison
        const expectedText = "2 neighborhoodsDubai";
        expect(linkText).to.equal(expectedText);
        })
     })

     it("Should display Dublin city container with correct elements", () => {
      cy.get('[href="/destinations/dublin/search?"]').should('exist')
      cy.get('[href="/destinations/dublin/search?"]').invoke('text').then((text) => {
        const linkText = text.trim(); // Trim any leading/trailing whitespace
      
        // Perform the comparison
        const expectedText = "2 neighborhoodsDublin";
        expect(linkText).to.equal(expectedText);
        })
     })

     it("Should display Edinburgh city container with correct elements", () => {
      cy.get('[href="/destinations/edinburgh/search?"]').should('exist')
      cy.get('[href="/destinations/edinburgh/search?"]').invoke('text').then((text) => {
        const linkText = text.trim(); // Trim any leading/trailing whitespace
      
        // Perform the comparison
        const expectedText = "1 neighborhoodEdinburgh";
        expect(linkText).to.equal(expectedText);
        })
     })

     it("Should display Glasgow city container with correct elements", () => {
      cy.get('[href="/destinations/glasgow/search?"]').should('exist')
      cy.get('[href="/destinations/glasgow/search?"]').invoke('text').then((text) => {
        const linkText = text.trim(); // Trim any leading/trailing whitespace
      
        // Perform the comparison
        const expectedText = "1 neighborhoodGlasgow";
        expect(linkText).to.equal(expectedText);
        })
     })

     it("Should display Houston city container with correct elements", () => {
      cy.get('[href="/destinations/houston/search?"]').should('exist')
      cy.get('[href="/destinations/houston/search?"]').invoke('text').then((text) => {
        const linkText = text.trim(); // Trim any leading/trailing whitespace
      
        // Perform the comparison
        const expectedText = "6 neighborhoodsHouston";
        expect(linkText).to.equal(expectedText);
        })
     })

     it("Should display Los Angeles city container with correct elements", () => {
      cy.get('[href="/destinations/los_angeles/search?"]').should('exist')
      cy.get('[href="/destinations/los_angeles/search?"]').invoke('text').then((text) => {
        const linkText = text.trim(); // Trim any leading/trailing whitespace
      
        // Perform the comparison
        const expectedText = "1 neighborhoodLos Angeles";
        expect(linkText).to.equal(expectedText);
        })
     })

     it("Should display Madrid city container with correct elements", () => {
      cy.get('[href="/destinations/madrid/search?"]').should('exist')
      cy.get('[href="/destinations/madrid/search?"]').invoke('text').then((text) => {
        const linkText = text.trim(); // Trim any leading/trailing whitespace
      
        // Perform the comparison
        const expectedText = "1 neighborhoodMadrid";
        expect(linkText).to.equal(expectedText);
        })
     })

     it("Should display Mexico city container with correct elements", () => {
      cy.get('[href="/destinations/mexico_city/search?"]').should('exist')
      cy.get('[href="/destinations/mexico_city/search?"]').invoke('text').then((text) => {
        const linkText = text.trim(); // Trim any leading/trailing whitespace
      
        // Perform the comparison
        const expectedText = "2 neighborhoodsMexico City";
        expect(linkText).to.equal(expectedText);
        })
     })

     it("Should display Milan city container with correct elements", () => {
      cy.get('[href="/destinations/milan/search?"]').should('exist')
      cy.get('[href="/destinations/milan/search?"]').invoke('text').then((text) => {
        const linkText = text.trim(); // Trim any leading/trailing whitespace
      
        // Perform the comparison
        const expectedText = "1 neighborhoodMilan";
        expect(linkText).to.equal(expectedText);
        })
     })
     
     it("Should display Minneapolis city container with correct elements", () => {
      cy.get('[href="/destinations/minneapolis/search?"]').should('exist')
      cy.get('[href="/destinations/minneapolis/search?"]').invoke('text').then((text) => {
        const linkText = text.trim(); // Trim any leading/trailing whitespace
      
        // Perform the comparison
        const expectedText = "5 neighborhoodsMinneapolis";
        expect(linkText).to.equal(expectedText);
        })
     })
     
     it("Should display Montreal city container with correct elements", () => {
      cy.get('[href="/destinations/montreal/search?"]').should('exist')
      cy.get('[href="/destinations/montreal/search?"]').invoke('text').then((text) => {
        const linkText = text.trim(); // Trim any leading/trailing whitespace
      
        // Perform the comparison
        const expectedText = "5 neighborhoodsMontreal";
        expect(linkText).to.equal(expectedText);
        })
     })

     it("Should display Nashville city container with correct elements", () => {
      cy.get('[href="/destinations/montreal/search?"]').should('exist')
      cy.get('[href="/destinations/montreal/search?"]').invoke('text').then((text) => {
        const linkText = text.trim(); // Trim any leading/trailing whitespace
      
        // Perform the comparison
        const expectedText = "5 neighborhoodsMontreal";
        expect(linkText).to.equal(expectedText);
        })
     })
     it("Should display Nice city container with correct elements", () => {
      cy.get('[href="/destinations/nice/search?"]').should('exist')
      cy.get('[href="/destinations/nice/search?"]').invoke('text').then((text) => {
        const linkText = text.trim(); // Trim any leading/trailing whitespace
      
        // Perform the comparison
        const expectedText = "1 neighborhoodNice";
        expect(linkText).to.equal(expectedText);
        })
     })
     it("Should display Orlando city container with correct elements", () => {
      cy.get('[href="/destinations/orlando/search?"]').should('exist')
      cy.get('[href="/destinations/orlando/search?"]').invoke('text').then((text) => {
        const linkText = text.trim(); // Trim any leading/trailing whitespace
      
        // Perform the comparison
        const expectedText = "3 neighborhoodsOrlando";
        expect(linkText).to.equal(expectedText);
        })
     })
  
     it("Should display Ottawa city container with correct elements", () => {
      cy.get('[href="/destinations/ottawa/search?"]').should('exist')
      cy.get('[href="/destinations/ottawa/search?"]').invoke('text').then((text) => {
        const linkText = text.trim(); // Trim any leading/trailing whitespace
      
        // Perform the comparison
        const expectedText = "1 neighborhoodOttawa";
        expect(linkText).to.equal(expectedText);
        })
     })

     it("Should display Paris city container with correct elements", () => {
      cy.get('[href="/destinations/paris/search?"]').should('exist')
      cy.get('[href="/destinations/paris/search?"]').invoke('text').then((text) => {
        const linkText = text.trim(); // Trim any leading/trailing whitespace
      
        // Perform the comparison
        const expectedText = "1 neighborhoodParis";
        expect(linkText).to.equal(expectedText);
        })
     })
  
     it("Should display Philadelphia city container with correct elements", () => {
      cy.get('[href="/destinations/philadelphia/search?"]').should('exist')
      cy.get('[href="/destinations/philadelphia/search?"]').invoke('text').then((text) => {
        const linkText = text.trim(); // Trim any leading/trailing whitespace
      
        // Perform the comparison
        const expectedText = "8 neighborhoodsPhiladelphia";
        expect(linkText).to.equal(expectedText);
        })
     })

     it("Should display Phoenix city container with correct elements", () => {
      cy.get('[href="/destinations/phoenix/search?"]').should('exist')
      cy.get('[href="/destinations/phoenix/search?"]').invoke('text').then((text) => {
        const linkText = text.trim(); // Trim any leading/trailing whitespace
      
        // Perform the comparison
        const expectedText = "3 neighborhoodsPhoenix";
        expect(linkText).to.equal(expectedText);
        })
     })
  
     it("Should display Rome city container with correct elements", () => {
      cy.get('[href="/destinations/rome/search?"]').should('exist')
      cy.get('[href="/destinations/rome/search?"]').invoke('text').then((text) => {
        const linkText = text.trim(); // Trim any leading/trailing whitespace
      
        // Perform the comparison
        const expectedText = "13 neighborhoodsRome";
        expect(linkText).to.equal(expectedText);
        })
     })

     it("Should display San Diego city container with correct elements", () => {
      cy.get('[href="/destinations/san_diego/search?"]').should('exist')
      cy.get('[href="/destinations/san_diego/search?"]').invoke('text').then((text) => {
        const linkText = text.trim(); // Trim any leading/trailing whitespace
      
        // Perform the comparison
        const expectedText = "6 neighborhoodsSan Diego";
        expect(linkText).to.equal(expectedText);
        })
     })
  
     it("Should display San Francisco city container with correct elements", () => {
      cy.get('[href="/destinations/san_francisco/search?"]').should('exist')
      cy.get('[href="/destinations/san_francisco/search?"]').invoke('text').then((text) => {
        const linkText = text.trim(); // Trim any leading/trailing whitespace
      
        // Perform the comparison
        const expectedText = "1 neighborhoodSan Francisco";
        expect(linkText).to.equal(expectedText);
        })
     })
  
     it("Should display Savannah city container with correct elements", () => {
      cy.get('[href="/destinations/savannah/search?"]').should('exist')
      cy.get('[href="/destinations/savannah/search?"]').invoke('text').then((text) => {
        const linkText = text.trim(); // Trim any leading/trailing whitespace
      
        // Perform the comparison
        const expectedText = "1 neighborhoodSavannah";
        expect(linkText).to.equal(expectedText);
        })
     })

     it("Should display Seattle city container with correct elements", () => {
      cy.get('[href="/destinations/seattle/search?"]').should('exist')
      cy.get('[href="/destinations/seattle/search?"]').invoke('text').then((text) => {
        const linkText = text.trim(); // Trim any leading/trailing whitespace
      
        // Perform the comparison
        const expectedText = "1 neighborhoodSeattle";
        expect(linkText).to.equal(expectedText);
        })
     })

     it("Should display Toronto city container with correct elements", () => {
      cy.get('[href="/destinations/toronto/search?"]').should('exist')
      cy.get('[href="/destinations/toronto/search?"]').invoke('text').then((text) => {
        const linkText = text.trim(); // Trim any leading/trailing whitespace
      
        // Perform the comparison
        const expectedText = "5 neighborhoodsToronto";
        expect(linkText).to.equal(expectedText);
        })
     })

     it("Should display Vancouver city container with correct elements", () => {
      cy.get('[href="/destinations/vancouver/search?"]').should('exist')
      cy.get('[href="/destinations/vancouver/search?"]').invoke('text').then((text) => {
        const linkText = text.trim(); // Trim any leading/trailing whitespace
      
        // Perform the comparison
        const expectedText = "1 neighborhoodVancouver";
        expect(linkText).to.equal(expectedText);
        })
     })

     it("Should display Venice city container with correct elements", () => {
      cy.get('[href="/destinations/venice/search?"]').should('exist')
      cy.get('[href="/destinations/venice/search?"]').invoke('text').then((text) => {
        const linkText = text.trim(); // Trim any leading/trailing whitespace
      
        // Perform the comparison
        const expectedText = "1 neighborhoodVenice";
        expect(linkText).to.equal(expectedText);
        })
     })

     it("Should display Washington D.C city container with correct elements", () => {
      cy.get('[href="/destinations/washington_dc/search?"]').should('exist')
      cy.get('[href="/destinations/washington_dc/search?"]').invoke('text').then((text) => {
        const linkText = text.trim(); // Trim any leading/trailing whitespace
      
        // Perform the comparison
        const expectedText = "3 neighborhoodsWashington D.C.";
        expect(linkText).to.equal(expectedText);
        })
     })




})