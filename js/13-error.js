// ОБРАБОТКА ОШИБОК

// UNCAUGHT ERROR (НЕПОЙМАННАЯ ОШИБКА)
// КАК "ЛОВИТЬ" UNCAUGHT ERROR?

// UNCAUGHT ERROR (НЕПОЙМАННАЯ ОШИБКА)
const fnWithError = () => {
  throw new Error("Some error");
};
// С помощью инструкции throw new Error мы можем згенерировать ошибку в JS

// fnWithError(); // Uncaught Error: Some error

// console.log('Continue...')

// Выполнение кода остановится после появления Uncaught Error, до console.log интерпретатор не дойдет

// КАК "ЛОВИТЬ" UNCAUGHT ERROR?
// Решение - специальный синтаксис TRY/CATCH, который состоит с двух блоков кода

try {
  // Выполнение блока кода
  // Сюда помещается часть кода, в которой вероятно возникновение ошибок
} catch (error) {
  // Этот блок выполняется в случае возникновения ошибок в блоке try
  // Внутри этого блока будет доступ к переменной, которая содержит ошибку возникшую в блоке try
}

const newFnWithError = () => {
  throw new Error("Some error");
};

try {
  newFnWithError(); // возникнет ошибка и эта ошибка будет присвоена как значение переменной error в блоке catch
} catch (error) {
  console.error(error); // вывод ошибки в консоль в её стандартном виде. В данном случае ошибка будет поймана, слова Uncaught мы не увидим
  console.log(error.message); // ошибка по сути это объект и у нее есть свойство message. В данном примере message равно "Some error"
}

console.log("Continue..."); // выполнение кода продолжится, интерпретатор дойдет до console.log

// Ошибки можно логировать используя какие-то внешние сервера, чтобы потом позже можно было проанализировать какие ошибки и когда возникали
