// ОБЩЕЕ
// Node.js - это среда выполнения JS

// Три ключевых понятия в JS: выражения, функции, объекты

// Практически все сущности в JS - это объекты
// Объект - это набор свойств и у свойст есть свои значения {имя (ключ): значение}
// Масив и функция - это объекты
// Числа и строки - ведут себя как объекты; это примитивные значения

// О CONSOLE
// console.log
// console - это объект
// log - это метод
// Метод - это ф-ция, которая является значением одного из свойст объекта
// . (точка) - это синтаксис JS, точечная запись. С её помощью можно получать доступ к свойстам объекта
// () (скобки) - это вызов метода (вызываем ф-цию log, которая является методом объекта console)

console.log("hello");

// console.dir() - отображает все свойства объетка
// console.table() - отображает все свойства объекта в табличном виде

// ФЦНКЦИЯ
// Функция выполянет какую-то свою задачу и возвращает значение (результат)

// ВЫРАЖЕНИЕ
// Любое выражение возвращает значение
// Выражения - это сроки, числа, переменные, логические выражения, функции (потому что возвращают значение -> результат ф-ции)
// 'abc', 10, 5 + 2, c = 10, 'good' + 'evening', a <= b || c !== d, myFunction(c, d)
// Выражение с побочными действиями - не только возвращает значение, но и выполняет другие действия

console.log("-----------------1---------------------");

// ПЕРЕМЕННЫЕ
// Переменные дают возможность ПОВТОРНОГО доступа к значениям (это как контейнеры для хранения значений)

// ИМЕНА ПЕРЕМЕННЫХ
// PascalCase - типы и классы
// DB_PASSWORD - значения известны до запуска приложения и не меняются (константы)
// camelCase - все остальные переменные

// ОБЪЯВЛЕНИЕ ПЕРЕМЕННЫХ
// let - можно переприсваивать переменной другие значения; можно сначала объявить переменную, а потом присвоить ей значение (до присвоения значение переменной будет undefined)
// const - нужно в одной строке сразу обьявить и присвоить значение переменной; новое значение нельзя присвоить
// var - присутсвовал в JS с самого начала, не рекомендуется сейчас к использованию

// let и const появились ECMAScript6 (стандарт JS (2015 год), который описывает полностью все ф-ции JS, а уже различные браузеры, node.js применяют этот стандарт)

// let a - объявление
// const c = 10 - объявление и присваивание
// a = true - присваивание

// console.log(a);
// ReferenceError: a is not defined

let a;
console.log(a);
// undefined
a = true;
console.log(a);
// true

console.log("-----------------2---------------------");

// ТИПЫ ПЕРЕМЕНННОЙ
// Тип переменной определяется типом приисвоенного значения

// ТИПЫ
// ПРИМИТИВНЫЕ ТИПЫ: string (строка), boolean (логический), number (число), null (значение отсутствует; можем присвоить самостоятельно, а потом переприсвоить значение), undefined (значения не существует -> неопределено, сами обычно не присваиваем), symbol (символ)
// Примитивные типы - переменная в памяти содержит то или иное значение
// ССЫЛОЧНЫЙ ТИП - object (объект)
// Ссылочный тип - переменная в памяти содержит ссылку на объект, который находится в другом месте (на область в памяти где находится сам объект)

// ОЧИСТКА КОНСОЛИ
// Если мы объявляем переменные (const) непосредственно в консоли, то при попытке их изменить будет ошибка (Assignment to constant variable), так как текущая сессия сохраняет все переменные, которые мы вводили. Чтобы очистить нужно либо закрыть и заново открыть консоль либо нажать Ctrl + R

const objectA = {
  a: 10,
  b: true,
};

console.log(objectA);

const copyOfA = objectA;
// копируем ссылку на объект

console.log(copyOfA);

console.log(objectA === copyOfA);
// true - содержат ссылку на один и тот же объект

copyOfA.c = "abc";
// изменения будут в обоих переменных

console.log(objectA);
console.log(copyOfA);

console.log("-----------------3---------------------");

// ДИНАМИЧЕСКАЯ ТИПИЗАЦИЯ
// Статическая типизаци - это когда при объявлении переменной так же указывается тип переменной. Попытка переприсвоить переменной значение другого типа вызовет ошибку.
// Динамическая типизация - в JS нет необходимости указывать тип переменной, когда мы объявляем переменную либо присваиваем ей значение. Можна переприсвоить переменной значение другого типа.
// JAVASCRIPT - динамически типизируемый язык

function d() {
  console.log("Hey there");
}

d();
// Вызов ф-ции, все хорошо

d = 10;
// переменной d присвоили значение типа число

// d();
// Вызов ф-ции, будет ошибка Uncaught TypeError: d is not a function

// const - позволяет предотвратить возможные проблемы связанные с динамической типизацией

const f = () => {
  console.log("Hey there");
};

f();

// f = 10;
// Ошибка будет уже на этом этапе, потому что просваивать новое значение переменным объявленным при помощи const запрещено (TypeError: Assignment to constant variable)

f();
// Выволнение кода не дойдет до этой строки

// Правила работы с переменными
// 1. Все переменные объявлять перед их использованием
// 2. Стараться использовать const везде, где это возможно

console.log("-----------------4---------------------");

// ОБЪЕКТЫ
// Порядок свойств не имеет значения)

const myCity = {
  city: "New York",
  popular: true,
  country: "USA",
};

console.log(myCity);
console.log(myCity.city);
console.log(myCity.popular);
console.log(myCity.country);

console.log("-----------------4.1---------------------");

console.log(Object.keys(myCity));
for (const key of Object.keys(myCity)) {
  console.log(`key: ${key}`);
  console.log(`myCity[key]: ${myCity[key]}`);
  console.log(`typeof(key): ${typeof key}`);
}

console.log("-----------------4.2---------------------");

console.log(Object.values(myCity));
for (const val of Object.values(myCity)) {
  console.log(`val: ${val}`);
  console.log(`typeof(val): ${typeof val}`);
}

console.log("-----------------4.3---------------------");

console.log(Object.entries(myCity));
for (const ent of Object.entries(myCity)) {
  console.log(`ent: ${ent}`);
  console.log(`ent[0] & ent[1]: ${ent[0]}: ${ent[1]}`);
  console.log(`typeof(ent): ${typeof ent}`);
}

myCity.state = "NY";
console.log(myCity);

console.log("-----------------4.4---------------------");

// Удаление свойств (delete)
delete myCity.country;
console.log(myCity);

console.log("-----------------4.5---------------------");

// Доступ к значению свойства с использованием скобок (bracket notation - скобочная запись)
// Чаще всего используется, когда нужно добавить свойство к объекту, которое будет называться так, как значение другой переменной
// В остальных случаях лучше обращаться к свойствам через точку

// myCity['country'] = 'USA';
// console.log(myCity);

const countryPropertyName = "country";

myCity[countryPropertyName] = "USA";
console.log(myCity);

console.log("-----------------4.6---------------------");

// Вложенные свойства

myCity.info = {};
myCity.info.averageTemperature = "24.5°C";
myCity.info.population = 8804190;

console.log(myCity);

delete myCity.info["averageTemperature"];
console.log(myCity);
delete myCity.info.population;
console.log(myCity);
// После удаления всех свойств с info все еще остается просто пустой объект info
delete myCity.info;
console.log(myCity);

console.log("-----------------4.7---------------------");
// Использование переменных & сокращенный формат записи свойст (имя(ключ) = значение)
// Сокращенный свойства рекомендуется размещать в начале объекта

const name = "Kate";
const postsQty = 21;

const userProfile = {
  // name: name,
  name,
  // postsQty: postsQty,
  postsQty,
  hasSignedAgreement: false,
};

console.log(userProfile);

// ГЛОБАЛЬНЫЕ ОБЪЕКТЫ
// window - присутствует в Веб-браузерах
// В объекте window присутсвуют методы и свойства, которые доступны в веб-браузере по умолчанию -> можем их использовать

// global - присутсвует в Node.js

// УНИФИЦИРОВАННЫЙ (единый) ГЛОБАЛЬНЫЙ ОБЪЕКТ
// globalThis - доступен уже во всех Веб-браузерах и Node.js

// console - это одно из свойств глобального объекта window и global
// console.log === window.console.log === globalThis.console.log
// console.log === global.console.log === globalThis.console.log

console.log("-----------------4.8---------------------");
// МЕТОДЫ ОБЪЕКТА
// Метод - это свойство объекта, значение которого функция

// const myCity = {
//  cityGreeting: function () {
//      console.log('Greetings!')
//  }
// }

// const myCity = {
//  cityGreeting() {
//      console.log('Greetings!')
//  }
// }

myCity.cityGreeting = function () {
  console.log(`Greetings to ${this.city}`);
};

// myCity.cityGreeting = () => console.log(`Greetings to ${this.city}`);
// будет ошибка, так как в стрелочных нет this, поэтому для записи методов объекта они плохо подходять

console.log(myCity);
console.log(myCity.cityGreeting());

console.log("-----------------5---------------------");

// JSON - JAVASCRIPT OBJECT NOTATION
// Формат обмена данными (передачи данных) между компьютерами в интернете
// Данные передаются ввиде строки

// Конвертация JSON в объект (parse - метод объекта JSON)
// Ф-ция JSON.parse()

// Конвертация объекта в JSON (stringify - метод объекта JSON)
// Ф-ция JSON.stringify()

console.log("-----------------6---------------------");

// МУТАЦИЯ В JAVASCRIPT
// Копирование примитивных типов происходит по значению (copy by value)
// При изменении / добавлении свойст в объект происходит мутация объекта на который ссылается переменная
// Копирование сложных типов происходит по ссылке (copy by reference)
// Мутирование копий (мутирование объекта через копию) - когда несколько переменных ссылаются на один объект в памяти, мы можем менять значения свойств объекта через все эти переменные

// КАК ИЗБЕЖАТЬ МУТАЦИЙ

// При следующих подходах  в objectB будет лежать новая ссылка на новый объект, то есть objectB !== objectA
// При изменении свойств в новом объекте, мутации оригинального объекта не происходит

console.log("-----------------6.1---------------------");

// Вариант 1
// Частичная мутация
// assign - метод объекта Object
// Object - является частью глобального объекта (свойство глобального объекта), доступен как в Веб-браузерах, так и в Node.js
// const objectB = Object.assign({}, objectA)
// Проблематика: если у объекта есть вложенные объекты, то ссылки на них сохраняются, то есть мы избегаем мутации только корневых свойств объекта

const person = {
  name: "Bob",
  age: 25,
};

const person2 = Object.assign({}, person);

person2.age = 26;

console.log(person.age); // 25
console.log(person2.age); // 26

console.log("-----------------6.2---------------------");

// Вариант 2
// Частичная мутация
// Оператор spread - оператор разделения объекта на свойства
// Берется объект objectA и разделяется на свойства, а потом эти свойства сразу же собираются в новый объект objectB, так как указаны фигурные скобки
// Проблематика: если у объекта есть вложенные объекты, то ссылки на них сохраняются, то есть мы избегаем мутации только корневых свойств объекта

const person3 = { ...person };

person3.name = "Alis";

console.log(person.name); // Bob
console.log(person3.name); // Alis

console.log("-----------------6.3---------------------");

// Вариант 3
// Полностью избегаем мутации
// Ссылки на вложенные объекты не сохраняются
// 1 етап - конвертируем objectA в строку с помощью метода stringify
// 2 етап - полученую строку передаем как аргумент в вызове метода parse, то есть конвертируем строку обратно в объект

const person4 = JSON.parse(JSON.stringify(person));

console.log(JSON.stringify(person)); // {"name":"Bob","age":25}
console.log(JSON.parse(JSON.stringify(person))); // {name: 'Bob', age: 25}

person4.name = "Jonson";

console.log(person.name); // Bob
console.log(person4.name); // Jonson

console.log("-----------------7---------------------");
