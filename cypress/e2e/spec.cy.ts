describe("End-to-End test", () => {
  it("Visiting the home page", () => {
    cy.visit("/");
    //check that it is redirected to /search path
    cy.url().should("include", "/search");
    cy.contains("horror").click();
    //check that after filter by horror url contains query parameters with filter
    cy.url().should("include", "?filter=horror");
    cy.get('[data-cy="movieList"] > div').first().click();
    //check if url contains movie query parameter
    cy.url().should("include", "&movie=");
    //check if title of selectedMovie equal to title of clicked movie
    cy.get('[data-cy="titleSelectedMovie"]')
      .invoke("text")
      .then((title1) => {
        cy.get('[data-cy="titleMovie"]').then(($el) => {
          expect($el[0].innerText).to.equal(title1);
        });
      });
  });
});
