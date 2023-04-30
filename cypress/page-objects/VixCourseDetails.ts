class VixCourseDetails {
  elements = {
    registerButton: () => cy.getByDataCy("register-vix-button"),
    vixInfoSourceCheckbox: () => cy.getByDataCy("vix-info-source-option-1"),
    vixAgreementCheckbox: () => cy.getByDataCy("agreement-checkbox"),
    vixFormSubmitButton: () => cy.getByDataCy("vix-form-submit-button"),
    modalConfirmation: () => cy.get(".ant-modal-body"),
    confirmButton: () => cy.getByDataCy("button-confirm"),
    loginFirstButton: () => cy.getByDataCy("login-first-button"),
  };

  fillRegistrationForm() {
    this.elements.vixInfoSourceCheckbox().click();
    this.elements.vixAgreementCheckbox().click();
    this.elements.vixFormSubmitButton().click();
  }
}

export default new VixCourseDetails();
