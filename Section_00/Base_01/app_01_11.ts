let a: number | undefined = undefined;
let b: number | undefined | null = 5;
let c: number | null = 2;

console.log('1- ' + (a || b || c));

b = null;
console.log('2- ' + (a || b || c));

c = null;
console.log('3- ' + (a || b || c));
console.log('4- ' + (a || b || c || 'Значения не определены'));

let a1 = 2;
let b1 = 5;
console.log('5a- ' + a1 && b1);
const result1 = a1 && b1;
console.log('5- ' + result1);
console.log('6- ' + (a && b));

let resultA = true && 'hello'; // result1 будет равен "hello"
let resultB = false && 'world'; // result2 будет равен false

if (resultA && resultB) {
  //...
} else {
  console.log(false);
}

//И «&&» находит первое ложное значение
//result = value1 && value2 && value3;
//(1 && 2 && null && 3 ); // null

//ИЛИ "||" находит первое истинное значение
//result = value1 || value2 || value3;
//( null || 0 || 1 ); // 1 (первое истинное значение)

//Приоритет оператора && больше, чем у ||
