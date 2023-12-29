/// <reference types="Cypress" />

const { should } = require("chai")

describe ('My 1-st Test Suite', function(){

    it('My 1-st test case', function(){

        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
        cy.get('.search-keyword').type('ca')
        cy.wait(4000)
        // get items ".product:visible" on the opened page
        cy.get('.product:visible').should('have.length',4)
        // find child  - get frane and in the frame find children - is better and quickly
        cy
            .get('.products') //get class .products
            .find('.product' // find all elements from .product class - return array
            ).should('have.length',4)

        cy.get('.products').find('.product').eq(2).contains('ADD TO CART').click().then(
            function(){console.log('print to console in Cypress order')// print after click
        }
        )

        cy.get('.products').find('.product').each(($el, index, $list) => {
            const textVeg=$el.find('h4.product-name').text()
            if (textVeg.includes('Cashews')){
                cy.wrap($el).find('button').click() //$e1.contains('ADD TO CART').click()
            }
            })
        // we can use alias - re-use the same locators
            // cy.get('.products').as('prodLocator')
            // cy.get('@prodLocator'). ....


        // how read value and write it to var - then() - wait finish operation
        // we should use then for no Cypress commands - as text() - JQuery
        //this is to print in Cypress logs
        cy.get('.brand').then(function(logoelement){
            cy.log(logoelement.text())
        })
        //assert if logo text is correctly displayed
        cy.get('.brand').should('have.text','GREENKART')

    })
})