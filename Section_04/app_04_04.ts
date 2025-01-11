type TRequestMethod = 'GET' | 'POST';

function myFetchT1(url: string, method: TRequestMethod) {
  console.log('mf1 ' + method);
}

myFetchT1('zzz', 'POST');

type UserTypes = {
  name: string;
  age: number;
  skills: string[];
};

const userTest1: {
  name: string;
  age: number;
  skills: string[];
} = {
  name: 'Vasia',
  age: 33,
  skills: ['js', 'ts'],
};

const userTest2: UserTypes = {
  name: 'Ivan',
  age: 34,
  skills: ['jr', 'ts'],
};

type UserRole = {
  admin: boolean;
};

type UserLoginType = UserTypes & UserRole;

const userLoginTest1: UserLoginType = {
  name: 'Tanya',
  age: 32,
  skills: ['jr', 'ts'],
  admin: true,
};

type UserLoginType2 = {
  user: UserTypes;
  role: UserRole;
};

const userLoginTest2: UserLoginType2 = {
  user: {
    name: 'Tanya',
    age: 32,
    skills: ['jr', 'ts'],
  },
  role: { admin: true },
};
