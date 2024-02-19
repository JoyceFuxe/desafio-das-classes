class Heroi {
    constructor(nome, idade, tipo) {
      this.nome = nome;
      this.idade = idade;
      this.tipo = tipo;
    }
  
    atacar() {
      let ataque;
      switch (this.tipo) {
        case 'patrulheiro':
          ataque = 'choque';
          break;
        case 'guerreiro':
          ataque = 'espada';
          break;
        case 'monge':
          ataque = 'artes marciais';
          break;
        case 'ninja':
          ataque = 'shuriken';
          break;
        default:
          ataque = 'ataque indefinido';
      }
      console.log(`O ${this.tipo} atacou usando ${ataque}.`);
    }
  }
  
  // Criando um herói e chamando o método atacar
  const heroi = new Heroi('Herói', 30, 'patrulheiro');
  heroi.atacar();
  