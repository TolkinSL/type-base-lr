let myNumber: number = 5;

if (myNumber > 5) {
  console.log('Число больше');
} else if (myNumber < 5) {
  console.log('Число меньше');
} else {
  console.log('Число равно 5');
}

let myTest: string = myNumber >= 5 ? 'Число больше' : 'Число меньше';
console.log(myTest);
