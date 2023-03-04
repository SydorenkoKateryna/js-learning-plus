// ДЕСТРУКТУРИЗАЦИЯ - Destructuring assignment

// ДЕСТРУКТУРИЗАЦИЯ ОБЪЕКТОВ
// ДЕСТРУКТУРИЗАЦИЯ МАССИВОВ
// ДЕСТРУКТУРИЗАЦИЯ ПАРАМЕТРОВ ФУНКЦИИ

// ДЕСТРУКТУРИЗАЦИЯ ОБЪЕКТОВ

// Функция деструктуризации объекта позволяет объявить новые переменные и присвоить значения на основе значений свойств объекта

// С правой стороны - имя переменной в которой содержится объект
// С левой стороны - имена свойств объекта = название новых переменных, которые будут автоматически объявлены

const userProfile = {
  name: "Kate",
  commentsQty: 21,
  hasSignedAgreement: false,
};

const { name, commentsQty } = userProfile;
const { hasSignedAgreement: signedAgreement } = userProfile;

console.log(name); // Kate
console.log(commentsQty); // 21
console.log(signedAgreement); // false

// ДЕСТРУКТУРИЗАЦИЯ МАССИВОВ

// Функция деструктуризации массива позволяет объявить новые переменные и присвоить значения на основе элементов массива

// В отличии от объектов, важно учитывать порядок следования элементов в массиве при выполнении деструктуризации массивов

const fruits = ["Apple", "Banana"];

const [fruitOne, fruitTwo] = fruits;

console.log(fruits); // (2) ['Apple', 'Banana']
console.log(fruitOne); // Apple
console.log(fruitTwo); // Banana

// ДЕСТРУКТУРИЗАЦИЯ ПАРАМЕТРОВ ФУНКЦИИ

// ({ name, commentsQty}) - это и есть деструктуризация параметров функции
//  То есть мы вызываем функцию и передаем ей объект, этот объект приходит в функцию по ссылке и в блоке параметров мы можем выполнить деструктуризацию свойст из этого объекта, иными словами мы говорим, что мы хотим взять свойства с соответствующими именами и значения, которые будут переданы при вызове функции, создать новые переменные с соответствующими именами и присвоить им соответствующие значения

// Вместо этого можно передать один аргумент в блок параметров и выполнить деструктуризацию всередине блока функции, но это будет лишняя строка кода

const newUserProfile = {
    name: "Kate",
    commentsQty: 21,
    hasSignedAgreement: false,
  };

  const userInfo = ({ name, commentsQty}) => {
    if (!commentsQty) {
        return `User ${name} has no comments`
    }
    return `User ${name} has ${commentsQty} comments`
  }

  console.log(userInfo(newUserProfile)); // User Kate has 21 comments
