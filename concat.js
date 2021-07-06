let concat = function () {
  let result = '';
  return function (string) {
    if (string) {
      result += string;
      return;
    }
    return result;
  };
}();
