import LoginData from '../Data/login.data.js'
import Login from '../Page/login.page.js'


describe('Data-driven Login', () => {
    beforeEach('got to main page', () => {
        cy.visit('/')
    })

    for (var index in LoginData) {

        it('loads ' + LoginData[index].username + ' credentials from data file', () => {

            Login.login(LoginData[index].username, LoginData[index].password)
            if (LoginData[index].username !== 'locked_out_user') {
                cy.url().should('include', 'inventory')
                cy.get(Login.prodName).should('be.visible')
                cy.get(Login.logoutMenu).should('exist')
            } else {
                cy.get(Login.errorMsg).should('include.text', 'Sorry, this user has been locked out')
            }
            index--;
        })
    }
})
