let a: number | null = null;
let b: number = 5;

let result: number = a ?? b;
console.log(result);

a = 2;
result = a ?? b;
console.log(result);

a = null;
result = a !== null && a !== undefined ? a : b;
console.log(result);

const name1: string | undefined = undefined;
console.log(typeof name1);
const name2: string | undefined = undefined;
console.log(name1 ?? name2 ?? 'Anonym');
