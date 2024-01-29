/*
Dicionário en-pt:
- employee: pessoa empregada/funcionária
*/

abstract class Employee {
  constructor(public name: string) { }

  /* Aqui temos um atributo abstrato que implica às classes
  filhas atribuírem, de maneira obrigatória, um valor do tipo 'number' */
  abstract MIN_SALARY: number

  /* Já aqui temos um método abstrato que implica às classes filhas 
  implementá-la, de maneira obrigatória, de acordo com a utilidade da classe filha  */
  abstract work(): void
}

class Instructor extends Employee {
  constructor(public name: string) {
    super(name); 
  }
  MIN_SALARY = 10000;
  work() { console.log(`${this.name} está auxiliando as pessoas estudantes em mentorias.`); }
}

class Specialist extends Employee {
  constructor(public name: string) {
    super(name); 
  }
  MIN_SALARY = 20000;
  work() { console.log(`${this.name} está ministrando uma aula ao vivo.`); }
}

class Facilitator extends Employee {
  constructor(public name: string) {
    super(name); 
  }
  MIN_SALARY = 50000;
  work() { console.log(`${this.name} está conduzindo um 1:1.`); }
}

const instructor = new Instructor('Victor');
const specialist = new Specialist('Gus');
const facilitator = new Facilitator('Silvinha');

instructor.work(); // Victor está auxiliando as pessoas estudantes em mentorias.
specialist.work(); // Gus está ministrando uma Aula Ao Vivo.
facilitator.work(); // Silvinha está conduzindo um 1:1.


abstract class Character {
  abstract talk(): void;
  abstract specialMove(): void;
}

class MeleeCharacter extends Character {
  constructor(private _name: string, private _specialMove: string) {
    super();
  }

  talk(): void {
    console.log('melee character is talking');    
  }
  specialMove(): void {
    console.log('melee character is doing special move');
  }
}

class LongRangeCharacter extends Character {
  constructor(private _name: string, private _specialMove: string) {
    super();
  }
  talk(): void {
    console.log('LongRangeCharacter is talking');    
  }
  specialMove(): void {
    console.log('LongRangeCharacter is doing special move');
  }
}

const Yoshi = new MeleeCharacter('Yoshi', 'Tackle');
const Samus = new LongRangeCharacter('Samus', 'Fly');

// console.log(Yoshi.talk());
Yoshi.talk()