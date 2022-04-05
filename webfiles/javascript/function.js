// function tonicSufars() {
// console.log('DO');
// console.log('RE');
// console.log('MI');
// console.log('Fa');
// console.log('Sol');
// console.log('lar');
// console.log('ti');
// console.log('DO');
// }
// tonicSufars();


// alert('DO');

// function greet(person){
//     console.log(`Hello ${person}`);
// } 
// greet('Tammy');  

// function hello(firstName, lastName){
//     console.log(`Hello ${firstName} ${lastName[0]}`);
// }
// hello('Tammy', 'Sufars');

// function repeat(str, num){
//     let result = '';
//     for(let i = 0; i <num; i++){
//         result += str;
//     }
//     console.log(result);
// }
// repeat('Tammy ', 3);

// Return Keyword //

function add(x, y){
    let sum = x + y;
    return sum;
}
add(1, 2);

 // OR //
 function add(x, y){
     if (typeof x !== 'number' || typeof y !== 'number'){
         return 'ERROR';
     }
    return x + y; 
}
add(1, 2);

function isWeatherLong(temperature){
if( temperature >= 75){
    return 'Wear shorts';
} else{
    return 'Wear long pants';
}
}
isWeatherLong(80);

function LastElement([ ]){
    if( array.length === 0){
        return null;
    }else{
        return array[array.length];
    }
}
LastElement([1, 2, 3, 4, 5]);