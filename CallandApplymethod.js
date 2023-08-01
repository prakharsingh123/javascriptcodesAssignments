const indian={
  airlines : 'indianAirlines',
  iocode:'LH',
  booking:[],

  book(flightnum,name){
      console.log(`${name} booked a seat on ${this.airlines} ${this.iocode} ${flightnum} `);
  },
 };
indian.book(233,'john');

const book= indian.book;
const swiss={
  airlines:'swiss',
  iocode: 'ew',
  book:[]
}
//call method
book.call(swiss,23,'johns')
//apply method
const flightdata= [234,'ram']
book.apply(swiss,flightdata)
// we do not generally use apply method
book.call(swiss,...flightdata);

/*Output_________________________________________________________
john booked a seat on indianAirlines LH 233 
johns booked a seat on swiss ew 23 
ram booked a seat on swiss ew 234 
ram booked a seat on swiss ew 234 
