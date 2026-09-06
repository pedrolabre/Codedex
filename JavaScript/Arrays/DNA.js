const dnaPieces = ["A", "C", "G", "T"];
let myDNA = [];

for (let i = 0; i < 24; i++) {

  let index1 = Math.floor(Math.random() * 4);
  let index2 = Math.floor(Math.random() * 4);
  let index3 = Math.floor(Math.random() * 4);

  let sequence = dnaPieces[index1] + dnaPieces[index2] + dnaPieces[index3];

  myDNA.push(sequence);
}

console.log(myDNA);