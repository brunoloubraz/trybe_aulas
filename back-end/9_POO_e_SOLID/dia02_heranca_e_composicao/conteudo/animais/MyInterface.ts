interface MyInterface {
  myNumber: number;
  myfunc(myParam: number): string
}

class Myclass implements MyInterface {
  constructor (public myNumber: number) {}

  myfunc(myParam: number) {
    return `${this.myNumber +  myParam}`;
  }
}

console.log(new Myclass(2).myNumber)
console.log(new Myclass(4).myfunc(4))