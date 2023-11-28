

//1.Loop through all numbers from 1 to 100.
for(let i=1;i<=100;i++){
   
    if((i % 3 === 0) && (i % 5 === 0)){
        console.log("FIZZBUZZ");
    }else if( i % 3 === 0){
        console.log("FIZZ");
    }else if (i % 5 === 0){
        console.log("BUZZ");
    }else
    console.log(i);
} 


// 2.Prime Time
for (let i = 1; i < 200; i++) {
    let isPrime = true;
    let n = 84;
   for (let j = 2; j < i; j++) {
 
     if (i % j === 0) {
       // if this is true, it is NOT a prime number
       isPrime = false;
       break;
      }
   }
 
   if (isPrime === true && i > n) {
      console.log(i);
      break;
   }
  }

//3.Feeling Loopy

let data="ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26";

let ID ="";
let Name="";
let Occupation="";
let Age="";
let counter=1;

for(i=0;i<data.length;i++){
//console.log(data[i]);
if(data[i]=="\n"){
    counter++;
}
if(counter==1){
    ID += data[i];
}else if(counter==2){
    Name += data[i];
}else if(counter==3){
    Occupation += data[i];
}else{
    Age += data[i]
}
}
console.log(ID,Name,Occupation,Age);