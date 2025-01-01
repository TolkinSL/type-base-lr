"use strict";
function getFullName(userData) {
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
console.log(getFullName(myUser));
