let count = 0;
const targetNumber = Math.floor(Math.random() * 100);

console.log("the choosen number is " + targetNumber);

while (count < 10) {
  let drawNumber = Math.floor(Math.random() * 100);

  if (drawNumber === targetNumber) {
    count++;
    console.log("Match");
  } else {
    console.log("No Match");
  }
}

console.log("The number " + targetNumber + " was found 10 times.");