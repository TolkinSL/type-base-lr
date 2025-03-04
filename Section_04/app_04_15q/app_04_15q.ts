interface IPayment {
  sum: number;
  from: number;
  to: number;
}

enum PaymentStatus {
  Success = 'success',
  Failed = 'failed',
}

interface IPaymentRequest extends IPayment {}

interface IDataSuccess extends IPayment {
  databaseId: number;
}

interface IDataFailed {
  errorMessage: string;
  errorCode: number;
}

interface IResponseSuccess {
  status: PaymentStatus.Success;
  data: IDataSuccess;
}

interface IResponseFailed {
  status: PaymentStatus.Failed;
  data: IDataFailed;
}

type testFunc = (res: IResponseSuccess | IResponseFailed) => number;

//typeguard function
function isSuccessNum(
  resNum: IResponseSuccess | IResponseFailed
): resNum is IResponseSuccess {
  return 'databaseId' in resNum;
}

const resData: testFunc = (res) => {
  if (isSuccessNum(res)) {
    return res.data.databaseId;
  } else {
    return res.data.errorCode;
  }
};

type ResType = IResponseSuccess | IResponseFailed;

//typegard Lar
function isSuccessLar(resNum: ResType): resNum is IResponseSuccess {
  return resNum.status === PaymentStatus.Success;
}

function larResData(res: ResType): number {
  if (isSuccessLar(res)) {
    return res.data.databaseId;
  } else {
    return res.data.errorCode;
  }
}
