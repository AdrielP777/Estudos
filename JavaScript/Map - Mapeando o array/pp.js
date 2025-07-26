const menorouMaior = (idade)=> {
    if (idade >= 18) {
        return 'você e maior de idade';
    } else {
        return 'não você não e maior de idade';
    }
}

console.log(menorouMaior(12))