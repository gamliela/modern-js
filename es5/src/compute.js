function compute(s) {
  const args = s.split('+');
  let sum = 0;
  for (let arg of args)
    sum += parseInt(arg);
  return sum;
}
