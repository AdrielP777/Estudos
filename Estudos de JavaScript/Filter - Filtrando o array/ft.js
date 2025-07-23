const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 22, 27];

function callbackFilter(valor, indice, array) {
  return valor > 10;
}

const numerosFIltrados = numeros.filter(callbackFilter);
console.log(numerosFIltrados);