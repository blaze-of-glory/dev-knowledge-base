// Контекст вызова
/*
   Контекст вызова - это, если говорить упрощённо, концепция,
   описывающая окружение, в котором производится выполнение кода на JavaScript.
   Function declaration имеет контекст вызова (либо свой, либо который назначили с помощью call/bind/apply).

   У Arrow function нет this. Если происходит обращение к this,
   его значение берётся снаружи и привязать его нельзя с помощью call/bind/apply.
*/

class Person {
    constructor(name) {
        this.name = name;
    }
    getName = function () {
        console.log(this.name);
    };
    getNameWithArrow = () => {
        console.log(this.name);
    };
}

const Mike = new Person('Mike');
const Vlad = new Person('Vlad');

Mike.getName();
Mike.getName.call(Vlad);
Mike.getNameWithArrow();
Mike.getNameWithArrow.call(Vlad);
