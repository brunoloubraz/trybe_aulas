class Superclass {
  public isSuper:boolean;
  constructor() {
    this.isSuper = true;
  }
  public sayHello() {
    return 'Olá Mundo!'
  }
}

class Subclass extends Superclass {
  public sayHello2() {
    return this.sayHello();
  }
  constructor() {
    super();
    this.isSuper = false;
  }
}

function myFunc(Superclass: Superclass) {
  // console.log(subClass.sayHello());
  console.log(Superclass.isSuper === true ? 'Super!' : 'Sub!' );

}

// const sup = new Superclass();
const sub = new Subclass();

// myFunc(sup)
myFunc(sub)