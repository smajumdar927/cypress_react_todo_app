///<reference types= "Cypress"/>

describe('API Test suite', () => {
  it('Simple GET request', () => {
    cy.request('GET', 'http://localhost:8080/todos').then(response =>{
      
    const exp = expect(response.status).to.be
      exp.eq(200)
      exp.lessThan(10000)
      exp.below(10000)

      cy.wrap(response.body[0].isComplete).should('be.false')
    })
  })

  it('GET request with query ', () => {
      cy.request({
        method: 'GET',
        url: 'http://localhost:8080/todos',
        qs: {"id": 6417} // this 'qs' is used as query parameter
      }).then(response =>{
        expect(response.status).to.be.eq(200)
        expect(response.body[0].name).to.be.eq('eat')
      })
  });

  it.only('Simple POST request', () => {
      cy.request({
        method: 'POST',
        url: 'http://localhost:8080/todos',
        body: {
          'name': 'Feed baby',
          'isComplete': true
        }
      }).then(response =>{
        expect(response.body.name).to.be.eq('Feed baby')
      })
  });
})