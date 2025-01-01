import * as infoData from './test_03_06.json';

function getFullName(userData: {
  firstName: string;
  surName: string;
  age: number;
}): string {
  return `${userData.firstName} ${userData.surName}: ${userData.age}`;
}

const myUser = {
  firstName: 'Vasia',
  surName: 'Ivanov',
  city: 'Moscow',
  age: 37,
  skills: {
    dev: true,
  },
};

const myData: {
  officeId: number;
  isOpened: boolean;
  contacts: {
    phone: string;
    email: string;
    address: {
      city: string;
    };
  };
} = infoData;

console.log(getFullName(myUser));
console.log(myData.contacts.email);
