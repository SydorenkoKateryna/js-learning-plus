// ФУНКЦИОНАЛЬНЫЕ ВЫРАЖЕНИЯ

// ОБЪЯВЛЕННАЯ ФУНКЦИЯ
// ФУНКЦИОНАЛЬНОЕ ВЫРАЖЕНИЕ
// ПРИМЕРЫ

// ОБЪЯВЛЕННАЯ ФУНКЦИЯ
// Объявленная функция - когда мы объявляем ф-цию, создается переменная с именем, а значением этой переменной будет ф-ция и эту ф-цию можно вызвать написав имя и поставим после этого ()

function myNewFn(a, b) {
  let c;
  a = a + 1;
  c = a + b;
  return c;
}

myNewFn(2, 4);
console.log(myNewFn(2, 4)); // 7

// При таком объявлении ф-ции можно переприсвоить значение - это не хорошо
myNewFn = 10;
console.log(myNewFn); // 10

// ФУНКЦИОНАЛЬНОЕ ВЫРАЖЕНИЕ
// Функциональное выражение - у него нет имени и сразу после ключевого слова function идут параметры в скобках

// function(a, b) {
//   let c;
//   a = a + 1;
//   c = a + b;
//   return c;
// }

// Функциональные выражения ВСЕГДА АНОНИМНЫЕ

// Функциональные выражения нельзя использовать автономно

// Так же как и объявленную ф-цию, функциональные выражения можно:
// 1. присваивать переменной
// 2. использовать как аргумент (callback) в вызове другой ф-ции

console.log("--------------------------------------");

// ПРИМЕРЫ
// Пример 1: Присвоение функционального выражения перменной

const myNewFunction = function (a, b) {
  let c;
  a = a + 1;
  c = a + b;
  return c;
};

// myNewFunction - это переменная
// function (a, b) {...} - с этого момента начинается функция (анонимное функциональное выражение)
// То есть мы присваиваем переменной myNewFunction функциональное выражение
// У функционального выражения нет имени, но путем присвоения функционального выражения переменной мы даем имя такому функциональному выражению и после этого мы можем вызывать такое функциональное выражение, как любую другую функцию, обращаясь к имени переменной

myNewFunction(5, 3);
console.log(myNewFunction(5, 3)); // 9

console.log("--------------------------------------");

// Пример 2: Функциональное выражени в вызове другой функции

// setTimeout(function() {
//   console.log('Отложенное сообщение')
// }, 1000);
