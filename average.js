function average(array) {
  if (array instanceof Array) {
    if (array.length !== 0) {
      let sum = 0;
      for (let i = 0; i < array.length; i++) {
        sum += array[i];
      }
      return sum / array.length;
    }
  }
}
