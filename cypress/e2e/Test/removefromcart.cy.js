/// <reference types="cypress" />
import InventoryPage from '../Page/inventory.page.js'
import Cart from '../Page/cart.page.js'
import Login from '../Page/login.page.js'

describe('Remove from cart', () => {

    beforeEach('logs in with valid credentials', () => {
        cy.visit('/')
        Login.login('standard_user', 'secret_sauce')
    })

    it('removes cart item from inventory page', () => {
        InventoryPage.addToCart('Sauce Labs Backpack')
        cy.get(InventoryPage.cartBadge).should('have.text', 1)
        InventoryPage.removeFromCartInventoryPage('Sauce Labs Backpack')
        cy.get(InventoryPage.cartBadge).should('not.exist')
    })

    it('removes item from the cart', () => {
        InventoryPage.addToCart('Sauce Labs Fleece Jacket')
        Cart.viewCart()
        cy.get(Cart.itemQuantity).should('have.text', 1)
        Cart.removeFromCart('Sauce Labs Fleece Jacket')
        cy.get(Cart.itemQuantity).should('not.exist')
        cy.get(Cart.removedStatus).should('exist')
        cy.get(InventoryPage.cartBadge).should('not.exist')
    })

})