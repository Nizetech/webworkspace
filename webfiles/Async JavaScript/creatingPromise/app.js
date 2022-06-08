/// ---- creating new promise ----

// new Promise((resolve, reject) => {
//     reject();
// })
let fakeRequest = (url) => {

    return new Promise((resolve, reject) => {
        const rand = Math.random();
        setTimeout(() => {
            if (rand < 0.7) {
                resolve('Your Fake Data Here');

            }
            reject('Request');
        }, 1000)
    })
}

fakeRequest('https://jsonplaceholder.typicode.com/users').then((data) => {
    console.log('Done with Request')
    console.log('data is', data)
}).catch((er) => {
    console.log(' Oh No Error', err)
})

const delayedColorChange = (color, delay) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            document.body.style.background = color;
            resolve();
        }, delay)
    })
}

delayedColorChange('red', 1000)
    .then(() => delayedColorChange('orange', 1000))
    .then(() => delayedColorChange('yellow', 1000))
    .then(() => delayedColorChange('green', 1000))
    .then(() => delayedColorChange('white', 1000))
    .then(() => delayedColorChange('blue', 1000))