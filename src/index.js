module.exports = function solveEquation(equation) {
  var arr = equation.split(' ');
  var a = arr[0];
  var b = parseInt(arr[3].toString() + arr[4].toString());
  var c = parseInt(arr[7].toString() + arr[8].toString());

  var x1 = (-1 * b + Math.sqrt(Math.pow(b, 2) - 4 * a * c)) / (2 * a);
  var x2 = (-1 * b - Math.sqrt(Math.pow(b, 2) - 4 * a * c)) / (2 * a);

  return [Math.round(x1), Math.round(x2)].sort((a, b) => a - b);
}