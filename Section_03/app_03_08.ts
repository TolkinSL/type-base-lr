const mySkills: [number, string] = [1, 'DevOps'];

mySkills.push('Test');
console.log(mySkills);

const [id, skillName] = mySkills;
console.log(id + ' ' + skillName);

const arrSkills: [number, string, ...boolean[]] = [1, 'DevOps', true, false];

const readonlyTuple: readonly [number, string] = [1, 'Php'];
// readonlyTuple[0] = 2;
// readonlyTuple.push('Azz');

const readonlyArr1: ReadonlyArray<string> = ['1a', '2b'];
