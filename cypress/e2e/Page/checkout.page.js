class CheckoutPage {

    totalSum = 0.0
    get cartItem() {
        return ('.cart_item')
    }

    get inputFirstName() {
        return ('#first-name')
    }

    get inputLastName() {
        return ('#last-name')
    }

    get inputZip() {
        return ('#postal-code')
    }

    get continueBtn() {
        return ('#continue')
    }

    get prodPrice() {
        return ('.inventory_item_price')
    }

    get orderSubtotal() {
        return ('.summary_subtotal_label')
    }

    get orderTax() {
        return ('.summary_tax_label')
    }

    get orderTotal() {
        return ('.summary_total_label')
    }

    get cancelBtn() {
        return ('#cancel')
    }

    get finishBtn() {
        return ('#finish')
    }

    get orderCompleteMsg() {
        return ('#checkout_complete_container')
    }

    //methods

    submitInfo() {
        cy.get(this.inputFirstName).type('Cherrelle')
        cy.get(this.inputLastName).type('Morrison')
        cy.get(this.inputZip).type('90210')
    }

    checkoutComplete() {
        cy.get(this.finishBtn).click()
    }
}
export default new CheckoutPage()