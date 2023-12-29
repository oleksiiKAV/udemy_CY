/// <reference types="Cypress" />
 
describe('My Mouse Test Suite', function() 
{
 
it('My FirstTest case',function() {
 
//cy can't find mouse popup (hiden elements that shown only mouse cursor
//) - used JQuery for it
cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
cy.get('div.mouse-hover-content').invoke('show')
//cy.contains('Top').click(force: true) - just click without open hide section
// 
cy.contains('Top').click()
cy.url().should('include','top')
 
})
 
 
})
