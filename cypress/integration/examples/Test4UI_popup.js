/// <reference types="Cypress" />
 
describe('My Popup Test Suite', function() 
{
 
it('My Popup case',function() {
 
//Check boxes
cy.visit("http://qaclickacademy.com/practice.php")
cy.get('#alertbtn').click()
cy.get('[value="Confirm"]').click()
//window:alert
cy.on('window:alert',(str)=> //listen window:alert event in browser
{
    //Mocha
    expect(str).to.equal('Hello , share this practice page and share your knowledge')
})
//window:confirm 
cy.on('window:confirm',(str)=>
{
    //Mocha
    expect(str).to.equal('Hello , Are you sure you want to confirm?')
})
//  'removeAttr','target' - remove attribute by JQuery - Cypress can not support childs windows
// for Cypress click link should be opened on the current window
cy.get('#opentab').invoke('removeAttr','target').click()
 
cy.url().should('include','rahulshettyacademy')
 
cy.go('back')
 
}  )

 
}  )
 
// the calendar topic
// cy.get('input[name="Date"]').invoke('attr', 'value').then((text) => {
//     expect('08/05/2019').to.equal(text);
// });
// cy.get('input[name="Date"]').invoke(text).then((text) => {
//     expect('08/05/2019').to.equal(text);
// }); 