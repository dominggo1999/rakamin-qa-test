class VixCheckoutPage {
  readonly url: string = "/checkout";

  elements = {
    basicAccessCheckBox: () => cy.getByDataCy("basic-access-checkbox"),
    VIPAccessCheckBox: () => cy.getByDataCy("vip-access-checkbox"),
    continueToPaymentButton: () => cy.getByDataCy("continue-to-payment-button"),
  };

  visit() {
    cy.visit(this.url);
  }
}

export default new VixCheckoutPage();
