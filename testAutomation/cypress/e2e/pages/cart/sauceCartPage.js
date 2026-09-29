export function assertProductAdded() {
  cy.get('.cart_item')
    .should('have.length.at.least', 1)
    .and('be.visible');

  cy.get('.inventory_item_name')
    .first()
    .should('be.visible');
}

export function removeFirstItem() {
  cy.get('.cart_button').first().click();
}

export function assertEmptyCart() {
  cy.get('.cart_list').should('not.contain.text', 'item');
}
