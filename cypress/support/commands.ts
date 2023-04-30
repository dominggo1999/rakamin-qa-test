/// <reference types="cypress" />

import { LoginPage } from "page-objects";
import type { LoginCredentials } from "page-objects";

Cypress.Commands.add("getByDataCy", (value) => {
  return cy.get(`[data-cy=${value}]`);
});

Cypress.Commands.add("assertUrlEquals", (path) => {
  const baseUrl = Cypress.config("baseUrl");
  cy.url().should("equal", `${baseUrl}${path}`);
});

Cypress.Commands.add("login", () => {
  LoginPage.visit();
  LoginPage.fillLoginCredentials({
    email: Cypress.env("CYPRESS_LOGIN_EMAIL"),
    password: Cypress.env("CYPRESS_LOGIN_PASSWORD"),
  });
  LoginPage.submitLoginCredentials();
});

Cypress.Commands.add("loginWith", ({ email, password }) => {
  LoginPage.visit();
  LoginPage.fillLoginCredentials({
    email,
    password,
  });
  LoginPage.submitLoginCredentials();
});

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace Cypress {
    interface Chainable {
      getByDataCy(value: string): Chainable<JQuery<HTMLElement>>;
      assertUrlEquals(path: string): void;
      login(): void;
      loginWith(credentials: LoginCredentials): void;
    }
  }
}

// https://stackoverflow.com/questions/57132428/augmentations-for-the-global-scope-can-only-be-directly-nested-in-external-module
export {};
