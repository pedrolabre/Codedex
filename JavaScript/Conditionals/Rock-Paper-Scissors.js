let player = 1;
let computer = Math.floor(Math.random() * 3);

if (player === 0) {
  console.log("Player picked:      Rock");
} else if (player === 1) {
  console.log("Player picked:      Paper");
} else {
  console.log("Player picked:      Scissors");
}

if (computer === 0) {
  console.log("Computer picked:    Rock");
} else if (computer === 1) {
  console.log("Computer picked:    Paper");
} else {
  console.log("Computer picked:    Scissors");
}

console.log("");

if (player === computer) {
  console.log("It's a tie!");
} else if (
  (player === 0 && computer === 2) ||
  (player === 1 && computer === 0) ||
  (player === 2 && computer === 1)
) {
  console.log("The player won!");
} else {
  console.log("The computer won!");
}