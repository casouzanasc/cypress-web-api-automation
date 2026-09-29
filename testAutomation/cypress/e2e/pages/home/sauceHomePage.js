export function addFirstProduct() {
  cy.get('.inventory_list .inventory_item')
    .first()
    .find('button')
    .click();
}

export function goToCart() {
  cy.get('.shopping_cart_link').click();
}

export function assertCartHasItems() {
  cy.get('.shopping_cart_badge')
    .should('be.visible')
    .and('have.text', '1');
}
