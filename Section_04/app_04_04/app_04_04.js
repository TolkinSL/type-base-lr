"use strict";
function myFetchT1(url, method) {
    console.log('mf1 ' + method);
}
myFetchT1('zzz', 'POST');
const userTest1 = {
    name: 'Vasia',
    age: 33,
    skills: ['js', 'ts'],
};
const userTest2 = {
    name: 'Ivan',
    age: 34,
    skills: ['jr', 'ts'],
};
const userLoginTest1 = {
    name: 'Tanya',
    age: 32,
    skills: ['jr', 'ts'],
    admin: true,
};
const userLoginTest2 = {
    user: {
        name: 'Tanya',
        age: 32,
        skills: ['jr', 'ts'],
    },
    role: { admin: true },
};
