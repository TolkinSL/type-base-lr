const result: boolean = 3 > 4;
console.log(result);

const resultTextCompare: boolean = 'Cats' > 'Catw';
console.log(resultTextCompare);

// const resultNumber: boolean = ('01' == 1);

const resultUndef1: boolean = undefined === null;
console.log(resultUndef1);

const resultUndef2: boolean = undefined == null;
console.log(resultUndef2);

// const resultUndef3: boolean = undefined > null;
// console.log(resultUndef3);

const resultUndef3: boolean = undefined == 'undefined';
console.log(resultUndef3);
