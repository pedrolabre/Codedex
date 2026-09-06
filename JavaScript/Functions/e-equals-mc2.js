function relativityTheory(mass) {
  const c = 299792458;

  let energy = mass * (c ** 2);

  return energy;
}

console.log(relativityTheory(10));