"use strict";
const user = {
    name: 'Vasia',
    age: 33,
    skills: ['JS', 'TS'],
    roleID: 1,
};
let userAdmin = {
    name: 'Vasia',
    age: 33,
    skills: ['JS', 'TS'],
    isAdmin: true,
    log(id) {
        return 'Role Id ' + id;
    },
};
const userData1 = {
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
console.log(userData1['2']);
