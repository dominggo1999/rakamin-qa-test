/// <reference types="cypress" />

Cypress.Commands.add("getByDataCy", (value) => {
  return cy.get(`[data-cy=${value}]`);
});

Cypress.Commands.add("assertUrlEquals", (path) => {
  const baseUrl = Cypress.config("baseUrl");
  cy.url().should("equal", `${baseUrl}${path}`);
});

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace Cypress {
    interface Chainable {
      getByDataCy(value: string): Chainable<JQuery<HTMLElement>>;
      assertUrlEquals(path: string): void;
    }
  }
}

// https://stackoverflow.com/questions/57132428/augmentations-for-the-global-scope-can-only-be-directly-nested-in-external-module
export {};
