
class Login {
    //getters
    get username() {
        return ('#user-name')
    }
    get password() {
        return ('#password')
    }
    get loginBtn() {
        return ('#login-button')
    }

    get errorMsg() {
        return ('h3[data-test="error"]')
    }

    get prodName() {
        return ('.inventory_item_name')
    }

    get sideMenu() {
        return ('#react-burger-menu-btn')
    }

    get logoutMenu() {
        return ('#logout_sidebar_link')
    }

    //method
    login(username, password) {
        cy.get(this.username).type(username)
        cy.get(this.password).type(password)
        cy.get(this.loginBtn).click()
    }

    logout() {
        cy.get(this.sideMenu).click({ force: true })
        cy.get(this.logoutMenu).click({ force: true })
    }

}

export default new Login()