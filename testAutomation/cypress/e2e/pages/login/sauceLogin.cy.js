import * as saucePage from './saucePage';

describe('Login SauceDemo', () => {

  beforeEach(() => {
    saucePage.visit();
  });

  it('Deve fazer login com sucesso', () => {
    saucePage.login('standard_user', 'secret_sauce');
    saucePage.assertInventoryPage();
  });

  it('Deve exibir erro ao fazer login com senha inválida', () => {
    saucePage.login('standard_user', 'wrong_password');
    saucePage.assertLoginError();
  });

  it('Deve fazer logout com sucesso', () => {
    saucePage.login('standard_user', 'secret_sauce');
    saucePage.assertInventoryPage();
    saucePage.logout();
    saucePage.assertLoginPage();
  });

});