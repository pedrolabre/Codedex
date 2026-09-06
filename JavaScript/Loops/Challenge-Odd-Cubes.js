const limit = 10;
let total = 0;
let conta = [];

for (let i = 1; i <= limit; i++) {
  if (i % 2 !== 0) {
    let cubed = i * i * i; 
    total = total + cubed;

    conta.push(cubed);
  }
}

console.log(conta.join(" + ") + " = ");console.log(total);