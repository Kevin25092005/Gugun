const { Given, When, Then } = require('@badeball/cypress-cucumber-preprocessor');

Given('User access the online bangking in the website', () => {
   cy.visit('http://zero.webappsecurity.com/login.html');
})

When('I User fills in all bill payment forms', () => {
   cy.get('#input-xlarge').type('From Account')
   cy.get('#input-xlarge').type('To Account')
   cy.get('#input-small').type('Amount')
   cy.get('#input-xlarge').type('Description')
   cy.contains('Sign in').click()
})

Then('Payment successfully submitted', () => {
    cy.get('#pay_bills').should('be.visible')
 })

