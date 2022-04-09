
describe('validate search product', () => {
    it('login and search', () => {
        cy.visit('http://automationpractice.com/')
        cy.login("bandaru@gmail.com", "Test@123");
        cy.search("Summer")
        cy.get('.ac_results>ul>li:nth-of-type(3)').click()
        cy.get("div.primary_block.row>div:nth-of-type(3)>h1")
            .should('have.text','Printed Chiffon Dress')
    })


})