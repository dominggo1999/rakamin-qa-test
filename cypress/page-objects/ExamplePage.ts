class Example {
  readonly url: string = "/pageUrl";

  elements = {};

  visit() {
    cy.get(this.url);
  }
}

export default new Example();
