// Всплытие(Hoisting)
/*
    Всплытие — это механизм в JavaScript, в котором переменные и объявления функций,
    передвигаются вверх своей области видимости перед тем, как код будет выполнен.

    Все 3 типа переменных всплывают но в случае с let и const падает ошибка (reference error),
    в случае с var будет undefined
*/

/*var a;
function hoist() {
    a = 20;
    var b = 100;
}
hoist();
console.log(a);
*/


/*
var a;
hoist(); // Function declaration всплывает
console.log(a);
function hoist() {
    a = 20;
    var b = 100;
}*/

/*
hoist(); // Function expression не всплывает
console.log(a);
const hoist = () => {
    a = 20;
    var b = 100;
};*/
