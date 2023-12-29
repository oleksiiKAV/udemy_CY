/// <reference types="Cypress" />
 
describe('My Grab Attr Test Suite', function() 
{
 
it('My Test open child URL',function() {
 
//cy can't get opened URL in new window
//used href URL in the same window - JQuery for it
cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
//button on the page: 
//<a id="opentab" class="btn-style class1 class2" 
// href="https://www.rahulshettyacademy.com/" target="_blank">Open Tab</a>
cy.get('#opentab').then(function(el){ // then - as connect JQuery with cypress - wait result
    const url = el.prop('href')
    cy.visit(url)
})
 
})
 
 
})