interface UserWork {
  name: string;
}

interface UserWork {
  age: number;
}

//Объединение в редких случаях для дополнения к примеру базового интерфейса
const userTestData1: UserWork = {
  name: 'Vasia',
  age: 33,
};

type IdData1 = string | number; //Только в типах можно примитивные типы

interface IdData2 {
  id: string | number;
} //Больше для объектов подходит
