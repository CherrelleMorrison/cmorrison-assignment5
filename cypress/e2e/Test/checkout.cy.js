/// <reference types="cypress" />
import InventoryPage from '../Page/inventory.page.js'
import Cart from '../Page/cart.page.js'
import Login from '../Page/login.page.js'
import CheckoutPage from '../Page/checkout.page.js'

describe('Checkout Flow', () => {
    beforeEach('login', () => {
        cy.visit('/')
        Login.login('standard_user', 'secret_sauce')
    })

    it('checkout with a single product', () => {
        InventoryPage.addToCart('Sauce Labs Backpack')
        Cart.viewCart()
        cy.get(InventoryPage.cartBadge).should('have.text', 1)
        cy.get(Cart.checkoutBtn).should('be.visible')
        cy.get(Cart.checkoutBtn).click()
        CheckoutPage.submitInfo()
        cy.get(CheckoutPage.inputFirstName).should('not.have.value', '')
        cy.get(CheckoutPage.inputLastName).should('not.have.value', '')
        cy.get(CheckoutPage.inputZip).should('not.have.value', '')
        cy.get(CheckoutPage.continueBtn).click()
        var price = 0.0
        var total = 0.0
        var ordertotal = 0.0
        var orderTax = 0.0
        cy.get(CheckoutPage.prodPrice).each(($elem) => {
            price = parseFloat($elem.text().replace('$', ''))
            cy.log('price:' + price)
            total = total + price
            orderTax = (8.00242498 / 100.0 * total).toFixed(2)
            ordertotal = (total * 1.0800242498).toFixed(2)
            cy.get(CheckoutPage.orderSubtotal).should('contain', total)
            cy.get(CheckoutPage.orderTax).should('contain', orderTax)
            cy.get(CheckoutPage.orderTotal).should('contain', ordertotal)
            CheckoutPage.checkoutComplete()
        })
        cy.get(CheckoutPage.orderCompleteMsg).should('include.text', 'THANK YOU FOR YOUR ORDER')
    })

    it('checkout with multiple products', () => {
        InventoryPage.addToCart('Sauce Labs Fleece Jacket')
        InventoryPage.addToCart('Sauce Labs Onesie')
        InventoryPage.addToCart('Sauce Labs Backpack')
        Cart.viewCart()
        cy.get(InventoryPage.cartBadge).should('have.text', 3)
        cy.get(Cart.checkoutBtn).should('be.visible')
        cy.get(Cart.checkoutBtn).click()
        CheckoutPage.submitInfo()
        cy.get(CheckoutPage.inputFirstName).should('not.have.value', '')
        cy.get(CheckoutPage.inputLastName).should('not.have.value', '')
        cy.get(CheckoutPage.inputZip).should('not.have.value', '')
        cy.get(CheckoutPage.continueBtn).click()
        var price = 0.0
        var total = 0.0
        var ordertotal = 0.0
        var orderTax = 0.0
        cy.get(CheckoutPage.prodPrice).each(($elem) => {
            price = parseFloat($elem.text().replace('$', ''))
            cy.log('price:' + price)
            total = total + price
            orderTax = (8.00242498 / 100.0 * total).toFixed(2)
            ordertotal = (total * 1.0800242498).toFixed(2)
        }).then(() => {
            cy.get(CheckoutPage.orderSubtotal).should('contain', total)
            cy.get(CheckoutPage.orderTax).should('contain', orderTax)
            cy.get(CheckoutPage.orderTotal).should('contain', ordertotal)
        })
        CheckoutPage.checkoutComplete()
        cy.get(CheckoutPage.orderCompleteMsg).should('include.text', 'THANK YOU FOR YOUR ORDER')
    })
})