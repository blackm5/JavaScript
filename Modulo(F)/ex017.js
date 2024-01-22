function oddeven(n){
    if (n%2==0) {
        return `The number ${n} is even.`
    }
    else if (n==undefined) {
        return `The number 0 is even.`
    }
    else {
        return `The number ${n} is odd.`
    }
}
console.log(oddeven(111))