

describe('Cadastro', ()=>{
    it('Usuário deve se tornar um entregador', ()=>{
        cy.viewport(1920, 1080)
        cy.visit('https://buger-eats.vercel.app/')

        //Realizando a ação de click no botão de Cadastrar para fazer entregas
        cy.get('a[href="/deliver"]').click()

        //Verifica titulo da página e com texto com uma quebra de linha consegue indentificar dando espaço duplo
        cy.get('#page-deliver form h1').should('have.text', 'Cadastre-se para  fazer entregas')

        //gerando objeto entregador e seus dados
        var entregador = {
            nome: 'Tarso Santos',
            cpf: '123456789101',
            email: 'tarsotaqua@gmail.com',
            whatsapp: '+351915532936',
            endereco: {
               cep: '04534011',
                rua: 'Rua Joaquim Floriano',
                numero: '57A',
                complemento: 'Segundo andar',
                bairro: 'Itaim Bibi',
                cidade_uf: 'São Paulo/SP'
            },
            metodo_entrega: 'Moto',
            cnh: 'cnh.jpg'

        }

        // Inserindo valores de objeto entregador no formulário de cadastro
        cy.get('input[name="name"]').type(entregador.nome)
        cy.get('input[name="cpf"]').type(entregador.cpf)
        cy.get('input[name="email"]').type(entregador.email)
        cy.get('input[name="whatsapp"]').type(entregador.whatsapp)

        // Inserindo o CEP
        cy.get('input[name="postalcode"]').type(entregador.endereco.cep)

        // Clicando no botão para verificar e validar CEP
        cy.get('input[type=button][value="Buscar CEP"]').click()

        // inserindo valores complementares de endereço
        cy.get('input[name="address-number"]').type(entregador.endereco.numero)
        cy.get('input[name="address-details"]').type(entregador.endereco.complemento)

        // Comparação de valores a ser utilizado no objeto com o que é exibido na aplicação
        cy.get('input[name="city-uf"]').should('have.value', entregador.endereco.cidade_uf)
        cy.get('input[name="address"]').should('have.value', entregador.endereco.rua)
        cy.get('input[name="district"]').should('have.value', entregador.endereco.bairro)

        //Selecionando item de uma lista
        cy.contains('.delivery-method li', entregador.metodo_entrega).click()

        //Carregamento de imagem fixa para conclusão de cadastro
        cy.get('input[accept^="image"]').attachFile('/images/' + entregador.cnh)
        

    })
})