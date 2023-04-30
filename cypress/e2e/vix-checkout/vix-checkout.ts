import {
  And,
  Before,
  Given,
  When,
  Then,
} from "cypress-cucumber-preprocessor/steps";
import {
  LandingPage,
  ExploreVixPage,
  VixCourseDetails,
  VixCheckoutPage,
  LoginPage,
} from "page-objects";

// Scenario 1
Before(() => {
  cy.login();
  cy.wait(2000);
});

Given("User navigates to the VIX detail page", () => {
  LandingPage.visit();
  LandingPage.visitVixProgram();

  ExploreVixPage.pickVixProgram();
});

When("User click “Daftar Sekarang”", () => {
  VixCourseDetails.elements.registerButton().click();
});

And("User fill form application", () => {
  VixCourseDetails.fillRegistrationForm();
});

Then("The system showing modal confirmation", () => {
  VixCourseDetails.elements.modalConfirmation().should("exist");
});

When("User confirmed to continue", () => {
  VixCourseDetails.elements.confirmButton().click();
});

Then("The system redirect the user to checkout page", () => {
  cy.assertUrlEquals(VixCheckoutPage.url);
});

And("User choose  VIP Access", () => {
  VixCheckoutPage.elements.VIPAccessCheckBox().click();
});

Then("The system redirect to payment page", () => {
  cy.assertUrlEquals("thank-you-page/virtual-internship-experience");
});

// Scenario 2
const state: {
  courseLink: string;
} = {
  courseLink: "",
};

Given("User navigates to the VIX detail page", () => {
  // Logout
  cy.clearCookies();
  cy.clearLocalStorage();

  LandingPage.visit();
  LandingPage.visitVixProgram();

  ExploreVixPage.elements.firstVacancyLink().then(($link) => {
    state.courseLink = $link.attr("href");
  });
  ExploreVixPage.pickVixProgram();
});

When("User click “Daftar Sekarang”", () => {
  VixCourseDetails.elements.registerButton().click();
});

Then("User redirected to login page", () => {
  cy.assertUrlEquals(LoginPage.url);
});

When("User fill login credential and submit", () => {
  // TODO : make different credentials for this one, since we only have 1 free quota for vix registration
  cy.login();
});

Then("The system redirects user to VIX detail page", () => {
  cy.log(state.courseLink);
  cy.assertUrlEquals(state.courseLink);
});

And("User continue to checkout following Scenario#1", () => {
  VixCourseDetails.elements.registerButton().click();

  VixCourseDetails.fillRegistrationForm();

  VixCourseDetails.elements.modalConfirmation().should("exist");

  VixCourseDetails.elements.confirmButton().click();

  cy.assertUrlEquals(VixCheckoutPage.url);

  VixCheckoutPage.elements.VIPAccessCheckBox().click();

  cy.assertUrlEquals("thank-you-page/virtual-internship-experience");
});
