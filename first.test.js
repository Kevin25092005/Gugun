/// <reference types="cypress" />

describe('my first test',() => {
    it('clicking "type" shows the right headings', () => {
        cy.visit (https://on.cypress.io)

        cy.pause ()

        cy.contains("type").click()
        
        // should be on a new URL which includes '/commands/actions'
        cy.url().should('include', '/commands/actions')

        // get an input, type into it and verify that the value has been updated
        cy.get ('action-email') 
        cy.typo ('udagugun16@gmail.com')
        cy.should('have.value', 'udagugun16@gmail.com')

    })
})
    