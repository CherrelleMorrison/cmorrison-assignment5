/// <reference types="cypress" />

import InventoryData from '../Data/inventory.data.js'
import InventoryPage from '../Page/inventory.page.js'
import Login from '../Page/login.page.js'

describe('Sorting Inventory Page', () => {
    beforeEach(() => {
        cy.visit('/')
        Login.login('standard_user', 'secret_sauce')
    })

    it('should sort inventory page from A-Z', () => {
        InventoryPage.sortList(InventoryData.sort['A to Z'])
        InventoryData.products.sort()
        cy.get(InventoryPage.prodName).each(($elem, index) => {
            expect($elem.text()).equal(InventoryData.products[index].name)
        })
    })

    it('should sort inventory page from Z-A', () => {
        InventoryPage.sortList(InventoryData.sort['Z to A'])
        InventoryData.products.sort().reverse()

        cy.get(InventoryPage.prodName).each(($elem, index) => {
            expect($elem.text()).equal(InventoryData.products[index].name)
        })
    })

    it('should sort inventory page from low to high', () => {
        InventoryPage.sortList(InventoryData.sort['Low to High'])

        // Sort list from low to high prices
        InventoryData.products.sort((a, b) => a.price - b.price)

        cy.get(InventoryPage.prodPrice).each(($elem, index) => {
            expect($elem.text()).equal(`$${InventoryData.products[index].price}`)
        })
    })

    it('should sort inventory page from high to low', () => {
        InventoryPage.sortList(InventoryData.sort['High to Low'])

        // Sort list from high to low prices
        InventoryData.products.sort((a, b) => b.price - a.price)
        cy.get(InventoryPage.prodPrice).each(($elem, index) => {
            expect($elem.text()).equal(`$${InventoryData.products[index].price}`)
        })
    })
})