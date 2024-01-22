class Software {
  private _matricula: number;
  private _nome: string;
  private _notasDeProva: number[];
  private _notasDeTrabalho: number[];

  constructor(_matricula: number, _nome: string, _notasDeProva: number[], _notasDeTrabalho: number[]) {
    this._matricula = _matricula;
    this._nome = _nome;
    this._notasDeProva = _notasDeProva;
    this._notasDeTrabalho = _notasDeTrabalho;
  }

  get matricula():number {
    return this.matricula
  }

  get nome(): string {
    return this._nome;
  }

  get notasDeProva() {
    return this._notasDeProva;
  }

  get notasDeTrabalho() {
    return this._notasDeTrabalho;
  }

  set matricula(value: number) {
    this._matricula = value;
  }

  set nome(value: string) {
    this._nome = value;
  }

  set notasDeProva(value: number[]) {
    if (this.notasDeProva.length > 4) throw new Error('Só podem 4 notas no máximo')
    this._notasDeProva = value;
  }

  set notasDeTrabalho(value: number[]) {
    if (this.notasDeTrabalho.length > 2) throw new Error('Só podem 2 notas no máximo')
    this._notasDeProva = value;
  }

  somaNotas() {
    return [...this._notasDeProva, ...this._notasDeTrabalho].reduce((nota, notatrab) => notatrab + nota)
  }

  mediaNotas() {
    const total = this.somaNotas()
    return total / (this._notasDeProva.length + this._notasDeTrabalho.length)
  }
}

const bruno = new Software(1,'Bruno',[8,10,10],[10,10]);
console.log(bruno.mediaNotas());
console.log(bruno.notasDeProva);
