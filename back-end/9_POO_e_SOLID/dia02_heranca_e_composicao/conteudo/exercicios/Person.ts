class Person {
  private _name: string;
  private _birthDate: Date;

  constructor (_name: string, _birthDate: Date) {
    this._name = _name;
    this._birthDate = _birthDate;
  }

  get name(): string {
    return this._name;
  }
  set name(value: string) {
    if (value.length < 3) throw new Error('Nome precisa ser maior que 3 caracteres') 
    this._name = value;
  }
  get birthDate(): Date {
    return this._birthDate;
  }
  set birthDate(value: Date) {
    // if 
    this._birthDate = value;
  }

  getAge(date: Date): number {
    const diff = Math.abs(new Date().getTime() - date.getTime());
    const yearMs = 31_536_000_000;
    return Math.floor(diff / yearMs);
  }
  
  private validateBirthDate(date: Date): void {
    if (date.getTime() > new Date().getTime()) {
      throw new Error('A data de nascimento não pode ser uma data no futuro.');
    }
    if (this.getAge(date) > 120) {
      throw new Error(`A pessoa deve ter no máximo 120 anos.`);
    }
  }
  
}

class Student extends Person {
  private enrollment: string;
  private examsGrades: number[] = [];
  private assignmentsGrades: number[] = [];

  constructor(name: string, birthDate: Date) {
    super(name,birthDate);
    this.enrollment = this.generateEnrollment();
  }

  // Getter para enrollment
  getEnrollment(): string {
    return this.enrollment;
  }

  // Setter para enrollment
  setEnrollment(enrollment: string): void {
    if (enrollment.toString.length < 16) throw new Error('A matricula deve possuir no minimo 16 caracteres')
    this.enrollment = enrollment;
  }

  // Getter para examsGrades
  getExamsGrades(): number[] {
    return this.examsGrades;
  }

  // Setter para examsGrades
  setExamsGrades(examsGrades: number[]): void {
    if( examsGrades.length > 4) throw new Error('Deve ter no maximo 4 notas')
    this.examsGrades = examsGrades;
  }

  // Getter para assignmentsGrades
  getAssignmentsGrades(): number[] {
    return this.assignmentsGrades;
  }

  // Setter para assignmentsGrades
  setAssignmentsGrades(assignmentsGrades: number[]): void {
    if( assignmentsGrades.length > 2) throw new Error('Deve ter no maximo 2 notas')
    this.assignmentsGrades = assignmentsGrades;
  }

  sumGrades() {
    return [...this.examsGrades, ...this.assignmentsGrades].reduce((nota, notatrab) => notatrab + nota)
  }

  sumAverageGrade() {
    const total = this.sumGrades()
    return total / (this.examsGrades.length + this.assignmentsGrades.length)
  }

  generateEnrollment(): string {
    const randomStr = String(Date.now() * (Math.random() + 1)).replace(/\W/g, '');
    return `STU${randomStr}`;
  }
}

const carolina = new Student('Carolina da Silva', new Date('2005/03/17'));
const lucas = new Student('Lucas Peixoto Salgueiro', new Date('2006/07/19'));
const jessica = new Student('Jéssica Bianca Nunes', new Date('2004/06/06'));
const tamires = new Student('Tamires Santos Bastos', new Date('2005/11/05'));
const fernando = new Student('Fernando Gonçalves', new Date('2006/09/11'));

// carolina.examsGrades = [25, 20, 25, 23];
// lucas.examsGrades = [25, 20, 25, 23];
// jessica.assignmentsGrades = [50, 45];
// tamires.assignmentsGrades = [47, 42];
fernando.setAssignmentsGrades([9,10])

console.log(carolina);
console.log(lucas);
console.log(jessica);
console.log(tamires);
console.log(fernando);


interface Employee{
  registration: number;
  salary: number;
  admissionDate: Date
  generateRegistration():string
} 

class Subject {
  private _name: string
  constructor(_name: string) {
    this._name = _name
  }

  get name() {
    return this._name;
  }
  set name(value: string) {
    if (value.length < 3) throw new Error('Precisa de no mínimo 3 caracteres')
    this.name = value;
  }
}

const matematica = new Subject('matematica')
console.log(matematica);

class Teacher extends Person implements Employee{
  private _subject: Subject;
  private _registration: number;
  private _admissionDate: Date


  constructor(name: string, birthDate: Date, private salary: number, subject: Subject) {
    super(name, birthDate)
    this._subject = subject;
    this.salary = salary;
    this._admissionDate = new Date();
    this.registration = this.generateRegistration();
  }

  get subject(): Subject {
    return this._subject;
  }

  set subject(value: Subject) {
    this._subject = value;
  }

  get registration(): string {
    return this._registration;
  }

  set registration(value: string) {
    if (value.length < 16) throw new Error('O registro deve possuir no mínimo 16 caracteres.');

    this._registration = value;
  }

  get salary(): number {
    return this._salary;
  }

  set salary(value: number) {
    if (value < 0) throw new Error('O salário não pode ser negativo.');

    this._salary = value;
  }

  get admissionDate(): Date {
    return this._admissionDate;
  }

  set admissionDate(value: Date) {
    if (value.getTime() > new Date().getTime()) throw new Error('A data de admissão não pode ser uma data no futuro.');

    this._admissionDate = value;
  }

  generateRegistration(): string {
    const randomStr = String(Date.now() * (Math.random() + 1)).replace(/\W/g, '');

    return `PRF${randomStr}`;
  }
}