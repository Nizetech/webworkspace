 let names =[
     "Nonso",
     "Tolu",
     "Sarah",
     "Nonso",
     "destiny",
     "Julius",
     "Fortune",
 ]

//  for (let i = 0; i < names.length; i++){
//         console.log( i, names[i]);
//     }

    names.forEach(function(name){
        console.log(name);
    })
  

const numbers = [45, 4, 9, 16, 25];
let sum = numbers.reduce(myFunction);

document.getElementById("demo").innerHTML = "The sum is " + sum;

