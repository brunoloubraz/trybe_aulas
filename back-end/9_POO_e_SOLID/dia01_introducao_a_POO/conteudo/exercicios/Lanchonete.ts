class Cliente {
  private _nome: string;
  
  constructor(_nome: string) {
    this._nome = _nome
  }

  get nome(): string {
    return this._nome
  }

  set nome(value: string) {
    this._nome = value;
  }
}

class Pedido {

  private _nome: string[];
  private _valor: number;

  constructor(_nome: string[], _valor: number) {
    this._nome = _nome
    this._valor = _valor  
    } 

  get nome(): string[] {
    return this._nome
  }

  set nome(value: string[]) {
    this._nome = value;
  }

  get valor(): number {
    return this._valor;
  }

  set valor(value: number) {
    this._valor = value;
  }
}

class Order {
  private _cliente: Cliente;
  private _pedido: Pedido;
  private _paymentMethod: string;
  private _discount: number;

  constructor(cliente: Cliente, pedido: Pedido, paymentMethod: string, discount: number) {
    this._cliente = cliente;
    this._pedido = pedido;
    this._paymentMethod = paymentMethod;
    this._discount = discount;
  }

  // Getter e Setter para _cliente
  get cliente(): Cliente {
    return this._cliente;
  }

  set cliente(cliente: Cliente) {
    this._cliente = cliente;
  }

  // Getter e Setter para _pedido
  get pedido(): Pedido {
    return this._pedido;
  }

  set pedido(pedido: Pedido) {
    this._pedido = pedido;
  }

  // Getter e Setter para _paymentMethod
  get paymentMethod(): string {
    return this._paymentMethod;
  }

  set paymentMethod(paymentMethod: string) {
    this._paymentMethod = paymentMethod;
  }

  // Getter e Setter para discount
  get discount(): number {
    return this._discount;
  }

  set discount(discount: number) {
    this._discount = discount;
  }
}

// Criando instâncias de Cliente e Pedido
const cliente = new Cliente("John Doe");
const pedido = new Pedido(["Item1", "Item2"], 100.0);

// Criando instância da classe Order
const order = new Order(cliente, pedido, "Cartão de Crédito", 10);

// Exibindo informações antes da modificação
console.log("Cliente antes da modificação:", order.cliente.nome);
console.log("Pedido antes da modificação:", order.pedido.nome);
console.log("Método de pagamento antes da modificação:", order.paymentMethod);
console.log("Desconto antes da modificação:", order.discount);

// Modificando alguns valores usando os setters
order.cliente = new Cliente("Jane Doe");
order.pedido = new Pedido(["Item3", "Item4"], 150.0);
order.paymentMethod = "Boleto Bancário";
order.discount = 20;

// Exibindo informações após a modificação
console.log("\nCliente após a modificação:", order.cliente.nome);
console.log("Pedido após a modificação:", order.pedido.nome);
console.log("Método de pagamento após a modificação:", order.paymentMethod);
console.log("Desconto após a modificação:", order.discount);

