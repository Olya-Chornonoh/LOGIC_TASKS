function checkIfSorted(array) {
  if (!(array instanceof Array)) {
    return;
  }
  for (let i = 0; i < array.length; i++) {
    if (typeof array[i] !== "number") {
      return;
    }
    if (array[i] > array[i + 1]) {
      return false;
    }
  }
  return true;
}
