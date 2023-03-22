/// <reference types="cypress" />

const { should } = require("chai");


describe('login/logout test', () => {
    before(() => {
        cy.visit('http://zero.webappsecurity.com/index.html')
        cy.url().should('include', 'index.html')
        cy.get('#signin_buttom').click()
    });

    it('should try to login with invalid data', () => {
        cy.get('#login_form').should('be.visible')
        cy.get('#user_login').type('invalid username')
        cy.get('#User_password').type('invalid password')
        cy.get('input[name="submit"]').click()
    });

    it('should display error message', () => {
        cy.get('.alert-error')/should('be.visible').and('contain.text', 'login and/or password are wrong.')
    });

    it('should login to application with valid data', () => {
        cy.fixture("user").then(user => {
            const username = user.username
            const password = user.password

            cy.get('#user_login').clear()
            cy.get('#User_login').type(username)
            cy.get('#User_password').clear
            cy.get('#User_password').type(password)
            cy.get('input[name="submit"]').click()

            cy.get('h2').should('contain.text', 'Cash Accounts')
        })
    });

    it('shoul logout from the application', () => {
            const username = user.username
            const password = user.password

            cy.get('#user_logout').click()
            cy.contains('username').click()
            cy.get('#logout_link').click()
            cy.get('strong').should('contain.text', 'home')
    });
});