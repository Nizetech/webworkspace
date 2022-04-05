// for(let num = 1; num <=10; num ++){
//     console.log(num);
// }

// const animal = [
//     'lion',
//     'goat',
//     'chicken',
//     'fowl',
//     'elephant',
//     'dog',
//     'yummy',
//     'gorilla',
//     'monkey',
//     'jaguar',
// ]

// for (let i = 0; i < animal.length; i++){
//     console.log( i, animal[i]);
// }


// for (let i = animal.length -1; i >= 0; i--){
//     console.log( i, animal[i]);
// }
// for(let i = 0; i <= 20; i++ ){
//     console.log(i)
// }
// for(let i = 0; i <= 20; i+= 2){
//     console.log(i)
// }
// for(let i = 2; i <= 20; i+= 2){
//     console.log(i)
// }
// for(let i = 100; i >=20; i--){
//     console.log(i)
// }
// for(let i = 100; i >=20; i-=20){
//     console.log(i)
// }
// for(let i = 10; i <=1000; i*=10){
//     console.log(i)
// }
// for(let i = 1; i<= 10; 1++){
//     console.log(`i is: ${i}`)
//     for(let j = 1; j < 4; j++){
//         console.log(`   j is: ${j}`)
//     }
//     }<
// const seatingChart = [
//     ['kristen', 'Eric', 'NAanata'],
//     ['john', 'Erckson', 'doe'],
//     ['Kelly', 'Daniel', 'Fortune']
// ]
// for (let i = 0; i <  seatingChart.length; i++){
//     const row = seatingChart[i];
//     console.log(`Row #${i + 1}`)
//     for(let j = 0; j < row.length; j++){
//         console.log(row[j])
//     }

// }

/// WHILE LOOP ///

// const SECRETES = 'BANANA'; 

// let guess = prompt('What is my best fruit?').toUpperCase();
// while (guess !== SECRETES){
//     guess = prompt('What is my best fruit?').toUpperCase();
// }
// console.log('You got it!');

// BREAKE KEYWORD //

// let input = prompt('Hey, say something')
// while(true){
//     input =prompt(input);
//     if(input.toLowerCase() === 'stop copying me') break;
// } console.log('okay you win!!')


   // Game //

// let maximum = parseInt (prompt('Enter the maximum number!!'));
// while(!maximum){
//     maximum = parseInt (prompt('Enter the maximum number!!'));
// }
// const targetNum = Math.floor(Math.random() * maximum) + 1;
// let guess = parseInt(prompt('Enter your first guess'));
// let attempts = 1;

// while(guess !== targetNum){
//     if(guess == 'q') break;
// if(parseInt(guess) !== targetNum){
//         guess = parseInt(prompt('Too high. Guess again'));
//     }else{
//         guess = parseInt(prompt('Too low. Guess again'));
//     }
//     attempts++;
// }

// if(guess == 'q'){
//     console.log('Ok, You Quit');
// }else{
//     console.log(`You got it in ${attempts} attempts`);
// }

// For...Of Loop //

// for(let char of 'hellon world'){
//     console.log(char);
// }

// const seatingChart = [
//     ['kristen', 'Eric', 'NAanata'],
//     ['john', 'Erckson', 'doe'],
//     ['Kelly', 'Daniel', 'Fortune']
// ]

// for(let row of seatingChart){
//     for(let name of row){
//     console.log(name);
//     }
// }

// For..in Loop //

const testScores = {
    joe: 80,
    marry: 20,
    amaka: 89,
    joseph: 202,
    jessica: 100,
    james: 0,
    jess: 100,
    jessica: 100,
    jess: 100,
}
 for(let student in testScores){  
     console.log(`${student} scored ${testScores[student]}`);
 }
for(let score of Object.keys(testScores))
console.log(score);
for(let score of Object.entries (testScores))
console.log(score);
for(let score of Object.values(testScores))
console.log(score);
let total = 0;
let scores = Object.values(testScores);
for(let score of scores){
    total += score;
}
console.log(total / scores.length);



