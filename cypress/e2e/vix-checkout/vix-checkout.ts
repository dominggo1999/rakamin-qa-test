import { Given } from "cypress-cucumber-preprocessor/steps";
import { LandingPage, ExploreVixPage } from "page-objects";

Given("User navigates to the VIX detail page", () => {
  LandingPage.visit();
  LandingPage.visitVixProgram();

  ExploreVixPage.pickVixProgram();
});
