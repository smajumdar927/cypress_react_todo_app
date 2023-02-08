/// <reference types = "Cypress"/>

describe('Todo Suite', ()=>{
    beforeEach(()=>{
        cy.visit('http://localhost:3000/')
    })
    
    it('should add a new todo correctly', () => {
        cy.addNewtodo('Make tea')
        cy.get('.todo-item').last().should('contain.text', 'Make tea')
    });

    it('Should be able to toggle to the todo and update correctly', () => {
        cy.addNewtodo('Second Todo')
        cy.get('.todo-checkbox').check().should('be.checked')
        cy.get('.todo-checkbox').uncheck().should('not.be.checked')
    });

    it('Should be able to delete a todo correctly', () => {
        cy.addNewtodo('Third Todo')
        cy.get('.delete-item').click()
    });

    it('Should not be able to enter empty todo', () => {
        cy.addNewtodo('')
        
    });

    afterEach(()=>{
        cy.get('body').then(el=>{
            if(el.find('.delete-item').length > 0){
             cy.get('.delete-item').click( {multiple: true} )
            }
        })
    })

})