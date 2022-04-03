// console.log("IS WORKING")
// let random = math.random();
// if(random < 0.5){
//     console.log(
//         "YOUR NUMBER IS LESS THAN 0.5!!"
//     )
//     console.log(random);
// }

// if(random >= 0.5){
//     console.log(
//         "YOUR NUMBER IS GREATER THAN 0.5!!"
//     )
//     console.log(random);
// }
// const dayOfWeek = 'Friday';

// if(dayOfWeek === 'Monday'){
//     console.log('uuhh I Hate Mondays')
// } else if(dayOfWeek === 'Saturday'){
//     console.log('Yah i lovelu i ')
// }
// else if(dayOfWeek === 'Friday'){
//     console.log('Yah i love Fiday')
// }

// const age = 45;

// if(age < 5){
//     console.log('Youre a baby. You will get in for free!!')
// } else if(age < 10){
//     console.log('Youre a adult. You will pay $10')
// }
// else if(age < 65){
//     console.log('Youre a adult. You will pay $40')
// }

// const dayOfWeek = prompt('ENTER A DAY').toLowerCase();

// if(dayOfWeek === 'monday'){
//     console.log('uuhh I Hate Mondays')
// } else if(dayOfWeek === 'Saturday'){ 
//     console.log('Yah i lovelu i ')
// }
// else if(dayOfWeek === 'Friday'){
//     console.log('Yah i love Fiday')
// }else{
//     console.log('Invalid Request')
// }
// const gameBoard = [['x','0','x'],['0','x','0'],['0','0','x']];
// gameBoard[1][2]

// const password = prompt('Please enter a new password');


// if(password.length >= 6){
//     if( password.indexOf(" ") === -1){
//         console.log('Valid Password!');
//     }else{
//         console.log('password cannot contain spaces!')
//     }
// }else{
//     console.log('Password too short! Must be 6+ characters')
// }

const comments = [
    {username: 'Tammy', text: 'lololol', votes: 9},
    {username: 'FishBoi', text: 'glub glub', votes: 9343
    },
]
console.log(comments[1].text);   

const person = {firstname: 'Mickey', lastname: 'Mouse', age: 15};
console.log(person);  
console.log(person.firstname);
   console.log('Hello ' + person.firstname + ' ' + person.lastname + '!');
person['lastname']= 'Moe';
person['nickname']= 'Monkey';
person.nickname= 'Moo';
console.log(person.lastname);