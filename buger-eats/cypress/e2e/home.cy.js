

describe('home page', ()=> {
  it('app deve estar online', ()=> {
      //Configuração tamanho da tela a ser utilizada nos testes
      cy.viewport(1920, 1080)
      
      // Acessando app
      cy.visit('https://buger-eats.vercel.app/')
      
      // verificando título da pageHome da aplicação
      cy.get('#page-home main h1').should('have.text', 'Seja um parceiro entregador pela Buger Eats')

  })
})
