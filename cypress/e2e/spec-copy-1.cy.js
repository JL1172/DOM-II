const values = ["home","about","contact","blog"];

describe("My first test", ()=> {
  it("visits the DOMII website", ()=> {
    cy.visit("http://localhost:3000/#")
  })
  it("gets element and verifies the styling",()=> {
    cy.visit("http://localhost:3000/#")
    values.map((n,i)=> {
       cy.get(`[data-cy=${n}]`).click()
    .should('have.css',"border-bottom")
    cy.get(`[data-cy=${n}]`).click()
    .should('have.css',"letter-spacing")
    })
  })
  })
