describe("Calculator Tests", () => {
  it ("Visits the app root url", () => {
    cy.visit("/");
    cy.contains("h1", "Test out my simple calculator!");
  });

  it("Add two numbers", () => {
    cy.visit("/");
    cy.get(".button").contains("1").click();
    cy.get(".button").contains("+").click();
    cy.get(".button").contains("1").click();
    cy.get(".button").contains("Ans").click();

    cy.get("#display").contains("2");
  });

  it("Multiply two numbers", () => {
    cy.visit("/");
    cy.get(".button").contains("3").click();
    cy.get(".button").contains("*").click();
    cy.get(".button").contains("4").click();
    cy.get(".button").contains("Ans").click();

    cy.get("#display").contains("12");
  });
  
  it("Subtract two numbers", () => {
    cy.visit("/");
    cy.get(".button").contains("9").click();
    cy.get(".button").contains("-").click();
    cy.get(".button").contains("8").click();
    cy.get(".button").contains("Ans").click();

    cy.get("#display").contains("1");
  });
  
  it("Divide two numbers", () => {
    cy.visit("/");
    cy.get(".button").contains("6").click();
    cy.get(".button").contains("/").click();
    cy.get(".button").contains("3").click();
    cy.get(".button").contains("Ans").click();

    cy.get("#display").contains("2");
  });
  
  it("Power of", () => {
    cy.visit("/");
    cy.get(".button").contains("3").click();
    cy.get(".button").contains("^").click();
    cy.get(".button").contains("3").click();
    cy.get(".button").contains("Ans").click();

    cy.get("#display").contains("27");
  });

  it ("Clear the display", () => {
    cy.visit("/");
    cy.get(".button").contains("1").click();
    cy.get("#display").contains("1");
    cy.get(".button").contains("cls").click();
    cy.get("#display").should("have.text", "");
  });

  // Negative tests
  it("Divide by zero", () => {
    cy.visit("/");
    cy.get(".button").contains("6").click();
    cy.get(".button").contains("/").click();
    cy.get(".button").contains("0").click();
    cy.get(".button").contains("Ans").click();

    cy.get("#display").contains("Error");
  });

  it("Zero divide by zero", () => {
    cy.visit("/");
    cy.get(".button").contains("0").click();
    cy.get(".button").contains("/").click();
    cy.get(".button").contains("0").click();
    cy.get(".button").contains("Ans").click();
    cy.get("#display").contains("Error");
  });

  it("Invalid input shows error", () => {
    cy.visit("/");
    cy.get(".button").contains("-").click();
    cy.get(".button").contains("-").click();
    cy.get(".button").contains("Ans").click();
    cy.get("#display").contains("Error");
  });

  it("Huge numbers show errors", () => {
    cy.visit("/");
    // 9999999999^9999999999
    for (let i = 0; i < 10; i++) {
      cy.get(".button").contains("9").click();
    }
    cy.get(".button").contains("^").click();
    for (let i = 0; i < 10; i++) {
      cy.get(".button").contains("9").click();
    }
  });
});