class LandingPage {
  readonly url: string = "/";

  elements = {
    vixDropdownMenu: () => cy.getByDataCy("vix-dropdown-menu"),
    exploreVixNavigation: () => cy.getByDataCy("explore-vix-navigation"),
    loginPageButton: () => cy.getByDataCy("login-page-button"),
  };

  visit() {
    cy.visit(this.url);
  }

  visitVixProgram() {
    this.elements.vixDropdownMenu().eq(1).realHover({ pointer: "mouse" });
    this.elements.exploreVixNavigation().eq(1).click({ force: true });
  }
}

export default new LandingPage();
