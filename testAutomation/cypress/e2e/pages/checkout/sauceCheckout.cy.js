import * as saucePage from '../login/saucePage';
import * as sauceHomePage from '../home/sauceHomePage';
import * as sauceCartPage from '../cart/sauceCartPage';
import * as sauceCheckoutPage from './sauceCheckoutPage';

describe('Checkout SauceDemo', () => {

  beforeEach(() => {
    saucePage.visit();
    saucePage.login('standard_user', 'secret_sauce');

    sauceHomePage.addFirstProduct();
    sauceHomePage.goToCart();

    sauceCartPage.assertProductAdded();
  });

  it('Deve finalizar a compra com sucesso', () => {
    sauceCheckoutPage.goToCheckout();

    sauceCheckoutPage.fillCustomerInfo(
      'Camila',
      'Souza',
      '12345-678'
    );

    sauceCheckoutPage.continueCheckout();
    sauceCheckoutPage.finishOrder();
    sauceCheckoutPage.assertOrderConfirmed();
  });

});
