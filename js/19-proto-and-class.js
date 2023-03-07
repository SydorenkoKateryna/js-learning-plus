// КЛАССЫ И ПРОТОТИПЫ

// ВВЕДЕНИЕ В КЛАССЫ И ПРОТОТИПЫ
// ПРИМЕР КЛАССА
// СОЗДАНИЕ ЭКЗЕМПЛЯРОВ КЛАССА
// ЦЕПОЧКА ПРОТОТИПОВ
// ПРОВЕРКА ПРИНАДЛЕЖНОСТИ
// ВЫЗОВ УНАСЛЕДОВАННЫХ МЕТОДОВ
// ПРОВЕРКА ПРИНАДЛЕЖНОСТИ СВОЙСТВ ОБЪЕКТОВ
// СТАТИСТИЧЕСКИЕ МЕТОДЫ
// РАСШИРЕНИЕ ДРУГИХ КЛАССОВ
// ЧТО ЖЕ ТАКОЕ ПРОТОТИП

// ВВЕДЕНИЕ В КЛАССЫ И ПРОТОТИПЫ
// Синтаксис классов появился в ES6 (2015 год)
// class ...
// Так как JS - это не объектно-ориентированный язык программирования, как Java например, ввели синтаксис классов, чтобы сделать JS более похожим на объектно-ориентированные языки программирования
// С помощью классов мы можем создавать щаблоны (заготовки) для объектов и потом на основании этих заготовок создавать экземпляры объектов

// Классы позволяют создавать прототипы для объектов
// На основании прототипов создаются экземпляры
// Экземпляры могут иметь собственные свойства и методы
// Экземпляры наследуют свойства и методы прототипов

// ПРИМЕР КЛАССА
// Понятие классов в JS - это всего навсего синтаксическая настройка над функциями и объектами
// На самом деле экземпляры классов в JS создаются с помощью вызова функции
// class - это шаблон для создания экземпляров классов

// Название класса в PascalCase
// constructor вызывается только когда мы создаем новый экземпляр класса
// Переменная this указывает на экземпляр класса
//  upvote() - пример метода, задаются опционально. Такие методы будут наследоваться каждым экземпляром класса

class Comment {
  constructor(text) {
    this.text = text;
    this.votesQty = 0;
  }

  upvote() {
    this.votesQty += 1;
  }
}

// СОЗДАНИЕ ЭКЗЕМПЛЯРОВ КЛАССА
// new - ключевое слово, префиксный-унарный оператор. С помощью new можно создать новый экземпляр того или иного класса

const firstComment = new Comment("First comment"); // Вызывается ф-ция constructor
// Такая ф-ция вернет новый объект firstComment, который унаследует все методы класса Comment (класс Comment будет прототипов для экземпляра firstComment)
console.log(firstComment);

// Наследование по цепочке: на уровне созданного экземпляра firstComment будут доступны его собственные методы; на уровне родительского класса Comment будут доступны методы этого класса, которые можно вызывать на уровне екземляра firstComment; на уровне родительского корневого класса Object будут доступны все методы и свойства, которые созданный нами класс Comment наследует и которые так же можно вызывать на уровне екземляра firstComment

// ЦЕПОЧКА ПРОТОТИПОВ
// firstComment - является экземпляром класса Comment
// Comment в свою очередь наследует все методы и свойства объекта Object, который является глобальным классом в JS

// ПРОВЕРКА ПРИНАДЛЕЖНОСТИ
console.log(firstComment instanceof Comment); // true
console.log(firstComment instanceof Object); // true

console.log(Comment.prototype.constructor === Comment); // true
// true из-за того,что JS не является изначально объектно-ориентированным языком программирования, и вся цепочка прототипов создается с помощью ф-ций и объектов. Comment.prototype - это объект с двумя метододами constructor и upvote, и у этого prototype есть метод constructor и он равен переменной Comment

// ВЫЗОВ УНАСЛЕДОВАННЫХ МЕТОДОВ
// Методы можно вызывать многократно
// this динамически станет указывать на объект (экземпляр), на котором вызывается метод

firstComment.upvote();
console.log(firstComment.votesQty); // 1
firstComment.upvote();
console.log(firstComment.votesQty); // 2

// ПРОВЕРКА ПРИНАДЛЕЖНОСТИ СВОЙСТВ ОБЪЕКТОВ
// hasOwnProperty() - проверить принадлежность свойства экземпляру конретного класса
console.log(firstComment.hasOwnProperty("text")); // true - собственное свойство
console.log(firstComment.hasOwnProperty("votesQty")); // true - собственное свойство
console.log(firstComment.hasOwnProperty("upvote")); // false - свойство наследуемое от родительского класса Comment
console.log(firstComment.hasOwnProperty("hasOwnProperty")); // false - метод доступный на уровне Object

// СОЗДАНИЕ НЕСКОЛЬКИХ ЭКЗЕМПЛЯРОВ
// Разные объекты с разными собственными свойствами
const secondComment = new Comment("Second comment");
const thirdComment = new Comment("Third comment");

secondComment.upvote();
console.log(secondComment.votesQty); // 1

console.log(thirdComment.votesQty); // 0

// СТАТИСТИЧЕСКИЕ МЕТОДЫ
// static - ключевое слово
// Метод доступен как свойство класса и не наследуется экземплярами класса
// Статичтисечкие методы можно вызывать на классе используя точечную запись
// Статистические методы находятся в конструкторе прототипа класса

// РАСШИРЕНИЕ ДРУГИХ КЛАССОВ
// extends - ключевое слово ("расширяет")
// Родительский конструктор вызовется автоматически

class NumbersArray extends Array {
  sum() {
    return this.reduce((el, acc) => (acc += el), 0);
  }
}

const myArray = new NumbersArray(2, 5, 7);

console.log(myArray);

myArray.sum();
console.log(myArray.sum()); // 14

// Цепочка прототипов:
// myArray - экземпляр класса NumbersArray ---> NumbersArray расширяет класс Array ---> Array расчишярет Object
// Выходит, что людой эксземпляр класса NumbersArray наследует все методы NumbersArray, Array и Object

// Практика для себя
const newArray = new Array(1, 2, 3, 4, 5);
console.log(newArray); // (5) [1, 2, 3, 4, 5]

const sum = newArray.reduce((el, acc) => (acc += el), 0);
console.log(sum); // 15

const filter = newArray.filter((el) => el > 2);
console.log(filter); // (3) [3, 4, 5]

const map = newArray.map((el) => el * 2);
console.log(map); // (5) [2, 4, 6, 8, 10]

// ЧТО ЖЕ ТАКОЕ ПРОТОТИП
// Прототип - это объект, в котором находятся такие методы как constructor и другие методы, которые мы определили в конкретном классе
// У каждого экземпляра класса есть скрытое свойство __proto__
// Свойство prototype конкретного класса === свойству __proto__ любого экземпляра такого класса

// Пример 1
console.log(Comment.prototype); // {constructor: ƒ, upvote: ƒ}

console.log(firstComment.__proto__); // {constructor: ƒ, upvote: ƒ}

console.log(Comment.prototype === firstComment.__proto__); // true

// Пример 2
console.log(NumbersArray.prototype); // Array {constructor: ƒ, sum: ƒ}

console.log(myArray.__proto__); // Array {constructor: ƒ, sum: ƒ}

console.log(NumbersArray.prototype === myArray.__proto__); // true
