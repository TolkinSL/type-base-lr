type ErrorFunc = (errorString: string) => never;
type ErrorFunc2 = (errorString: string) => void;
function generateError(message: string): never {
  throw new Error(message);
}

//generateError('Error Message');

type ActionStatus = 'refund' | 'checkout';
//type ActionStatus = 'refund' | 'checkout' | 'reject';

function paymentProcess(action: ActionStatus) {
  switch (action) {
    case 'refund':
      console.log('refund');
      break;
    case 'checkout':
      console.log('checkout');
      break;
    // case 'reject':
    //   //...
    //   break;
    default:
      const _test: never = action;
      throw new Error('Нету такой операции');
  }
}

paymentProcess('refund');

function isString(testString: string | number): boolean {
  if (typeof testString === 'string') {
    return true;
  } else if (typeof testString === 'number') {
    return false;
  }
  generateError('Передан не правильный тип данных с сервера');
}
