function factorial(n) {
  if ((n < 0) || (typeof n !== 'number')) {
    return;
  }
  if ((n === 0) || (n === 1)) {
    return 1;
  }
  else {
    return (n * factorial(n - 1));
  }
}
