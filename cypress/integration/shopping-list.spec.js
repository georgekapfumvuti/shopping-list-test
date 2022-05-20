describe('Shopping List Automation Tests', () => {

  beforeEach(() => {
    cy.visit("http://localhost:5000");
  })

  it('SL0006_Create a new shopping list item ', () => {
    cy.get("button").should('have.class', '_2abd6af1').eq(0).click();
    cy.get('input[type="text"]').click().type("Test");
    cy.get('input[type="submit"]').click();
    cy.wait(1500)
    cy.get('li[role="button"]').should('have.length', 7)
    cy.get('input[type="text"]').eq(1).type("Orange");
    cy.get('input[type="submit"]').eq(1).should('have.value', 'Add').click();
    cy.get('li[role="button"]').should('have.length', 8)
  })

  it('SL0010_Delete an unchecked shopping list item ', () => {
    cy.get("button").should('have.class', '_2abd6af1').eq(0).click();
    cy.get('input[type="text"]').click().type("Test");
    cy.get('input[type="submit"]').click();
    cy.wait(1500)
    cy.get('li[role="button"]').should('have.length', 7)

    // Delete Item
    cy.get('div.delete').eq(0).click();
    cy.get('li[role="button"]').should('have.length', 6)
  })
 
  it('SL007_Check and Uncheck a shopping list item ', () => {
    cy.get("button").should('have.class', '_2abd6af1').eq(0).click();
    cy.get('input[type="text"]').click().type("Test");
    cy.get('input[type="submit"]').click();
    cy.wait(1500)
    cy.get('li[role="button"]>input[type="checkbox"]').eq(0).should('not.be.checked')
    cy.get('li[role="button"]>input[type="checkbox"]').eq(0).click({force:true});
    cy.wait(1000)
    cy.get('li[role="button"]>input[type="checkbox"]').eq(0).should('be.checked')
  })
})
