"use strict";
var StatusCode;
(function (StatusCode) {
    StatusCode[StatusCode["Success"] = 1] = "Success";
    StatusCode[StatusCode["Work"] = 2] = "Work";
    StatusCode[StatusCode["Fail"] = 3] = "Fail";
})(StatusCode || (StatusCode = {}));
const serverResponse = {
    message: 'Транзакция проведена',
    code: 1,
};
const myFunc = (status) => {
    console.log(status);
};
myFunc(1);
if (serverResponse.code === StatusCode.Success) {
    console.log('Операция прошла успешно');
}
