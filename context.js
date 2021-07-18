function calc() {
  return this.a + this.b;
}

calc.bind({ a: 2, b: 5 }).call();
