describe("Pinia State Tests", () => {
    it("Visits the app root url", () => {
        cy.visit("/");
        cy.contains("h1", "Test out my simple calculator!");
    });

    it("History remains when navigating to other pages", () => {
        cy.visit("/");
        cy.get(".button").contains("1").click();
        cy.get(".button").contains("+").click();
        cy.get(".button").contains("1").click();
        cy.get(".button").contains("Ans").click();
        cy.get("#display").contains("2");
        const historyDiv = cy.get("h2").contains("History").parents("div");
        historyDiv.get("p").contains("1+1 = 2");

        cy.wait(100);
        // Navigate away and back
        cy.get("a").contains("Feedback").click();
        cy.wait(100);
        cy.go("back");
        cy.wait(100);

        // Check that history persists
        const historyDiv2 = cy.get("h2").contains("History").parents("div");
        historyDiv2.get("p").contains("1+1 = 2");
    });
});