function syncPerformance(callback) {
  return function () {
    let t0 = performance.now();
    let result = callback.apply(this, arguments);
    let t1 = performance.now();
    console.log(`Call to ${callback.name} took: ${t1 - t0} ms`);
    return result;
  }
}
