function test() {
    console.log('Call!');
}
test();
// Fuções com Parâmetros.
function call(name,ege) {
    console.log(name,ege);
}
call('Mike,',27, );
call('Jhon,',30);

//Fuções com return -- encerra a função.
function getname(par){
    if(par == 1){
    return 'Sproul';
    }else{
        return 'George';
    }
}
var name = getname(1);
console.log(name);

// Chamar Funções por VARIÁVEIS.
var func = function() {
    console.log('Hello World!');
}
func();

//Chamar Funções por PARÊNTESES.
(function(){
    console.log('Hey!')
})()
//Chamar Funções por PARÊNTESES + VARIÁVEIS.
var t = (function(x){
    console.log(x*2);
})((5));