// Arrow functon //

// const add = function(x, y){
//     return x + y;
// }
// console.log(add(4,5));

const add = (x,y) => {
    return x + y;
}
console.log(add(4,5));

const square = (x) => {
    return x * x;
}
console.log(square(5));

// const rollDie = () => {
//     return Math.floor(Math.random() * 6) + 1
// }
// console.log(rollDie());
const rollDie = () => (
  Math.floor(Math.random() * 6) + 1
)
console.log(rollDie());

// Filter Methods //

const numbers = [1,2,3,4,5,6,7,8,9,10];

const num = numbers.filter(n => {
  return n === 4;
});
console.log(num);

const newNum = numbers.filter(n => {
  return n < 4 ;
});
console.log(newNum);

// Some and  Every Methods //

const every = numbers.every(n => n >=5);
console.log(every);

const some= numbers.some(n => n >=5);
console.log(some);

const movies = [
  {title: 'The Dark Knight',
  score: 98,
  year: 2008,},
  {title: 'The Godfather',
  score: 99,
  year: 1972,},
  {title: 'The James Bond',
  score: 100,
  year: 1972,},
  {title: 'The Man of wonder',
  score: 32,
  year: 2000},
  {title: 'The wonder woman',
  score: 80,
  year: 1992,},
  {title: 'The superman',
  score: 100,
  year: 2022,},
]

const goodMovies = movies.filter(movies => {
  return movies.score >80
})
console.log(goodMovies);

const badMovies = movies.filter(m => movies.score >80).map(m => movies.title);
console.log(badMovies);

const goodTitles = movies.map(movies => {
  return movies.title
})
console.log(goodTitles);

// Reduce Method //

const highestRated = movies.reduce((bestMovies, currentMovie) => {
  if(currentMovie.score > bestMovies.score){
    return currentMovie;
    }
      return bestMovies;
      }
      )
      console.log(highestRated);

// some and Every Methods //
const recent = movies.some(m => m.year > 2000);
console.log(recent); 

// Assignment //

greet = movies.map(m =>{
  return `Hey ${m.title}`
})
console.log(greet);

movies.filter(m =>m.title < 10).map(m =>{
  return `Hey ${m.title}`
})
console.log(movies);

// Reduce //

const prices = [1.80,2.87,3.43,4.76,5.55,6.70,7.45,8.65,9.87,10.76];

// let  total1 = 0;
// for(let price of prices){
//   total1 += price;
// }
// console.log(`${total1 / 2}`);

// your can now use the reduce method //

// let total = prices.reduce((accumulative, curren value) => {
// const total = prices.reduce((total, price) => {
// return total + price                                                                              
// })
const total = prices.reduce((total, price) => 
   total + price                                                                              
  )
console.log(total);

const minprice = prices.reduce((min, price) => {
  if(price < min){
    return price;
  } else {
    return min;
  }
})
console.log(minprice);

const minprice2 = prices.reduce((min, price) => {
  if(price > min){
    return price;
  } else {
    return min;
  }
})
console.log(minprice2);

const evens = [1,2,3,4,5,6,7,8,9,10];
evens.reduce((sum, num) =>  sum + num, 100 );
console.log(evens);

// Default Parameters //

// const Die = function rollDie(sides){
//   if (sides === undefined){
//     sides = 6;
//   }
//   return Math.floor(Math.random() * sides) + 1;
// }
// console.log(Die(20)); 

const Die = function rollDie(sides = 6){
 
  return Math.floor(Math.random() * sides) + 1;
}
console.log(Die(20)); 

// const chat = function greet(msg, person){
//   console.log(`${msg} ${person}`);
// }
// chat('Hello', 'John');

const chat = function greet(person, msg = 'Hello'){
  console.log(`${msg} ${person}`);
}
chat('John');

// Using spread operator //     
// spread means to copy all data in an object or an array //                                                                                            m  m                                                                                                                                                                                                 

const nums = [1,2,3,4,5,6,7,8,9,10];
// console.log(Maths.max(...nums));

cats = ['cat1', 'cat2', 'cat3'];
dogs = ['dog1', 'dog2', 'dog3'];

 allPets = [...cats, ...dogs];
console.log(allPets);

const fline = {legs: 4, family: 'felideae'};
const mline = {legs: 4, family: 'mamaliae'};

  const pet = {...fline, ...mline};
  console.log(pet);

  const dataFromForm = {
email: 'fortunepraise97@gamil.com',
pasword: '123456789',
username: 'praise'
  }

  const newData = {...dataFromForm, id: 2343, isAdmin: true};
  console.log(newData);
  
// Rest PAramaeter //
// rest parameter is a special parameter that allows us to pass an arbitrary number of arguments to a function //

function raceResults(gold,silver, ...everyoneElse){
  console.log(`Gold goes to: ${gold}`);
  console.log(`Silver goes to: ${silver}`);
  console.log(`and thanks to Everyone Else: ${everyoneElse}`);
}
const result = raceResults('gift','chisom', 'james', 'joseph', 'josh', 'jimmy');
console.log(result);


// Destructuring an array //
// Destructuring allows us to extract data from arrays and objects //

const scores = [1,2,3,4,5,6,7,8,9,10];

// Normally we would have to write this //
const highScore = scores[0];
const lowScore = scores[scores.length - 1];

// Now we can write this //
const [gold, silver, bronze, ...others] = scores;
console.log(gold);
// console.log(silver);
// console.log(others);

/// Destructuring objects  used to single each value out of an object//

const user = {
  email: 'stacy@gmail.com',
  firstName: 'Stacy',
  lastName: 'Smith',
  born: '1987',
  city: 'New York',
  state: 'Nigeria',
}

const {email, firstName, lastName, born, city, state,  password = 'N/A' } = user; // this is the destructuring syntax  we can also add a key value that was not initialized//
// console.log(email);


/// this is how we can destructure an object and assign a new value to it  ///


const {email: userEmail, firstName: userFirstName, lastName: userLastName, born: userBorn, city: userCity, state: userState} = user;
// console.log(userEmail);


/// using destucturing to assign a default value to a key ///

/// Using destruction parameter //


// function fullName(user){
//   return `${user.firstName} ${user.lastName}`
// }
// function fullName(user){
//   const {firstName, lastName, city, state} = user;
//   return `${firstName} ${lastName} lives in ${city}, ${state}`;
// }
// console.log(fullName(user));

function fullName({firstName, lastName}){
  return `${firstName} ${lastName} lives in ${city}, ${state}`;
}
console.log(fullName(user));

// user.map(({firstName, lastName}) => {
//   return `${firstName} ${lastName} lives in ${city}, ${state}`;
// })
// console.log(user);


const movie = [
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
movie.filter((movies) => movies.score >=90);
console.log(movie);

/// Normally we do it this way ///


// movie.map(movies => {
//   return `${movies.title} (${movies.score}) is rated high`
// } );
// console.log(movie);

/// but now using destructuring methods ///

movie.map(({title,score}) => {
  return `${title} (${score}) is rated high`
} );
console.log(movie);






