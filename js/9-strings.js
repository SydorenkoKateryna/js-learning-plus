// КОНКАТЕНАЦИЯ СТРОК (соединение строк)

console.log("Hello " + "World");

const hello = "Hello";
const world = "World";

const greeting = hello + " " + world;
console.log(greeting);

// ШАБЛОННЫЕ СТРОКИ

const newGreeting = `${hello} ${world}`;
console.log(newGreeting);

// Нужно помнить об автоматической конвертации типов (привидении типов) интерпретатором JS, если мы соединяем число и строку, то на выходе получим строку, поэтому всегда нужно четко понимать, какие типы у значений/переменных, которые мы хотим соединить
