interface User {
  login: string;
  password?: string;
}

const user: User = {
  login: 'zzz@z.ru',
};

function myMultiply(num1: number, num2?: number): number {
  if (!num2) {
    return num1 * num1;
  }
  return num1 * num2;
}

function myMultiply2(num1: number, num2: number = 2): number {
  return num1 * num2;
}

console.log(myMultiply2(2));
console.log(myMultiply2(2, 3));

interface UserInfo {
  login: string;
  userData1?: {
    isAdmin: boolean;
  };
  userData2?: {
    isAdmin: boolean;
  };
}

function myUserData(user: UserInfo) {
  //проверка на undefined - сужение типов
  const res1 = user.userData1?.isAdmin;
  const res2 = user.userData2 ? user.userData2.isAdmin : undefined;
}

function testData(user?: string) {
  const res1 = user && 'empty user';
}
