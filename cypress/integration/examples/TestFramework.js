/// <reference types="Cypress" />



describe('framework test', function(){
    before(function(){
        cy.fixture('example').then(function(data){
            this.data=data //this.data return as global variable for next use
        })
    })
    it('Demo framework', function(){
        cy.visit('https://rahulshettyacademy.com/angularpractice/')
        cy.get('input[name="name"]:nth-child(2)').type(this.data.name)
        cy.get('Select').select(this.data.gender)
        // validate that the entered name is duplicated in the other field
        cy.get(':nth-child(4) > .ng-untouched').should('have.value',this.data.name)
        //validate that input field has attr 'minlength' with lenght = 2
        cy.get('input[name="name"]:nth-child(2)').should('have.attr','minlength','2')
        // validatye that Radio3 is disabled
        cy.get('#inlineRadio3').should('be.disabled')
        // go to shop, find 4-th element and click 4-th Add button
        // move 24-28 to the supoort as a new command
        cy.get(':nth-child(2) > .nav-link').click()// click Shop button
        // cy.get('h4.card-title').each(($e1, index, $list) => {
        //     if($e1.text().includes('Blackberry')){
        //         cy.get('button.btn.btn-info').eq(index).click()
        //     }
        // })
        //cy.selectProduct('Blackberry')
        //cy.selectProduct('Nokia Edge')
        // this.data.productName.forEach(function(element){
        //     cy.selectProduct(element)
        // });
        // next string as use data from fixtures
        this.data.productName.forEach(element => cy.selectProduct(element))

        
    })
})