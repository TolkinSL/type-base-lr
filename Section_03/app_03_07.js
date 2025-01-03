"use strict";
const skills = ['Js', 'Ts', 'DevOps', 'Php'];
for (const skill of skills) {
    console.log(skill);
}
console.log('Array method');
const newSkills1 = skills.filter((item) => item !== 'Ts');
console.log(newSkills1);
const newSkills2 = skills.map((item) => item + '!');
console.log(newSkills2);
