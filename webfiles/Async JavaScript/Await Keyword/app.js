// const delayedColorChange = (color, delay) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             document.body.style.background = color;
//             resolve();
//         }, delay);
//     })
// }

// // Wrap the delay in a promise so we can await it
// // We only await function that returns a promise and  other aync functions
// async function rainbow() {
//     await delayedColorChange('orange', 1000)
//     await delayedColorChange('yellow', 1000)
//     await delayedColorChange('green', 1000)
//     await delayedColorChange('white', 1000)
//     await delayedColorChange('blue', 1000)
//     return 'All Done!'
// }
// //---- Here we call the function ----//
// // rainbow().then(() => console.log('All through!'))



// async function printRainbow() {
//     await rainbow();
//     console.log('end of rainbow');
// }
// //---- Here we call the function ----//
// printRainbow();

const fakeRequest = (url) => {
    return new Promise((resolve, reject) => {
        const delay = Math.floor(Math.random() * (4500)) + 500;
        setTimeout(() => {
            if (delay < 4000) {
                resolve(`Your Fake Data Here from ${url}`);

            } else {
                reject('Coonnection TimeOut')
            }
        }, delay)
    })
}

async function makeTwoRequests() {
    try {
        let data1 = await fakeRequest('https://jsonplaceholder.typicode.com/users');
        console.log('data1 is', data1);

        let data2 = await fakeRequest('https://jsonplaceholder.typicode.com/users2');
        console.log('data1 is', data2);

    } catch (e) {
        console.log('Oh No!! Error')
        console.log('Coaught an error', e)
    }
}
console.log(makeTwoRequests());