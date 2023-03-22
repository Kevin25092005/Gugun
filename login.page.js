const URL = 'http://zero.webappsecurity.com/login.html';
const FROM ACCOUNT = '#input-xlarge';
const TO ACCOUNT = '#input-xlarge';
const AMOUNT = '#input-small';
const DESCRIPTION = '#input-xlarge';
const SIGN IN = 'Sign in';

class loginPage {
    static visit () {
        cy.visit(URL);
    }
    
    static fill bills payment forms (from Account) {
        cy.get(FROM ACCOUNT).type(from Account);
    }

    static fill bills payment forms (to Account) {
        cy.get(TO ACCOUNT).type(to Account);
    }

    static fill bills payment forms (Amount) {
        cy.get(AMOUNT).type(Amount);
    }

    static fill bills payment forms (Description) {
        cy.get(DESCRIPTION).type(Description);
    }

    static sign in) {
        cy.contains(SIGN_In).click();
    }
}

export default loginPage










}

