import { Simulate } from "react-dom/test-utils";
import pause = Simulate.pause;

describe("End-to-End test", () => {
  it("Visiting the home page", () => {
    cy.visit("/");
    //check that it is redirected to /search path
    cy.url().should("include", "/search");
    cy.contains("horror").click();
    //check that after filter by horror url contains query parameters with filter
    cy.url().should("include", "?filter=horror");
    cy.get("#movieList > div:first-child ").click();
    const title = cy.get("#movieList > div:first-child").get(".title");
    cy.url().should("include", "&movie=");
    // const title: any = movie.get("h2");
    expect(cy.get("#selectedMovie > h2")).to.equal(
      cy.get("#movieList > div:first-child.title")
    );
  });
});
