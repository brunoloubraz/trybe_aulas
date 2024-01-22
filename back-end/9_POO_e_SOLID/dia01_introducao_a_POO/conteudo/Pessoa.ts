class Pessoa {
  name: string;
  height: number;
  weight?: number; // o caractere "?" indica um atributo opcional

  constructor(n: string, h: number, w?: number) {
    console.log(`Creating Pessoa ${n}`);
    this.name = n;
    this.height = h;
    this.weight = w;
  }

  sleep() {
    console.log(`${this.name}: zzzzzzz`);
  }
}

const p3 = new Pessoa('Maria', 171, 58);
// aqui estamos passando somente dois parâmetros, atente-se ao valor do atributo p2.weight
const p4 = new Pessoa('João', 175);
console.log(p3.name, p3.height, p3.weight);
console.log(p4.name, p4.height, p4.weight);
p3.sleep();
p4.sleep();

/*
Saída:
Creating person Maria
Creating person João
Maria 171 58
João 175 undefined
Maria: zzzzzzz
João: zzzzzzz
*/