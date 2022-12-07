/// <reference types="cypress" />
import InventoryPage from '../Page/inventory.page.js'
import Cart from '../Page/cart.page.js'
import Login from '../Page/login.page.js'

describe('Add to Cart', () => {

    beforeEach('logs in with valid credentials', () => {
        cy.visit('/')
        Login.login('standard_user', 'secret_sauce')


    })

    it('adds a single product to the cart', () => {
        InventoryPage.addToCart('Sauce Labs Backpack')
        cy.get(InventoryPage.removeProductBtn).should('be.visible')
        Cart.viewCart()
        cy.get(InventoryPage.cartBadge).should('have.text', 1)
        cy.get(Login.prodName).should('have.text', 'Sauce Labs Backpack')
        cy.get(Cart.itemQuantity).should('have.text', 1)
        cy.get(Cart.removeProductBtn).should('exist')
    })

    it('adds multiple products to the cart', () => {
        InventoryPage.addToCart('Sauce Labs Fleece Jacket')
        InventoryPage.addToCart('Sauce Labs Onesie')
        InventoryPage.addToCart('Sauce Labs Backpack')
        cy.get(InventoryPage.removeProductBtn).should('be.visible')
        Cart.viewCart()
        cy.get(InventoryPage.cartBadge).should('have.text', 3)
        cy.get(Cart.removeProductBtn).should('exist')
    })

})


