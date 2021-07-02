let minNumber = Infinity;
let maxNumber = -Infinity;
function maxAndMinNumbers(array) {
  if (array instanceof Array) {
    for (let i = 0; i <= array.length; i++) {
      if (maxNumber < array[i]) {
        maxNumber = array[i];
      }
    }
    for (let i = 0; i <= array.length; i++) {
      if (minNumber > array[i]) {
        minNumber = array[i];
      }
      console.log(`Maximum number is ${maxNumber}`);
      console.log(`Minimum number is ${minNumber}`);
    }
  }
  else {
    console.log("It isn't array");
  }
}
