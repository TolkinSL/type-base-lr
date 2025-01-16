//Эмуляция ответа сервера и сопоставление с Enum

enum PaymentStatus {
  Success = 'success',
  Failed = 'failed',
}

interface Payment {
  sum: number;
  from: number;
  to: number;
}

interface SuccessData extends Payment {
  databaseId: number;
}

interface FailedData {
  errorMessage: string;
  errorCode: number;
}

interface ResponseSuccess {
  status: PaymentStatus.Success;
  data: SuccessData;
}

interface ResponseFailed {
  status: PaymentStatus.Failed;
  data: FailedData;
}

// Запрос в виде платежа
const out: Payment = {
  sum: 10000,
  from: 2,
  to: 4,
};

// Ответ
const rawIn1 = `{
    "status": "success",
    "data": {
        "databaseId": 567,
        "sum": 10000,
        "from": 2,
        "to": 4
    }
}`;

const rawIn2 = `{
    "status": "failed",
    "data": {
        "errorMessage": "Недостаточно средств",
        "errorCode": 4
    }
}`;

//Testing data
const in1: ResponseSuccess | ResponseFailed = JSON.parse(rawIn1);
const in2: ResponseSuccess | ResponseFailed = JSON.parse(rawIn2);

console.log(in1.status);
console.log(in2.status);
