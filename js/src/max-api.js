import * as maxAPI from 'max-api';

export function multiply(a, b) {
  const result = a * b;
  maxAPI.outlet(result);
  return result;
}

export function bang() {
  maxAPI.post('Received bang!');
  maxAPI.outletBang();
}

maxAPI.addHandler('multiply', multiply);
maxAPI.addHandler(maxAPI.MESSAGE_TYPES.BANG, bang);