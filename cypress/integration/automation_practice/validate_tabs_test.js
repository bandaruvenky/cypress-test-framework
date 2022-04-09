describe('validate tabs', () => {
    it('validate tabs', () => {

        cy.visit('http://automationpractice.com/')
        cy.get('#block_top_menu>ul>li>a')
            .should('have.length', 3)
            .and('contains.text','Women')

    })

})