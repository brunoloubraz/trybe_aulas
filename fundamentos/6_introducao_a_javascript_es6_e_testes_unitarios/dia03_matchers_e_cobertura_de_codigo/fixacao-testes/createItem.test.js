const createItem = require('./createItem');

describe('a função createItem', () => {
  it('cria um item válido', () => {
      const actualItem = createItem('banana', 'kg', 1.99, 20);
      const expectedItem = { name: 'banana', unit: 'kg', price: 1.99, quantity: 20 };
    expect(actualItem).toEqual(expectedItem)
  });
  it('utiliza zero como quantidade padrão', () => {
    const test = createItem('leite', 'kg', 190)
    const expectTest = {name: 'leite', unit: 'kg', price: 190, quantity: 0}
    expect(test).toEqual(expectTest);
  });
  it('Lança um erro quando não recebe parâmetros', () => {
    expect(() => createItem()).toThrow();
  });

  it('Lança um erro se o nome do item não é uma string', () => {
    expect(() => createItem(1, 'kg', 1, 19)).toThrow('O nome do item deve ser uma string')
  });
  it('Lança um erro se o preço é negativo', () => {
    expect(() => createItem('paçoca','kg',-10,32)).toThrow(Error)
  });
  it('Lança um erro se o preço é zero', () => {
    expect(() => createItem('paçoca','kg',0,32)).toThrow(Error)
  });
  
});