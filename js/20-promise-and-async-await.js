// ПРОМИСЫ

// ВВЕДЕНИЕ В ПРОМИСЫ
// СОЗДАНИЕ И ИСПОЛЬЗОВАНИЕ ПРОМИСОВ
// ИСПОЛЬЗОВАНИЕ ПРОМИСОВ В fetch
// ПРАКТИКА ПО ИСПОЛЬЗОВАНИЮ ПРОМИСОВ В fetch
// ВЫЗОВ fetch ВНУТРИ ПРОМИСА
// АСИНХРОННЫЕ ФУНКЦИИ
// ОБРАБОТКА ОШИБОК В АСИНХРОННЫХ ФУНКЦИЯХ
// КЛЮЧЕВЫЕ ПРИНЦИПЫ В async await

// ВВЕДЕНИЕ В ПРОМИСЫ
// Промисы позволяют обрабатывать отложенные во времени события
// Промис - это обещание предоставить результат позже
// Промис может вернуть либо результат, либо ошибку

// Асинхронный запрос - запрос, который мы послали на сервер и не знаем, когда прийдет ответ. То есть ответ приходит асинхронно, не сразу же после того, как мы послали запрос, а через какое-то время
// И в этот интервал, пока ожидается ответ от сервера, мы должны иметь возможность выполнять другие задачи в нашем JS приложении

// Состояния промиса:
// 1. ожидание - когда промис только создается, то есть мы ожидаем либо результата, либо ошибку
// 2. исполнен - когда промис вернул какой-то результат
// 3. отклонен - если возникла какая-то ошибка, то промис можно отклонить

// СОЗДАНИЕ И ИСПОЛЬЗОВАНИЕ ПРОМИСОВ
// Промис - это объект в JS
// Промис создается путем создания нового экземпляра класса Promise
// Аргументом при создании нового экземпляра Промиса является callback ф-ция с двумя параметрами resolve и reject, которые в свою очередь тоже являются функциями
// Вновь созданный Промис будет в состоянии ожадиния "pending"
// resolve - когда мы вызываем resolve, мы должны передать какой-то результат, какие-то данные, и когда была вызвана ф-ция resolve Промис считается иполненным "resolved"
// reject - если же где-то возникла ошибка, мы должны вызвать другую ф-цию, reject, и передать ей ту ошибку, которая возникла. В таком случае промис считается отклоненным "rejected"

const myPromise = new Promise((resolve, reject) => {
  // Выполнение асинхронных действий
  // Внутри этой ф-ции нужно в результате вызвать ОДНУ из ф-ций resolve или reject
});

myPromise
  .then((value) => {
    // Действия в случае успешного исполнения Промиса
    // Значение value - это значение, переданное в вызове функции resolve внутри Промиса
  })
  .catch((error) => {
    // Действия в случае отклонения промиса
    // Значение error - это значение, переданное в вызове функции reject внутри Промиса
  });

// ИСПОЛЬЗОВАНИЕ ПРОМИСОВ В fetch
// Использование Промисов предполагает во-первых создание Промисов и во-вторых выполнение определенных действий в случае либо возврата данных Промисом, либо в случае возврата ошибки

// {JSON} Placeholder - с помощью этого ресурса мы будем отправлять данные на сервер
// Fetch API предоставляет интерфейс JavaScript для работы с запросами и ответами HTTP. Он также предоставляет глобальный метод fetch(), который позволяет легко и логично получать ресурсы по сети асинхронно.
// Самый простой способ использования fetch() заключается в вызове этой функции с одним аргументом — строкой, содержащей путь к ресурсу, который вы хотите получить — которая возвращает promise, содержащее ответ
// Конечно, это просто HTTP-ответ, а не фактический JSON. Чтобы извлечь содержимое тела JSON из ответа, мы используем json() метод
// Метод json() так же возвращает промис, поэтому мы добавляем еще один вызов метода then

fetch("https://jsonplaceholder.typicode.com/todos")
  .then((response) => response.json())
  .then((json) => console.log(json))
  .catch((error) => console.error(error));

// ПРАКТИКА ПО ИСПОЛЬЗОВАНИЮ ПРОМИСОВ В fetch
fetch("https://jsonplaceholder.typicode.com/todos/2")
  .then((response) => {
    console.log(response);
    return response.json();
  })
  .then((json) => console.log(json))
  .catch((error) => console.error(error));

// ВЫЗОВ fetch ВНУТРИ ПРОМИСА
const getData = (url) =>
  new Promise((resolve, reject) =>
    fetch(url)
      .then((response) => response.json())
      .then((json) => resolve(json))
      .catch((error) => reject(error))
  );

getData("https://jsonplaceholder.typicode.com/todos/3")
  .then((data) => console.log(data))
  .catch((error) => console.log(error.message));

// АСИНХРОННЫЕ ФУНКЦИИ
// ASYNC/AWAIT - специальный синтаксис для упрощения работы с промисами
// Асинхронная ф-ция - это ф-ция, которая вместо какого-то значения возвращает Промис

async function asyncFn() {
  // Всегда возвращает Промис
}

const newAsyncFn = async () => {
  // Всегда возвращает Промис
};

// Пример 1
const myAsyncFn = async () => {
  return "Success!";
};

console.log(myAsyncFn()); // Promise {<fulfilled>: 'Success!'}

myAsyncFn().then((value) => console.log(value)); // Success!

// Пример 2
const errorAsyncFn = async () => {
  throw new Error("There was an error!");
};

errorAsyncFn()
  .then((value) => console.log(value))
  .catch((error) => console.log(error.message)); // There was an error!

// AWAIT
// В асинхронных ф-циях можно использовать ключевое слово await, с помощью которого можно ожидать результата Промиса, тем самым можно выполнять какие-то асинхронные действия внутри асинхронной ф-ции, ожидать какого-то результата

// Пример 3 - Ожидание результата AWAIT
// performance.now() - с помощью этого метода можно засечь время, посчитать какой-то интервал времени

const timerPromise = () =>
  new Promise((resolve, reject) => setTimeout(() => resolve(), 2000));

const anotherAsyncFn = async () => {
  console.log("Timer starts");
  const startTime = performance.now();
  await timerPromise(); // Функция дальше не выполняется пока не получен результат Промиса (исполнен/отклонен)
  const endTime = performance.now();
  console.log("Timer ended", endTime - startTime);
};

anotherAsyncFn();
// Timer starts
// Timer ended 2421.5

// Пример 4 - переход с Промисом на ASYNC/AWAIT
// const getData = (url) =>
//   new Promise((resolve, reject) =>
//     fetch(url)
//       .then((response) => response.json())
//       .then((json) => resolve(json))
//       .catch((error) => reject(error))
//   );

// getData("https://jsonplaceholder.typicode.com/todos/3")
//   .then((data) => console.log(data))
//   .catch((error) => console.log(error.message));

const newGetData = async (url) => {
  const res = await fetch(url);
  const json = await res.json();
  return json;
};

const url = 'https://jsonplaceholder.typicode.com/todos/5'

// const data = await newGetData(url); // Нет обработки ошибок

// console.log(data);

// Нет блока, который ловит ошибки ---> поэтому помещаем вызов ф-ции newGetData в try блок и добавляем catch блок с обработкой ошибок

// ОБРАБОТКА ОШИБОК В АСИНХРОННЫХ ФУНКЦИЯХ
try {
    const data = await newGetData(url)
    console.log(data)
} catch(error) {
    console.log(error.message); // Есть обработка ошибок
}

// КЛЮЧЕВЫЕ ПРИНЦИПЫ В async await
// 1. async/await - это синтаксическая надстройка над промисами
// 2. await синтаксис возможен только внутри async функций
// 3. async функция всегда возвращает Promise
// 4. async функция ожидает результата инструкции await и не выполняет последующие инструкции