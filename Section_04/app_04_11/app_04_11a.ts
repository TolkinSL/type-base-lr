type LogFunc = (message: string, index: number) => void;

const myLog: LogFunc = (item, testIndex) => {
  console.log(`${testIndex} Message - ${item}`);
};

function testArray(arr: string[], myCallback: LogFunc) {
  arr.forEach((item, index) => myCallback(item, index));
}

testArray(['a', 'b', 'c'], myLog);
