var inputs = process.argv.slice(2);
var result = inputs
  .map(line => line.charAt(0))
  .reduce((buf, el) => buf + el);
console.log(result);
