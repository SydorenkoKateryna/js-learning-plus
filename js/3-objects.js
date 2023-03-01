// ОБЪЕКТЫ

// ПРИМЕРЫ ОБЪЕКТОВ
// УДАЛЕНИЕ СВОЙСТВ (delete)
// ДОСТУП К ЗНАЧЕНИЮ СВОЙСТВ
// ВЛОЖЕННЫЕ СВОЙСТВА
// ИСПОЛЬЗОВАНИЕ ПЕРЕМЕННЫХ & СОКРАЩЕННЫЙ ФОРМАТ ЗАПИСИ СВОЙСТВ
// ГЛОБАЛЬНЫЕ ОБЪЕКТЫ
// МЕТОДЫ ОБЪЕКТА

// ПРИМЕРЫ ОБЪЕКТОВ
// *: Порядок свойств не имеет значения

const myCity = {
  city: "New York",
  popular: true,
  country: "USA",
};

console.log(myCity);
console.log(myCity.city);
console.log(myCity.popular);
console.log(myCity.country);

console.log("--------------------------------------");

console.log(Object.keys(myCity));
for (const key of Object.keys(myCity)) {
  console.log(`key: ${key}`);
  console.log(`myCity[key]: ${myCity[key]}`);
  console.log(`typeof(key): ${typeof key}`);
}

console.log("--------------------------------------");

console.log(Object.values(myCity));
for (const val of Object.values(myCity)) {
  console.log(`val: ${val}`);
  console.log(`typeof(val): ${typeof val}`);
}

console.log("--------------------------------------");

console.log(Object.entries(myCity));
for (const ent of Object.entries(myCity)) {
  console.log(`ent: ${ent}`);
  console.log(`ent[0] & ent[1]: ${ent[0]}: ${ent[1]}`);
  console.log(`typeof(ent): ${typeof ent}`);
}

myCity.state = "NY";
console.log(myCity);

console.log("--------------------------------------");

// УДАЛЕНИЕ СВОЙСТВ (delete)
delete myCity.country;
console.log(myCity);

console.log("--------------------------------------");

// ДОСТУП К ЗНАЧЕНИЮ СВОЙСТВ
// Доступ к значению свойства с использованием скобок (bracket notation - скобочная запись)
// Чаще всего используется, когда нужно добавить свойство к объекту, которое будет называться так, как значение другой переменной
// В остальных случаях лучше обращаться к свойствам через точку

// myCity['country'] = 'USA';
// console.log(myCity);

const countryPropertyName = "country";

myCity[countryPropertyName] = "USA";
console.log(myCity);

console.log("--------------------------------------");

// ВЛОЖЕННЫЕ СВОЙСТВА
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

console.log("--------------------------------------");

// ИСПОЛЬЗОВАНИЕ ПЕРЕМЕННЫХ & СОКРАЩЕННЫЙ ФОРМАТ ЗАПИСИ СВОЙСТВ
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

console.log("--------------------------------------");

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
