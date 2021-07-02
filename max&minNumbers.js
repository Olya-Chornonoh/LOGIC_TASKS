function minAndMax(array) {
  let min = Infinity;
let max = -Infinity;
  if (array instanceof Array) {
    for (let i = 0; i <= array.length; i++) {
      if (max < array[i]) {
        max = array[i];
      }
      if (min > array[i]) {
        min = array[i];
      }
    }
    return {
      min,
      max,
      };
  }
}

