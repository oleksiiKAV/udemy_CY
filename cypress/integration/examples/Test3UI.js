/// <reference types="Cypress" />
 
describe('My Second Test Suite', function() 
{
    it('My FirstTest case',function() {
         //Check boxes
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        // #checkBoxOption1 - element has id=checkBoxOption1
        cy
            .get('#checkBoxOption1')// get element
            .check() // click
            .should('be.checked') // read state - be used for behavior
            .and('have.value','option1') // read value - have for propeties 
        cy.get('#checkBoxOption1').uncheck().should('not.be.checked')
        // <input id="checkBoxOption2" value="option2" name="checkBoxOption2" type="checkbox" xpath="1">
        // CSS style in Cypress input[type="checkbox"]
        cy.get('input[type="checkbox"]').check(['option2','option3'])
        // cy.get('input[type="checkbox"]').check() - check all
        
        //Static Dropdown
        // <select id="dropdown-class-example" name="dropdown-class-example" xpath="1">
        //     <option value="">Select</option>
        //     <option value="option1">Option1</option>
        //    <option value="option2">Option2</option>
        //    <option value="option3">Option3</option>   </select>
         cy.get('select').select('option2').should('have.value','option2')
        
        // //Dynamic dropdowns
        // <input type="text" id="autocomplete" class="inputs" placeholder="Type to Select Countries" xpath="1">

        cy.get('#autocomplete').type('ind')
        // '.ui-menu-item div' - locator for all elements with "Ind"
        cy.get('.ui-menu-item div').each(($e1, index, $list) => {
        
            if($e1.text()==="India")
            {
                cy.wrap($e1).click()
            }
        })
        // //autocomplete
        cy.get('#autocomplete').should('have.value','India')

        // //visible invisible
        // <input id="displayed-text" name="show-hide" 
        // class="inputs displayed-class" placeholder="Hide/Show Example" 
        //type="text" style="display: block;">
        cy.get('#displayed-text').should('be.visible')
        cy.get('#hide-textbox').click()
        cy.get('#displayed-text').should('not.be.visible')
        cy.get('#show-textbox').click()
        cy.get('#displayed-text').should('be.visible')
        
        // //radio buttons
        //<div class="left-align" id="radio-btn-example">
        //<input value="radio2" name="radioButton" class="radioButton" type="radio"> Radio2
        
        cy.get('[value="radio2"]').check().should('be.checked')
    }  )
 
}  )
