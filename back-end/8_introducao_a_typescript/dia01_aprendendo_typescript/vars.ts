const firstName: string = 'Bruno';
const age: number = 25;
const brazilian: boolean = false;

function greet(name: string) {
  console.log(`Olá, ${name.toUpperCase()}!`);
}
greet(firstName);

function getFavoriteNumber(): number {
  return 14;
}

function greeting(name: string): void {
  console.log(`Olá, ${name.toUpperCase()}!`);
}

function printPersonalInfo(data: { name: string; birthYear: number}) {
  console.log(`${data.name} was born in ${data.birthYear}`);
}
printPersonalInfo({name: firstName, birthYear:1998});

const evenNumbers: number[]= [2,4,6];
const vowel: string[]= ["a","e","i","o","u"];
const booleanValues: boolean[]= [true, false];
evenNumbers.push(8)

console.log(evenNumbers);

function printId(id: number | string) {
  if (typeof id === "string") return   console.log(`Your ID is: ${id.toUpperCase()}`);
  return console.log(`Your ID is: ${id}`);
}

printId(14);
printId('14');


type PersonalInfo = {
  name: string,
  birthYear: number | string,
};

function printa(data: PersonalInfo) {
  console.log(`${data.name} was born in ${data.birthYear}`);
}

printa({ name: 'Bruno', birthYear: 1998 })

type ID = number | string

const person = {
  firstName: 'Frodo',
  lastName: 'Baggins',
  age: 52,
};

function getFullName(firstName: string, lastName: string): string {
  return firstName + ' ' + lastName;
}
console.log(getFullName(person.firstName, person.lastName)); // "Frodo Baggings"

type a = 'liquido' |'solido'|'gasoso';
type b = string | number;
type c = 'Linux' | 'MacOS' | 'Windows'

type twoA = {
  name: string | string[],
};

type twoB = {
  rua: string,
  numero: number,
  complemento: string,
  bairro: string,
  cidade: string,
  estado: string,
}