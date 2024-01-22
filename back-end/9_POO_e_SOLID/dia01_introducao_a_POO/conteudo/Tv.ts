class Tv {
  private brand: string;
  private size: number;
  private resolution: number;
  private connections: string[];
  private _connectedTo?: string;

  constructor(brand: string, size:number, resolution:number, connections: string[]) {
    console.log('Televisão ligada');
    this.brand = brand;
    this.size = size;
    this.resolution = resolution;
    this.connections = connections;
  }

  turnOn():void {
    console.log(`Brand: ${this.brand}`);
    console.log(`size: ${this.size}`);
    console.log(`resolution: ${this.resolution}`);
    console.log(`connections: ${this.connections}`);
    console.log(`connectedTo: ${this._connectedTo}`);
  }

  sleep() {
    console.log('Tv desligada');
  }

  get connectedTo(): string | undefined {
    return this._connectedTo;
  }

  set connectedTo(value: string | undefined) {
    // permite setar undefined ou uma conexão que esteja no `connections`
    if (!value || this.connections.includes(value)) {
      this._connectedTo = value;
      console.log(this._connectedTo);
    } else {
      console.log('Sorry, connection unavailable!');
    }
  }

}

const tvLigou = new Tv('LG', 30, 1920, ['HDMI','RGB',"AV"])

console.log(tvLigou);
tvLigou.turnOn();

console.log(Number('1'))
tvLigou.connectedTo = 'AV'
console.log(tvLigou.connectedTo);
