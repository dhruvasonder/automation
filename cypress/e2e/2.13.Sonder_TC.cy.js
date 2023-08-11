const configuration = require("../support/e2e")


import '../support/commands'
import 'cypress-xpath';

function generateRandomEmail() {
  const allowedCharacters = 'abcdefghijklmnopqrstuvwxyz1234567890';
  const emailLength = 10;

  let email = '';
  for (let i = 0; i < emailLength; i++) {
    const randomIndex = Math.floor(Math.random() * allowedCharacters.length);
    const randomChar = allowedCharacters.charAt(randomIndex);
    email += randomChar;
  }

  return `${email}@example.com`;
}

describe('2.13 Functionality of "Sign Up" link in the homepage menu', () => {

  before(()=>{
    cy.fixture('Sonder').then(function(data){   
      this.data=data
      cy.visit(configuration.baseURL)
  
    })  
  })

  it('Click on the "Sign up" link in the pop-up. ',()=>{

    cy.get('.ActionsContainer_actions-container-row__yvXHx')
    .find('p')
    .contains('Sign up')
    .click()

  })

  
  it('should verify the sign up page functionality',()=>{
    const randomEmail = generateRandomEmail();
    const password= "Qwerty@123";

    cy.get('#email')
    .type(randomEmail)

    cy.get('button')
    .contains('Continue')
    .click()

    cy.wait(2000)

    cy.get('#emailConfirmation')
    .type(randomEmail)

    cy.get('#password')
    .type(password)

    cy.get('#firstName')
    .type('Dhruva')

    cy.get('#lastName')
    .type('pathak')
   
    cy.get('button[type="submit"]')
    .click()

    

  })
  it('just log out',()=>{
    cy.get('[class="Dropdown_dropdown_indicator__QvjQL"]')
    .click()

    cy.get('p')
    .contains('Log Out')
    .click()
  })
  
}) 