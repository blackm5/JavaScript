function person(){
    this.name = "Mike"; //Atributo (C/ uma variável para o objeto em quetão.("isso"))
};
var person = new person(); // Cria algo novo, no caso uma nova person().
person.name = "Jhon";
console.log(person.name);