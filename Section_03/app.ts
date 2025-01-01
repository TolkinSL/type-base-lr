function getFullName(firstName: string, surName: string): string {
  return `${firstName} - ${surName}`;
}

const getFullNameArrow = (firstName, surName) => {
  if (typeof firstName !== 'string') {
    throw new Error('Ошибка !!!!');
  }
  return `${firstName} -> ${surName}`;
};

console.log(getFullName('Vasia', 'Ivanov'));
console.log(getFullNameArrow(true, false));
