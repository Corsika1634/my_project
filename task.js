
const args = [null, null, 1, undefined, 0, 'null', NaN, ''];
const symb = ',';

function applyCustomJoin(arr, sep = '') {
  let result = '';

  for (let i = 0; i < arr.length - 1; i++) {
        result += arr[i];
        result += sep;
  }
  result += arr[arr.length - 1];
  console.log(result);
  return result;

}

// And again

applyCustomJoin(args, symb);