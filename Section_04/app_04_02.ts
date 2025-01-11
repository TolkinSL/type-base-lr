const myArr = ['test', 2];

function logId(id: string | number | boolean) {
  console.log(id);

  if (typeof id === 'string') {
    console.log('Str - ' + id.toLowerCase());
  } else if (typeof id === 'number') {
    console.log('Num - ' + id);
  } else {
    console.log('Bool - ' + id);
  }

  if (typeof id === 'number') {
    console.log(id + 1);
  }
}

logId(1);
logId('Test');

function logError(myError: string | string[]) {
  if (Array.isArray(myError)) {
    console.log('Array - ' + myError);
  } else {
    console.log('Single - ' + myError);
  }
}

logError(['Azz', 'Zaz']);
logError('Azz');

function logObject(myObj: { a: number } | { b: number }) {
  if ('a' in myObj) {
    console.log('a - ' + myObj);
  } else {
    console.log('b - ' + myObj);
  }
}
