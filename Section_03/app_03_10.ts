enum StatusCode {
  Success = 1,
  Work = 2,
  Fail = 3,
}

const serverResponse = {
  message: 'Транзакция проведена',
  code: 1,
};

const myFunc = (status: StatusCode) => {
  console.log(status);
};

myFunc(1);

if (serverResponse.code === StatusCode.Success) {
  console.log('Операция прошла успешно');
}
