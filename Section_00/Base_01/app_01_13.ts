let i: number = 0;

while (i < 3) {
  i++;
  console.log(i);
  // i += 1;
}

while (i != 0) {
  i--;
  console.log(i);
}

i = 0;

do {
  console.log(i);
  i += 1;
} while (i < 3);

for (i = 3; i < 3; i += 1) {
  console.log('test');
}

for (let i = 0; i < 3; i += 1) {
  console.log(`i - ${i}`);
}

for (let i = 0; i < 4; i += 1) {
  console.log(`i - ${i}`);
  if (i === 2) break;
}
console.log('Завершение break');

for (let i = 0; i < 10; i += 1) {
  if (i % 2 === 0) continue;
  console.log(`Вывод нечетных чисел ${i}`);
}

//Метка для break | continue

test: for (let i = 0; i < 3; i += 1) {
  for (let y = 0; y < 3; y += 1) {
    console.log(`Метка для break ${i} ${y}`);
    if (y === 1) break test;
    // if (y === 1) continue test;
  }
}
console.log('Завершение цикла');
