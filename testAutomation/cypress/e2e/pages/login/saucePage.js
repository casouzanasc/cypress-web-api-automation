export function visit() {
  cy.visit('/');
}

export function fillCredentials(username, password) {
  cy.get('[data-test="username"]').clear().type(username);
  cy.get('[data-test="password"]').clear().type(password);
}

export function submitLogin() {
  cy.get('[data-test="login-button"]').click();
}

export function login(username, password) {
  fillCredentials(username, password);
  submitLogin();
}

export function logout() {
  cy.get('#react-burger-menu-btn').click();
  cy.get('#logout_sidebar_link').click();
}

export function assertInventoryPage() {
  cy.location('pathname').should('eq', '/inventory.html');
}

export function assertLoginError() {
  cy.get('[data-test="error"]')
    .should('be.visible')
    .and('contain.text', 'Username and password do not match any user in this service');
}

export function assertLoginPage() {
  cy.location('pathname').should('eq', '/');
  cy.get('[data-test="login-button"]').should('be.visible');
}
