const minhaString = "Eu não sou supersticioso, mas sou um pouco ________.      ";


// A
let execessoDeEspaco = minhaString.trim()
//B
let quantidadeCaracteresAntes = minhaString.length
let quantidadeCaracteresDepois = execessoDeEspaco.length
//C
let substituirEspaco = minhaString.replace('________','sticioso')



console.log(execessoDeEspaco)
console.log(quantidadeCaracteresAntes)
console.log(quantidadeCaracteresDepois)
console.log(substituirEspaco)