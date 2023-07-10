
//Написать программу, которая через prompt считывает число и выводит в консоль число равное 10% от введенного числа
const a = prompt("150:");
const b = parseFloat(a);
const result = a * 0.1;
console.log("10% от 150:", result);


// Написать программу, которая получает два числа и выводит наименьшее
const oneNumber = prompt("Введите первое число:");
const number1 = parseFloat(oneNumber);
const secondNumber = prompt("Введите второе число:");
const number2 = parseFloat(secondNumber);
const minNumber = Math.min(number1, number2);
console.log("Наименьшее число:", minNumber);



//Написать программу, которая считывает через prompt число и выводит одно из следующих сообщений: ‘Число меньше 100’, ‘Число больше 100’ или ‘Число равно 100’

const numberInput = prompt("Введите число:");
const number = parseFloat(numberInput);

if (number < 100) {
  console.log("Число меньше 100");
} else if (number > 100) {
  console.log("Число больше 100");
} else {
  console.log("Число равно 100");
}

// Написать программу, которая запрашивает у пользователя его имя и возраст (в годах) и выводит в консоль сообщение ‘Hello, <name>’, если пользователь совершеннолетний, или ‘Hi, <name>’, если пользователь несовершеннолетни

const myName = "Olga"
const herName = "Vassia"
const myAge = "45"

const ageNumber = parseInt (myAge);

if (ageNumber >= 18) {
  console.log("Hello, " + myName);
} else {
  console.log("Hi, " + herName);
}