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

let  total1 = 0;
for(let price of prices){
  total1 += price;
}
console.log(`${total1 / 2}`);

// your can now use the reduce method //

// let total = prices.reduce((accumulative, curren value) => {
const total = prices.reduce((total, price) => {
return total + price                                                                              
})
console.log(total);
