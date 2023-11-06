const expect = require('chai');
const calculaSituacao = require('../../calculaSituacao');


describe('Quando a média for menor que 7', function() {
  it('retorna reprovação', () => {
    const resposta = calculaSituacao(4)
    expect(resposta).equals('reprovação')
  })
  it('retorna reprovação', () => {
    const resposta = calculaSituacao(4)
    expect(resposta).to.be.equals('reprovação')
  })
})