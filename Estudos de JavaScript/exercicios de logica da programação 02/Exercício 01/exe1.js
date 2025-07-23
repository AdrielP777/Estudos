//Função que recebe 2 numero e retorna o maior deles part 1
function max(x, y) {
    if (x > y) {
        return x;
    } else {
        return y;
    }
}

const maior = max(4,2);
console.log(maior)

//Função que recebe 2 numero e retorna o maior deles part 2
function max(x, y) {
    return x > y ? x : y;
}
    


console.log(max(10, 20));

//Função que recebe 2 numero e retorna o maior deles part 3

const max2 = (x, y) => x > y ? x :y;
console.log(max2(100, 20));