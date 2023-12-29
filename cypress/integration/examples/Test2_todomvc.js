/// <reference types="Cypress" />

const { should } = require("chai")

describe ('My 1-st Test Suite', function(){

    it('My 1-st test case', function(){

        cy.visit("https://todomvc.com/examples/vanillajs/#/")
        // cy.get('.search-keyword').type('ca')
        let i=1
        for(i; i<=4; i++){
            let s = 'todo ' + i + '{enter}'
            cy.get('.new-todo').type(s)
            cy.wait(2000)
        }
        cy.get('.toggle').should('have.length',i-1)
        //cy.get('[data-layer="Content"]')
    })
})