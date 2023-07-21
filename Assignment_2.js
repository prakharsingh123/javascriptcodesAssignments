let markMass= 45;
let johnMass = 58;
let mark_H= 170;
let john_H= 120;
let markBMI= markMass/(mark_H**2);
let johnBMI= johnMass/(john_H**2);
let isgreater= markBMI<johnBMI;
if(markBMI>johnBMI){
  console.log(`Mark's BMI ${markBMI} is higher than John's BMI ${johnBMI}`);
}
else{
  console.log(`John's BMI ${johnBMI} is higher than Mark's BMI ${markBMI}`);
}
