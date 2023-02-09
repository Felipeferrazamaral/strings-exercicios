//Crie a const para a frase aqui

const frase = 'Jorge tem uma casa verde e com portão azul, com os dizeres: \"BOAS VINDAS, mas não deixe o gato sair\"'
console.log(frase)

const trocandoVerdePorRosa = frase.replace('verde','rosa')
const trocandoAzulPorLaranja = frase.replace('azul','laranja')
const veirificaVerdePorRosa = trocandoVerdePorRosa.includes('verde')
const verificaAzulPorLaranja = trocandoAzulPorLaranja.includes('laranja')




console.log(trocandoVerdePorRosa)
console.log(trocandoAzulPorLaranja)
console.log(veirificaVerdePorRosa)
console.log(verificaAzulPorLaranja)


//EXTRAAA

const trocandoTexto = frase.replace('mas não deixe o gato sair','MAS NÃO DEIXE O GATO SAIR')
console.log(trocandoTexto)
