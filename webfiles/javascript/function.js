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

// function add(x, y){
//     let sum = x + y;
//     return sum;
// }
// add(1, 2);

//  // OR //
//  function add(x, y){
//      if (typeof x !== 'number' || typeof y !== 'number'){
//          return 'ERROR';
//      }
//     return x + y; 
// }
// add(1, 2);

// function isWeatherLong(temperature){
// if( temperature >= 75){
//     return 'Wear shorts';
// } else{
//     return 'Wear long pants';
// }
// }
// isWeatherLong(80);

// function LastElement([ ]){
//     if( array.length === 0){
//         return null;
//     }else{
//         return array[array.length];
//     }
// }
// LastElement([1, 2, 3, 4, 5]);

// Function Scope

let totalEggs = 0;
function collectEggs(){
        totalEggs = 9;
    }
    console.log(totalEggs);
    collectEggs();
    console.log(totalEggs);

 let bird = 'Scarlet Marchat';
 function birdWatch() {
     // let = 'Great Blue Haron';
     console.log(bird);
 }   
 birdWatch();

 //  Block Scoping //

 for (let i = 0; i < 5; i++){
 let msg =' am on fire';
 console.log(msg)
 // will work
 }
//  console.log(msg);
 // wont work __ outside the block
//  console.log(i);

  //  lexical scope //

  function bankRobbery(){
      const heroes =[
          'Batman',
            'Superman',
            'WonderWoman',
            'Flash',
      ]
      function cryForHelp(){
          function inner(){
              for (hero of heroes){
                  console.log(` Please Help ${hero.toUpperCase()}`);
              }
          }
          inner();
      }
      cryForHelp();
  }
  bankRobbery();

  // function Expression //

//   function add(x, y){
//       return x + y;
//   }
//   add(4,5);

    const add = function(x, y){
        return x + y;
    } 
    add(4,9);

    // HighOrder Function //

    function callTwice(func){
        func();
        func();
        func();
        func();
    }
 function callTenTimes(func){
     for(let i = 0; i < 10; i++){
         func();
     }
 }
 callTenTimes(rollDie);

    function rollDie(){
        const roll = Math.floor(Math.random() * 6) + 1;
        console.log(`You rolled a ${roll}`);
    }
  callTwice(rollDie);

//     function square(num){
//      const result = num * num;
//         console.log(result);
//   }
//     square(5);

    // function root(num){
    //     const result = Math.pow(num,2);
    //        console.log(result);
    //  }
    //    root(5);

    // Returning Function //

    // function makeMysteryFunc() {
    //     const rand = Math.random();
    //     if (rand > 0.5){
    //         return function(){
    //             console.log('CONGRATS AM A GOOD FUNCTION!');
    //             console.log('YOU WIN A MILLION DOLLARS!');
    //             console.log(Math.floor(rand *2)+1);
    //         }
    //     }else {
    //         return function(){
    //             alert('YOU LOSE A MILLION DOLLARS!');
    //             alert('YOU LOSE A MILLION DOLLARS!');

    //         }
    //     }
    // }
    // mystery = makeMysteryFunc();
    // mystery();

    // function isBetween(num){
    //     return num >=50 && num <=100 
    // }
    // isBetween(40);

    function between(min, max){
        return function(num){
        return num >=min && max <= max; 

        }
    }
    
    let isChild = between(0, 18);
    // let isAldult = between(18, 65);
    // let isSenior = between(65, 100);

    // isChild(25);
    // isAldult(25);

    const myMath = {
        PI: 3.142,
        square: function(num){
            return num * num;
        },
        cube: function (num){
            return num ** 3;
        }
    }
    console.log(myMath.square(5));
    console.log(myMath.cube(5));

    //**** OR ****/
    const myMath2 = {
        PI: 3.142,
        square(num){
            return num * num;
        },
        cube (num){
            return num ** 3;
        }
    }
    console.log(myMath.square(5));
    console.log(myMath.cube(5));

    // this--Keyword //

const Cat = {
    name: 'Fluffy',
    color: 'grey',
    breed: 'scorttish fold',
    moew(){
        console.log(`${this.name} says meow`);
        console.log(`${this.name} is a ${this.color} cat`);
        
    }
};
Cat.moew();

const Square = {
    area(side){
        return side * side;
    },
    perimeter(side){
        return side * 4;
    }
}
console.log(Square.area(10));
console.log(Square.perimeter(10));

// try/Catch method //

try {
    hello.toUpperCase();
} catch {
    console.log('ERROR!!!');
}
console.log('Program continues...');

function yell(msg){
    try{
        console.log(msg.toUpperCase().repeat(3));
    }catch (e){
        console.log(' Please pass a string next time!!!');
    }
}
yell(333);

const hen = {
 name: 'Helen',
 eggCount: Math.floor(Math.random() *9) + 1,
    layEgg(){
        this.eggCount++; console.log(`${this.name} has laid ${this.eggCount} eggs today!!`);
}};
hen.layEgg();
console.log(hen.name);

// ForEach //

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20] ;

numbers.forEach(function (num){
    if(num % 2 === 0){
    console.log(num);
    }
})

// Indstead of for of //
 
// for(let el of numbers){
//     if(el % 2 === 0){
//         console.log(el);
//     }
// }

// Map //
const numbers1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20] ;

const double = numbers1.map(function(num){
    return num * 2;
});
console.log(double);

const movies = [
    {
        title: 'The Godfather',
        score: 99,
    },
    {
        title: 'The Dark Knight',
        score: 98,
    },
    {
        title: 'The Godfather',
        score: 50,
    },
    {
        title: 'The Godfather',
        score: 100,
    },
    {
        title: 'The Godfather',
        score: 69, 
    }
];

movies.forEach(function(movie){
    console.log(movie)
}
)
movies.forEach(function(movie){
    console.log(` The title is ${movie.title}: Rate ${movie.score}`);
})

// Map //

const titles = movies.map(function(movie){ 
 return movie.title.toUpperCase();
});
console.log(titles);
const rate = movies.map(function(movie){
 return movie.score}
 );                             
console.log(rate);

// Arrow Function //

const newMovies  = movies.map(movie =>(
    `The title is ${movie.title}: Rates ${movie.score}`
))
console.log(newMovies);

// SetTimeOut //

console.log('Hello!!!')
setTimeout(()   => {
    console.log('Goodbye!!!')
},2000);
console.log('Program continues...');

// Set interval //
 const id = setInterval(() => {
    console.log('Hello!!!')
},2000);
// clearInterval(id);



