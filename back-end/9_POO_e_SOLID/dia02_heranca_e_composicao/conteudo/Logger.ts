interface Logger {
  log(value: string): any
}

interface Database {
  save(key: string, value: string):void
}

class ConsoleLogger implements Logger {
  log(value: string) {
      console.log(value)
  }
}

class ConsoleLogger2 implements Logger{
  log(value: string) {
      console.log('ConsoleLogger2:' + value)
  }
}

class ExampleDatabase implements Database{
  constructor(public logger: Logger = new ConsoleLogger()) {

  }
  save(key: string, value: string): void {
    this.logger.log(key + value)
  }
}

// Crie um objeto de cada um dos _Loggers_.
const logger1 = new ConsoleLogger();
const logger2 = new ConsoleLogger2();

// Crie três objetos da _ExampleDatabase_, cada um dos dois primeiros recebendo um dos _Loggers_, e o último não recebendo nenhum.
const database1 = new ExampleDatabase(logger1);
const database2 = new ExampleDatabase(logger2);
const database3 = new ExampleDatabase();

// Utilize todos eles para salvar um conteúdo fictício.
database1.save('chave 1', 'valor 1');
database2.save('chave 2', 'valor 2');
database3.save('chave 3', 'valor 3');
