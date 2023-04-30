class CoursePage {
  readonly url: string = "/virtual-internship-experience/explore";

  elements = {
    firstVacancyCard: () => cy.getByDataCy("vix-card-1"),
  };

  visit() {
    cy.visit(this.url);
  }

  pickVixProgram() {
    this.elements.firstVacancyCard().click();
  }
}

export default new CoursePage();
