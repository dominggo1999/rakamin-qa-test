export interface LoginCredentials {
  email: string;
  password: string;
}

class LoginPage {
  readonly url: string = "/login";

  elements = {
    inputEmailField: () => cy.getByDataCy("login-email-text-field"),
    inputPasswordField: () => cy.getByDataCy("login-password-text-field"),
    loginSubmitButton: () => cy.getByDataCy("login-submit-button"),
  };

  fillLoginCredentials({ email, password }: LoginCredentials) {
    this.elements.inputEmailField().type(email);
    this.elements.inputPasswordField().type(password);
  }

  submitLoginCredentials() {
    this.elements.loginSubmitButton().click();
  }

  visit() {
    cy.visit(this.url);
  }
}

export default new LoginPage();
