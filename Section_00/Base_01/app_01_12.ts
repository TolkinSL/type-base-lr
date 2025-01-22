let a: number | null = null;
let b: number = 5;

let result: number = a ?? b;
console.log('1- ' + result);

a = 2;
result = a ?? b;
console.log('2- ' + result);

a = null;
result = a !== null && a !== undefined ? a : b;
console.log('3- ' + result);

const name1: string | undefined = undefined;
console.log(typeof name1);
const name2: string | undefined = undefined;
console.log(name1 ?? name2 ?? 'Anonym');

let height: number = 0;
console.log('4- ' + (height || 32));
console.log('5- ' + (height ?? 32));
