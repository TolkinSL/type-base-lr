enum RequestMethod {
  GET = 'GET',
  POST = 'POST',
}

function myFetch1(url: string, method: RequestMethod) {
  console.log('mf1 ' + method);
}

myFetch1('zzz', RequestMethod.POST);

function myFetch2(url: string, method: 'GET' | 'POST') {
  console.log('mf2 ' + method);
}

myFetch2('zzz', 'GET');

function myFetch3(url: string, method: 'GET' | 'POST') {
  console.log('mf2 ' + method);
}

let myMethod = 'GET';
myFetch3('zzz', myMethod as RequestMethod);
