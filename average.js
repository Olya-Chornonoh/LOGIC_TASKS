function average(array) {
  if (!(array instanceof Array)) {
    return;
  }
  if (array.length !== 0) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
      if (typeof array[i] !== "number") {
        return;
      }
      sum += array[i];
    }
    return sum / array.length;
  }
}
