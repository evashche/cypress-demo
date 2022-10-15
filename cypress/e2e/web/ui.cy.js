import CatalogPage from "../pages/CatalogPage.js";
import MainPage from "../pages/MainPage.js";
import ProductPage from "../pages/ProductPage.js";
import ShippingPage from "../pages/ShippingPage.js";
import ShoppingCardPage from "../pages/ShoppingCardPage.js";

const main = new MainPage();
const catalog = new CatalogPage();
const product = new ProductPage();
const shopCard = new ShoppingCardPage();
const shipping = new ShippingPage();

describe("Darkstore Product Card", () => {
  beforeEach(() => {
    cy.visit("https://demo.vercel.store/");
  });

  it("demo", () => {
    let priceItem1;
    let priceItem2;
    main.navBar.getElementByPos(2).click();
    catalog.products.findProduct("ACME Cup").then((pos) => {
      catalog.products.getElementByPos(pos).click();
    });
    product.addButton.click();
    shopCard.items.getItemByPos(1).getElementsByPos(3).getText().then((text) => {
        priceItem1 = +text.replace("$", "");
        shopCard.qtyButtons.getElementByPos(3).clickExtra(4);
        shopCard.items.getItemByPos(1).getElementsByPos(3).isText(`$${(priceItem1 * 5).toFixed(2)}`);
      });
    shopCard.sideBar.click("topLeft");
    main.navBar.getElementByPos(3).click();
    cy.wait(500);
    catalog.products.findProduct("Quarter Zip").then((pos) => {
      catalog.products.getElementByPos(pos).click();
    });
    product.size.getElementByPos(2).click();
    product.addButton.click();
    shopCard.items.verifyElementsLength(2);
    shopCard.items.getItemByPos(1).getParamsByPos(2).isText("M");
    shopCard.items.getItemByPos(1).getElementsByPos(3).getText().then((text) => {
        priceItem2 = +text.replace("$", "");
        shopCard.order.getTotal().isText(`$${(priceItem1 * 5 + priceItem2).toFixed(2)}`);
      });
      shopCard.order.getCheckout().click();// issue https://github.com/cypress-io/cypress/issues/440
      shipping.email.typeEmail()
      for (let i = 3; i < 8; i++) {
        shipping.address.getElementByPos(i).typeRandom()
      }
      shipping.address.getElementByPos(8).type(65014)
      shipping.submit.click()
      shipping.payment.getElementByPos(2).click()
      shipping.submit.click()
  });
});
