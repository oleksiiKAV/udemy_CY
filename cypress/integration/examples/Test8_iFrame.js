// npm install -D cypress-iframe
// frame - html page into main page
/// <reference types="Cypress" />
/// <reference types="cypress-iframe" />
import "cypress-iframe"

describe('frame test', function(){
    it('Demo frame', function(){
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.frameLoaded('#courses-iframe')
        cy.iframe().find("a[href*='mentorship']").eq(0).click()
        //<h1 class="pricing-title text-white ls-1" xpath="1">BRONZE</h1>
        cy.wait(13000);
        cy.iframe().find("div[class*='pricing-container']").should('have.lenght',2)
        //cy.iframe().find("div[class*='pricing-container']", { timeout: 10000 }).should('be.visible');
        
    })
})