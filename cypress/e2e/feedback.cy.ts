describe("Sending feedback", () => {
    it("Visits the app root url", () => {
        cy.visit("/");
        cy.contains("h1", "Test out my simple calculator!");
    });
    
    it("Send feedback", () => {
        cy.visit("/");
        cy.get("a").contains("Feedback").click();

        // Check that the feedback form is displayed
        cy.contains("label", "Name");
        cy.contains("label", "Email");
        cy.contains("label", "Feedback");

        // Check that the submit button is disabled
        cy.get("button").contains("Submit").should("be.disabled");

        // Fill in the form
        // cy.get("#name").type("John Doe");  // Name is not required
        cy.get("#email").type("yes@example.com");
        cy.get("#feedback").type("This is a test feedback");

        // Check that the submit button is enabled
        cy.get("button").contains("Submit").should("not.be.disabled");
    });
});