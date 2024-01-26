let human = {
    name:'Yan', 
    sex:'M', 
    weight: 85.5, 
    fatten(p=0){
        console.log('Engordou')
        this.weight += p
    }
}
human.fatten(5)
console.log(`${human.name} weighed 85.5kg but now weighs ${human.weight}`)
console.log(typeof human)