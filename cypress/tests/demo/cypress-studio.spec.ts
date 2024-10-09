describe("Cypress Studio Demo", function () {
  beforeEach(function () {
    cy.visit("/");
  });
  it("check hello world!", function () {
    /* ==== Generated with Cypress Studio ==== */
    cy.get(".bg-red-500").should("have.text", "Hello World!");
    cy.get(".bg-red-500").click();
    cy.get(".bg-red-500").should("have.class", "bg-red-500");
    /* ==== End Cypress Studio ==== */
  });
});
