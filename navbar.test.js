/// <reference types="cypress" />


describe('Searchbox Test', function () {
    before(() => {
        cy.visit ('http://zero.webappsecurity.com/index.html')
    });

    it('Should dipslay online content', () => {
        cy.get('#onlineBangkingMenu').click()
        cy.url().should('include', 'online-bangking.html')
        cy.get('h1').should('be.visible')
    });

    it('should display transfer funds content', () => {
        cy.get('#transferfunds').click()
        cy.url().should('include', 'transfer-funds.html')
    });

    it('Should display feedback content ', () => {
        cy.get('#feedback').click()
        cy.url().should('include', 'feedback.html')
    });

    it('should display homepage content', () => {
        cy.contains('zero bank').click()
        cy.url().should('include', 'index.html')
    });
});