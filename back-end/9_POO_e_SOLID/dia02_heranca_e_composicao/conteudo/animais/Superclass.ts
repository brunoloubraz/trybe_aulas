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

type Personagem = {
  nome: string;
  nivel: number;
  classe: string;
};

function mostrarPersonagem(personagem: Personagem) {
  console.log(`Nome: ${personagem.nome}, Nível: ${personagem.nivel}, Classe: ${personagem.classe}`);
}

const meuPersonagem: Personagem = {
  nome: 'Aragorn',
  nivel: 10,
  classe: 'Guerreiro'
};

mostrarPersonagem(meuPersonagem); // "Nome: Aragorn, Nível: 10, Classe: Guerreiro"


class Profile {
  private name: string;
  private email: string;

  public setName(name: string) {
    this.name = name;
  }

  public setEmail(email: string) {
    this.email = email;
  }

  public toString(): string {
    return `name - [${this.name}] - email - [${this.email}]`;
  }
}

class SocialMediaAccount {
  // Cria nossa composição com o perfil
  private profile = new Profile();

  public editProfile(name: string, email: string) {
    this.profile.setName(name);
    this.profile.setEmail(email);
  }

  public printProfile() {
    console.log(this.profile.toString());
  }
}

const socialMediaAccount = new SocialMediaAccount();
socialMediaAccount.editProfile('Manuella', 'manu@trybe.com');
socialMediaAccount.printProfile();