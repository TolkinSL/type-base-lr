function displayID(id: string): void {
  console.log(id);
}

//Return undefined
function multiply(a: number, b?: number) {
  if (!b) {
    return a * a;
  }

  //return a * b;
}

const testUndef = multiply(2, 1);
console.log(testUndef);

type voidFunc = () => void;

const calc1: voidFunc = () => {};

const calc2: voidFunc = () => {
  return true;
};

const testCalc1 = calc1();
console.log(testCalc1);
const testCalc2 = calc2();
console.log(testCalc2);

const skills = ['JS', 'TS'];
const user09: { s: string[] } = {
  s: [],
};

skills.forEach((item) => user09.s.push(item));
console.log(user09);
