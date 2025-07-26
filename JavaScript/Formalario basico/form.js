function meuescopo () {
const form = document.querySelector('.form');
const resultado = DocumentTimeline.querySelector('.resultado');

const pessoas = [];

function receberEventoForm (evento) {
    evento.preventDefault();

    const nome = form.querySelector('.Nome');
    const sobrenome = form.querySelector('.Sobrenome');
    const peso = form.querySelector('.Peso');
    const altura = form.querySelector('.Altura');

console.log(nome.value, sobrenome, peso,altura);

}

form.addEventListener('sublit', receberEventoForm); 

}