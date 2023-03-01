// ЗНАЧЕНИЯ ПАРАМЕТРОВ ФУНКЦИИ ПО УМОЛЧАНИЮ

// Значения по умолчанию вычисляются в момент вызова функции

// Пример 1

// function multByFactor(value, multiplier = 1) {
//   return value * multiplier;
// }

// --->

// const multByFactor = function(value, multiplier = 1) {
//   return value * multiplier;
// }

// --->

// const multByFactor = (value, multiplier = 1) => {
//   return value * multiplier;
// }

// --->

const multByFactor = (value, multiplier = 1) => value * multiplier;

// Параметру multiplier присвоено дефолтное значение в описании паараметров ф-ции. Если значения для параметра multiplier не будет передано в вызове ф-ции, то ему присвоится значение по умолчанию

console.log(multByFactor(10, 2)); //  20
console.log(multByFactor(5)); // 5

// Пример 2

// const newPost = (post, addedAt = Date()) => {
//   return {...post, addedAt};
//  };

const newPost = (post, addedAt = Date()) => ({ ...post, addedAt });

// Date() - встроенная ф-ция, возвращает строку с текущей датой

// Если мы хотим неявно вернуть объект, то нужно обернуть его в круглые скобки, иначе интерпретатор подумает, что это тело ф-ции и будет ошибка

const firstPost = {
  id: 1,
  author: "Kate",
};

console.log(newPost(firstPost)); // {id: 1, author: 'Kate', addedAt: 'Wed Mar 01 2023 19:27:13 GMT+0200 (за східноєвропейським стандартним часом)'}

// В момент вызова ф-ции происходит присваивание параметру addedAt значения по умолчанию, то есть результата ф-ции Date()
