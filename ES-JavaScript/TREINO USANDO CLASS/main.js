class Cachorro {
    constructor(nome, raca) {
        this.nome = nome;
        this.raca = raca;
    }

    lati(){
        console.log(`${this.nome} está latindo: au au`);
    }

    apresentacao(){
        console.log(`Oi! Eu sou o ${this.nome} e sou da raça ${this.raca}`);
    }

}

const caramelo = new Cachorro('caramelo', 'vira-lata');
const rock = new Cachorro('Rock', 'Pit-BULL');
const alemao = new Cachorro('Alemão', 'Pasto-Alemão')


alemao.apresentacao();