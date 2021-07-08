function additionOccurrencesSequence(n) {
  if ((typeof n !== 'number')) {
    return;
  }
  if (n === 0) {
    return 0;
  }
  else if (n === 1) {
    return 1;
  }
  else if (n > 0) {
    return (n + additionOccurrencesSequence(n - 1))
  }
  else {
    return (n + additionOccurrencesSequence(n + 1))
  }
}
