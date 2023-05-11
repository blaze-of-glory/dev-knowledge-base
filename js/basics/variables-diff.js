// Разница между var let const
/* Область видимости:
    var - ограничена контектстом(блоком) функции
    let, const - ограничены любым блоком ({})
*/


function assignA() {
    var a = 1;
}

assignA();
// console.log(a); // - a is not defined


if (true) {
    var b = 2;
}
// console.log(b); // - b === 2

if (true) {
    let c = 3;
    let e = 4;
}
// console.log(c, e); // - c, e is not defined
