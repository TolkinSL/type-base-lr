let numA: unknown = 3;
//let stringA: string = numA; //Type 'unknown' is not assignable to type 'string'

let numB: any = 3;
let stringB: string = numB;

function getNumber(myNumber: unknown) {
  if (typeof myNumber === 'number') {
    return myNumber * 2;
  } else if (typeof myNumber === 'string') {
    return 'String - ' + myNumber;
  } else {
    return myNumber;
  }
}

console.log(getNumber(2));
console.log(getNumber('Privet'));
console.log(getNumber(true));

async function getData() {
  try {
    await fetch('');
  } catch (error) {
    //console.log(error.message);
    if (error instanceof Error) {
      console.log(error.message);
    }
  }
}

async function getData2() {
  try {
    await fetch('');
  } catch (error) {
    const e = error as Error;
    console.log(e.message); //Альтернативное решение
  }
}

type ArrayData = string[] | number[] | boolean[];
type ItemData = string | number | boolean;
function myPush(arrData: ArrayData, itemData: ItemData) {
  if (
    Array.isArray(arrData) &&
    arrData.every((item) => typeof item === typeof itemData)
  ) {
    arrData[arrData.length] = itemData;
  } else {
    throw new Error('Несовместимые типы данных');
  }
}

const myArr1: string[] = ['JS', 'TS'];
myPush(myArr1, 'Azz');
console.log(myArr1);
myPush(myArr1, 1);

const testData1: unknown | string = 'Test';
