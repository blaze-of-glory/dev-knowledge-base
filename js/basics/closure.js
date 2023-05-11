// Замыкание(Closure)
/*
    Замыкание даёт вам доступ к Scope внешней функции из внутренней функции.
*/

function init() {
    const name = "Mozilla"; // name - локальная переменная, созданная в init
    function displayName() { // displayName() - внутренняя функция, замыкание
        console.log(name); // displayName() использует переменную, объявленную в родительской функции
    }
    displayName();
}

init();
