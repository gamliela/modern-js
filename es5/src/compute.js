function compute(s) {
  const args = s.split('+');
  let sum = 0;
  for (arg of args)
    sum += parseInt(arg);
  return sum;
}
