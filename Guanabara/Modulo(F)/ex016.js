let a = [5,3,7,1]
let b = [2,4,6,8]
console.log(`${a} is numbers of Array`)
console.log(`It has ${a.length} elements`)
console.log(`Create the ${a.push(9)}º index receives 9`)
console.log(`In ord growing: ${a.sort()}`)
console.log(`Changing the ${a.length}º index by ${a[5]=11}`)
for (let pos = 0; pos < a.length; pos++) {
    console.log(`The index ${pos} has value ${a[pos]}`)
}
for (let t in b) { // somente para Arrey ou Object
    console.log(`The index ${t} has value ${b[t]}`)
}
console.log(`${a.indexOf(7)}`)//posição encontrada
console.log(`${b.indexOf(7)}`)//ñ encontrado

