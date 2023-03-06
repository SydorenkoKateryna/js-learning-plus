// 1) Импорт (дефолтный импорт)

// import sum from './moduleOne.mjs'

// const res1 = sum(10, 2);
// console.log(res1)

import sumNumbers from "./moduleOne.mjs";

const res1 = sumNumbers(10, 2); // 12
console.log(res1);

// ----------------------------------------------------

// 2) Несколько импортов

// Переименование импортов
// Иногда бывает, что какая-то из переменных уже объявлена в модуле, в который мы экспортируем, и чтобы избежать конфликтов названий мы можем переименовать импортированную переменную в другую, используя синтаксис со словом "as"

import { one as oneRenamed, two } from "./moduleOne.mjs";

console.log(oneRenamed); // 1
console.log(two); // 'two'
