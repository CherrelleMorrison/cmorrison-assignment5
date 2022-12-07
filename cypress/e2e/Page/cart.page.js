class Cart {

    //getters
    get viewCartBtn() {
        return ('#shopping_cart_container > a')
    }

    get itemQuantity() {
        return ('div.cart_quantity')
    }
    get removeProductBtn() {
        return ('#remove-sauce-labs-backpack')
    }

    get removedStatus() {
        return ('.removed_cart_item')
    }

    get continueShoppingBtn() {
        return ('#continue-shopping')
    }
    get checkoutBtn() {
        return ('#checkout')
    }
    //methods

    viewCart() {
        cy.get(this.viewCartBtn).click()
    }
    applySelectorFormat(prodName) {
        return prodName.toLowerCase().replaceAll(' ', '-')
    }

    removeFromCart(prodName) {
        let removeProductBtn = `#remove-${this.applySelectorFormat(prodName)}`

        cy.get(removeProductBtn).should('be.visible')
        cy.get(removeProductBtn).click()
    }
}

export default new Cart() 