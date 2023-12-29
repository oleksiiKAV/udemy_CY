/// <reference types="Cypress" />
// import cypress from 'cypress'

import HomePage from '../../support/pageObjects/HomePage'
import ProductPage from '../../support/pageObjects/ProductPage'

describe('framework test', function(){
    before(function(){
        cy.fixture('example').then(function(data){
            this.data=data //this.data return as global variable for next use
        })
    })
    it('Demo framework', function(){
        
        const homePage = new HomePage()
        const productPage = new ProductPage()
        //cy.log(Cypress.env('url' + '/angularpractice/'))
        var addr = Cypress.env('url') + '/angularpractice/'
        cy.log(addr)
        //cy.visit('https://rahulshettyacademy.com/angularpractice/')
        cy.visit(addr)
        
        homePage.getEditBox().type(this.data.name)
        homePage.getGender().select(this.data.gender)
        // validate that the entered name is duplicated in the other field
        homePage.getTwoWaitDataBinding().should('have.value',this.data.name)
        //validate that input field has attr 'minlength' with lenght = 2
        homePage.getEditBox().should('have.attr','minlength','2')
        // validatye that Radio3 is disabled
        homePage.getEnterpreneaur().should('be.disabled')
        // go to shop, find 4-th element and click 4-th Add button
        // move 24-28 to the supoort as a new command
        homePage.getShopTab().click()// click Shop button
        
        this.data.productName.forEach(element => cy.selectProduct(element))
        productPage.checkOutButton().click()
        // read price elements from checkout table
        var sum=0
        cy.get('tr td:nth-child(4) strong').each(($el, index, $list) => {
            cy.log($el.text())
            // next some coomands are not Cypress - it means that it will be
            // executed synshronize
            const amount = $el.text()
            var res = amount.split(" ")
            res = res[1].trim()
            sum = Number(sum) + Number(res) // from str to Number
            cy.log(res)
            cy.log(sum)
        }).then(function(){cy.log(sum)}) // whait last execution 
        
        cy.get('h3 > strong').then(function(element){
            const amount = element.text()
            var res = amount.split(" ")
            var total = res[1].trim()
            expect(Number(total)).to.equal(sum)

        })

        cy.contains('Checkout').click()
        cy.get('#country').type('India')
        //next command is only for current tests - overload general config
        Cypress.config('defaultCommandTimeout', 20000)
        cy.get('.suggestions > ul > li > a').click()
        cy.get('#checkbox2').click({force:true})
        cy.get('input[type="submit"]').click() //'.ng-untouched > .btn')
        // next will be fail because the str has "\n" etc. symbols
        //cy.get('.alert').should('have.text','Success! Thank you! Your order will be delivered in next few weeks :-).')
        // get text and compare
        cy.get('.alert').then(function(el){
            const actText = el.text()
            
            expect(actText.includes('Success')).to.be.true
        })

        
        
    })
})