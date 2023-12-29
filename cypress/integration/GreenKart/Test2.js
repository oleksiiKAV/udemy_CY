/// <reference types="Cypress" />

const { should } = require("chai")

describe ('My 2-nd Test Suite', function(){

    it('My 1-st test case', function(){

        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
        cy.get('.search-keyword').type('ca')
        cy.wait(4000)
        // get items ".product:visible" on the opened page
        
        cy.get('.products').find('.product').each(($el, index, $list) => {
            const textVeg=$el.find('h4.product-name').text()
            if (textVeg.includes('Cashews')){
                cy.wrap($el).find('button').click() //$e1.contains('ADD TO CART').click()
            }
            })
        cy.get('.cart-icon > img').click()
        cy.contains('PROCEED TO CHECKOUT').click()
        //cy.get('button').click()
        cy.get('.cart-preview > .action-block > button')
        cy.contains('Place Order').click()


    })
})