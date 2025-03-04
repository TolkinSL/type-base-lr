interface User {
  name: string;
  email: string;
  login: string;
}

const user: User = {
  name: 'Vasia',
  email: 'test@test',
  login: 'vasia',
};

interface Admin {
  name: 'string';
  role: number;
}

function logId(id: string | number) {
  if (typeof id === 'string') {
    console.log(id);
  } else {
    console.log(id);
  }
}

//Type Guard
function isString(item: string | number): item is string {
  return typeof item === 'string';
}

//Работа Тайп Гарда
function newLogId(id: string | number) {
  if (isString(id)) {
    console.log(id);
  }
}

//Type Guard Admin
function isAdmin(user: User | Admin): user is Admin {
  return 'role' in user; //ключ роль находится в юзере
}

function setRoleZero(user: User | Admin) {
  if (isAdmin(user)) {
    user.role = 0;
  } else {
    throw new Error('User is not admin');
  }
}

//ТайпГард функция должна возращать тип (это не булеан) : user is Admin
//если булеан поставить то не будет сужения типа

//Альтернативная проверка
function isAdminAlter(user: User | Admin): user is Admin {
  return (user as Admin).role !== undefined; //ключ роль находится в юзере
}
