// describe("My first test", ()=> {
//   it("Does not do much!", ()=> {
//     expect(true).to.equal(true)
//   })
// })
// describe("My second test", ()=> {
//   it("doesn't do too much!", ()=> {
//     expect(true).to.equal(false)
//   })
// })

describe('My First Test', () => {
  it("Visits the ktichen sink", () => {
    cy.visit("https://example.cypress.io")
  })
  it("clicks a link, `type`", () => {
    cy.visit("https://example.cypress.io")

    cy.contains('type').click()

    cy.url().should("include", "/commands/actions")

    cy.get(".action-email").type("fake@email.com").should("have.value","fake@email.com")

    cy.get(".action-disabled").type("disabled error checking", {force : true})
    .should("have.value","disabled error checking")
  })
})


