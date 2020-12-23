describe('homepage',()=>{
 it('open home', ()=>{
     cy.visit('/')
 })
 it('contains users', ()=>{
    cy.contains('Users')
})
})