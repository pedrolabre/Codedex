const departTripTicket = {
  name: "Pedro Roberto Ribeiro Bandeira Labre",
  from: "Palmas",
  to: "Lisbon",
  businessClass: false,
  leaveTime: 6,
  arriveTime: 20,
  upgrade() {
    if (this.businessClass === false) {
      this.businessClass = true;
      console.log("Ticket upgraded to business class!");
    } else {
      console.log("Your ticket is already business class!");
    }
  },
  flightTime() {
    let time = this.arriveTime - this.leaveTime;
    console.log("Travel time is " + time + " hours.");
  }
};

const returnTripTicket = {
  name: "Pedro Roberto Ribeiro Bandeira Labre",
  from: "Lisbon",
  to: "Palmas",
  businessClass: true,
  leaveTime: 8,
  arriveTime: 23, 
  upgrade() {
    if (this.businessClass === false) {
      this.businessClass = true;
      console.log("Ticket upgraded to business class!");
    } else {
      console.log("Your ticket is already business class!");
    }
  },
  flightTime() {
    let time = this.arriveTime - this.leaveTime;
    console.log("Travel time is " + time + " hours.");
  }
};

departTripTicket.upgrade();
returnTripTicket.upgrade();

departTripTicket.flightTime();
returnTripTicket.flightTime();

console.log(departTripTicket);
console.log(returnTripTicket);