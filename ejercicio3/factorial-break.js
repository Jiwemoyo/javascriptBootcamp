let n = 10;
let factorial = 1;
let i = 1;

while (true) {
  factorial *= i;

  if (i === n) {
    console.log(`El factorial de ${n} es ${factorial}`);
    break;
  }

  i++;
}