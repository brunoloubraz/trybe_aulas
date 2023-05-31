const {encode, decode} = require('./endoceDecode.js');

describe('Para as funções encode e decode, crie os seguintes testes em Jest:', () => {

  it ('Teste se encode e decode são funções', () => {
    expect(typeof encode).toBe('function')
  })
  it ('Teste se encode e decode são funções', () => {
    expect(typeof decode).toBe('function')
  })

  it ('Para a função encode, teste se as vogais a, e, i, o, u são convertidas em 1, 2, 3, 4, 5, respectivamente.', () => {
    expect(encode('a','e','i','o', 'u')).toBe('1','2','3','4','5')
  })

  it ('Para a função decode, teste se os números 1, 2, 3, 4, 5 são convertidos nas vogais a, e, i, o, u, respectivamente.', () => {
    expect(decode('1','2','3','4','5')).toBe('a','e','i','o','u')
  })

  it ('Para a função encode, teste se as vogais a, e, i, o, u são convertidas em 1, 2, 3, 4, 5, respectivamente.', () => {
    expect(encode('b','c','d','f','g','h')).toBe('b','c','d','f','g','h')
  })

  it ('Para a função decode, teste se os números 1, 2, 3, 4, 5 são convertidos nas vogais a, e, i, o, u, respectivamente.', () => {
    expect(decode('6','7','8','9','10')).toBe('6','7','8','9','10')
  })

  it ('Teste se a string que é retornada pelas funções tem o mesmo número de caracteres que a string passada como parâmetro.' , () => {
    expect(encode('banana').length).toBe(6)
  })
  it ('Teste se a string que é retornada pelas funções tem o mesmo número de caracteres que a string passada como parâmetro.' , () => {
    expect(decode('1v2str5z').length).toBe(8)
  })

  
})