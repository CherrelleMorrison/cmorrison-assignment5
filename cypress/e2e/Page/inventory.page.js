class InventoryPage {

    get productCartBtn() {
        return ('#add-to-cart-sauce-labs-backpack')
    }

    get cartBadge() {
        return ('.shopping_cart_badge')
    }

    get removeProductBtn() {
        return ('#remove-sauce-labs-backpack')
    }

    get sortDropDown() {
        return ('.product_sort_container')
    }

    get prodName() {
        return ('.inventory_item_name')
    }

    get prodPrice() {
        return ('.inventory_item_price')
    }

    sortList(sort) {
        cy.get(this.sortDropDown).select(sort)
    }

    applySelectorFormat(prodName) {
        return prodName.toLowerCase().replaceAll(' ', '-')
    }

    addToCart(prodName) {
        let productCartBtn = `#add-to-cart-${this.applySelectorFormat(prodName)}`

        cy.get(productCartBtn).should('be.visible')
        cy.get(productCartBtn).click()
    }

    removeFromCartInventoryPage(prodName) {
        let removeProductBtn = `#remove-${this.applySelectorFormat(prodName)}`

        cy.get(removeProductBtn).should('be.visible')
        cy.get(removeProductBtn).click()
    }


}
export default new InventoryPage()


