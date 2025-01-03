const mySkills: [number, string] = [1, 'DevOps'];

mySkills.push('Test');
console.log(mySkills);

const [id, skillName] = mySkills;
console.log(id + ' ' + skillName);

const arrSKills: [number, string, ...boolean[]] = [1, 'DevOps', true, false];
