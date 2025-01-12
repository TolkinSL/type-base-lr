interface User {
  name: string;
  age: number;
  skills: string[];
}

interface UserRoleNew extends User {
  roleID: number;
}

interface SimpleAdminRole {
  isAdmin: boolean;
  log: (id: number) => string;
}

const user: UserRoleNew = {
  name: 'Vasia',
  age: 33,
  skills: ['JS', 'TS'],
  roleID: 1,
};

interface AdminRoleNew extends User, SimpleAdminRole {}

let userAdmin: AdminRoleNew = {
  name: 'Vasia',
  age: 33,
  skills: ['JS', 'TS'],
  isAdmin: true,
  log(id) {
    return this.name + ' - ' + id;
  },
};

interface UserDic1 {
  [index: number]: User;
}

type UserDic2 = {
  [index: number]: string;
};

const userData1: UserDic1 = {
  1: {
    name: 'Vasia',
    age: 33,
    skills: ['JS', 'TS'],
  },
  2: {
    name: 'Tasia',
    age: 33,
    skills: ['JS', 'TS'],
  },
  3: {
    name: 'Sasia',
    age: 33,
    skills: ['JS', 'TS'],
  },
};

console.log(userData1[2]);
console.log(userAdmin.log(2));

const userData2: UserDic2 = {
  1: 'test string',
};
