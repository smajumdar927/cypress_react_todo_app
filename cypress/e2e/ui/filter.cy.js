/// <reference types = "Cypress"/>

describe('UI - Filter todos test suite', ()=>{

//We need to setup some presetup data using:
// UI
// Mock

    beforeEach(()=>{
        cy.visit('http://localhost:3000/')

        const newTodos = ['todo1', 'todo2', 'todo3' , 'todo4','todo5'].forEach(todo=>{
            cy.addNewtodo(todo)
        })

        cy.get('.todo-checkbox').first().check().should('be.checked')
        cy.get('.todo-checkbox').last().check().should('be.checked')

    })

    it('bla', ()=>{

    })
    after(()=>{
        cy.get('body').then(el=>{
            if(el.find('.delete-item').length > 0){
             cy.get('.delete-item').click( {multiple: true} )
            }
        })
    })
    
})

describe.only('API - Filter todos test suite', ()=>{

    beforeEach(()=>{
        cy.addTodoByAPI()
        cy.visit('http://localhost:3000')
    })
    it('Filter by the completed todos', () => {
        cy.contains('Complete').click()
        cy.url().should('contain', 'complete')
        cy.get('.todo-checkbox').each(el=>{
            cy.wrap(el).should('be.checked')
        })
    });
    it('Filter by the Active todos', () => {
        cy.contains('Active').click()
        cy.url().should('contain', 'active')
        cy.get('.todo-checkbox').each(el=>{
            cy.wrap(el).should('not.be.checked')
        })
    });

    after(()=>{
        cy.get('body').then(el=>{
            if(el.find('.delete-item').length > 0){
             cy.get('.delete-item').click( {multiple: true} )
            }
        })
    })
})