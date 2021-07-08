function mirror(string) {
  if (typeof string !== 'string') {
    return;
  }
  let mirrorString ="";
  for (let i = string.length - 1; i >= 0; i--) {
    mirrorString += string[i];
    }
  return mirrorString;
}
