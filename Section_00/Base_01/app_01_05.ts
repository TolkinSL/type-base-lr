let message: string = 'Hello';
let n: number = 5;

let userMessage: string = `${message} Vasia`;
console.log(userMessage);

const isAdmin: boolean = true;
const isGreater: boolean = 3 > 4;

let age: number | null = null;

function calcYear(age: number | null) {
  console.log(typeof age);
  if (age === null) {
    console.log('Значение не определено');
  } else {
    console.log(`${2024 - age} год рождения`);
  }
}

calcYear(age);
age = 23;
calcYear(age);

let newAge: number | null | undefined;
console.log(newAge);

//Обычно null используется для присвоения переменной «пустого» или «неизвестного» значения, а undefined – для проверок, была ли переменная назначена.

console.log(typeof 5);
console.log(typeof Symbol('id'));
