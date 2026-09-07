const planVacation = (destinationOne, destinationTwo, ...otherDestinations) => {
  return [destinationOne, destinationTwo, ...otherDestinations];
};

const myTrip = planVacation("Paraíso do Tocantins", "Lisboa", "Seul", "Paris");

console.log(myTrip);