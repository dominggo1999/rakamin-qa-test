class CoursePage {
  readonly url: string = "/virtual-internship-experience/explore";

  elements = {
    firstVacancyCard: () => cy.getByDataCy("vix-card-1"),
    firstVacancyLink: () =>
      this.elements.firstVacancyCard().get("a.vacancy-card-link"),
  };

  visit() {
    cy.visit(this.url);
  }

  pickVixProgram() {
    this.elements.firstVacancyCard().click();
  }
}

export default new CoursePage();
