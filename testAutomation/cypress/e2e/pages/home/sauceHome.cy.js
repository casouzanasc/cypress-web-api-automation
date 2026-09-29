import * as saucePage from '../login/saucePage';
import * as sauceHomePage from './sauceHomePage';

describe('Home SauceDemo', () => {

  beforeEach(() => {
    saucePage.visit();
    saucePage.login('standard_user', 'secret_sauce');
    saucePage.assertInventoryPage();
  });

  it('Deve adicionar um produto ao carrinho', () => {
    sauceHomePage.addFirstProduct();
    sauceHomePage.goToCart();
  });

});
