/// <reference types="Cypress" />
 
describe('My Tables Test Suite', function() 
{
 
it('My FirstTest case',function() {
 
//Check boxes
cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
// table row
// <tr>
// <td>Rahul Shetty</td>
//<td>Selenium Webdriver with Java Basics + Advanced + Interview Guide</td>
//<td>30</td>
//</tr>  
// in tr select 2-nd value and foreach find "Python"
cy.get('tr td:nth-child(2)').each(($e1, index, $list) => {
 
    const text=$e1.text()
    if(text.includes("Python"))
    {       // https://docs.cypress.io/api/commands/next
            // next Get the immediately following sibling of each DOM element within a set of DOM elements.
            // then 
        cy.get("tr td:nth-child(2)").eq(index).next().then(function(price)
        {
         const priceText=   price.text()
         expect(priceText).to.equal('25')
        })
    }
 
})
 
 
})
 
 
})