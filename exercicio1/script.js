function perguntaNomeComida(nome,comida1,comida2,comida3){
    const frase = `Estas são as comidas favoritas de ${nome}:
   - ${comida1}
   - ${comida2}
   - ${comida3} `
console.log(frase)
}
const nomeUser = prompt('Qual eh seu nome?')
const comidafav1 = prompt('Qual sua comida favorita 1?')
const comidafav2 = prompt('Qual sua comida favorita 2?')
const comidafav3 = prompt('Qual sua comida favorita 3?')

perguntaNomeComida(nomeUser,comidafav1,comidafav2,comidafav3)
