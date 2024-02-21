var date = new Date()
var houers  = date.getHours()
console.log(`Is a ${date}`)
if (houers < 12){
    console.log(`Is ${houers}am. Good morning!`)
}
else if (houers <= 18){
    console.log(`Is ${houers}am. Good afternoon!`)
}
else {
    console.log(`Is ${houers}am. Good night!`)
}