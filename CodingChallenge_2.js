const value= function (bill) {
return bill>50 && bill<300 ? bill*0.15 : bill*0.20;
}

const bills=[123,23,44];
const tips=[value(bills[0]),value(bills[1]),value(bills[2])];
console.log(bills,tips);
