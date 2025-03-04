interface User {
  name: string;
}

const testUser = {};

assertUser(testUser);
testUser.name = 'Vasia';

//asserts Функция которая проверяет что объект с полем или кидает ошибку
function assertUser(objUser: unknown): asserts objUser is User {
  // if (typeof objUser === 'object' && !!objUser && 'name' in objUser) {
  //   return true;
  // } else {
  //   return false;
  // }
  if (typeof objUser === 'object' && !!objUser && 'name' in objUser) {
    return;
  }
  throw new Error('objUser is not User');
}

const userName = 'Вася';
