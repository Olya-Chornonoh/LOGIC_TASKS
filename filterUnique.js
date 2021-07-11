function filterUnique(array) {
  let map = new Map();
  for (let i = 0; i < array.length; i++) {
    map.set(array[i].id, array[i]);
  }
  return Array.from(map.values());
}
