import { ExamplePage } from "page-objects";

describe("Hello", () => {
  it("world", () => {
    expect(true).to.be.true;
    cy.getByDataCy("test");
    ExamplePage.visit();
  });
});
