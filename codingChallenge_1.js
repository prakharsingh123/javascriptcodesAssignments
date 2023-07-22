const calcAverage =(num1,num2,num3)=>{
  return (num1+num2+num3)/3;
} ;
const avgDolphins =calcAverage(23,44,34);
const avgKoalas=calcAverage(23,34,27);
console.log(avgDolphins,avgKoalas);
const CheckWinner= function(avgDolphin, avgKoalas){
if(avgDolphin > 2*avgKarkolas){
  console.log("avgDolphins is a winner");
}
else{
  console.log("avgKoalas is a winner");
}

};
CheckWinner();
