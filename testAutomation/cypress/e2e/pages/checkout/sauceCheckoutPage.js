export function goToCheckout() {
  cy.get('[data-test="checkout"]').click();
}

export function fillCustomerInfo(firstName, lastName, postalCode) {
  cy.get('[data-test="firstName"]').clear().type(firstName);
  cy.get('[data-test="lastName"]').clear().type(lastName);
  cy.get('[data-test="postalCode"]').clear().type(postalCode);
}

export function continueCheckout() {
  cy.get('[data-test="continue"]').click();
}

export function finishOrder() {
  cy.get('[data-test="finish"]').click();
}

export function assertOrderConfirmed() {
  cy.get('.complete-header')
    .should('be.visible')
    .and('contain.text', 'Thank you for your order!');
}
