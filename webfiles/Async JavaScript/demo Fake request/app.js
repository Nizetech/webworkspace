///=== Promises---//
// A promise is an object that represents the eventual completion or failure of an asynchronous operation.

// const fakeRequestCallback = (url, success, failure) => {
//     const delay = Math.floor(Math.random() * 4500) + 500;

//     setTimeout(() => {
//         if (delay > 4000) {
//             failure('connection Timeout :(')
//         } else {
//             success(`Here is your fake data from ${url}`)
//         }
//     }, delay)
// }

const fakeRequestPromise = (url) => {
    return new Promise((resolve, reject) => {
        const delay = Math.floor(Math.random() * (4500)) + 500;
        setTimeout(() => {
            if (delay > 4000) {
                reject('Connection Timeout :(')
            } else {
                resolve(`Here is your fake data from ${url}`)
            }
        }, delay)
    })
}

// let res = fakeRequestPromise('https://www.google.com');

fakeRequestPromise('https://www.google.com');
let request = fakeRequestPromise('https://www.yahoo.com');

// request.then(() => {
//     console.log('Request is done');
// ------ just passing another promise to another promise
//     console.log('IT WORKED!!!')
//     request.then(() => {
//         console.log('Request is done(2)' + request);
//         console.log('IT WORKED!!!')
//     }).catch(() => {
//         console.log('Request is done(3)' + request);
//         console.log('IT DID NOT WORK!!!')
//     })
// }).catch(() => {
//     console.log('Promise Rejected')
//     console.log('IT FAILED!!!')
// })

///=== Promises---// SHORT VERSION

request.then((data) => {
    console.log('Request is done(from page 1)' + request);
    console.log(data);
    return fakeRequestPromise('https://www.google.com');
    // ------ just passing another promise to another promise
}).then((data) => {
    console.log('Request is done(from page 2)' + request);
    console.log(data);
    return fakeRequestPromise('https://www.yahoo.com');
}).then((data) => {
    console.log('Request is done(from page 3)' + request);
    console.log(data);
    return fakeRequestPromise('https://www.bing.com');
}).catch((err) => {
    console.log('Promise Rejected')
    console.log(err)
})




//// Nesting Callbcks //// its to hideous to write

// fakeRequestCallback('books.com',
//     function(response) {
//         console.log('IT WORKS!!')
//         console.log(response)
//             ///---- Nesting call backs

//         fakeRequestCallback('books/.com/page2',
//             function(response) {
//                 console.log('IT WORKS AGAIN!!')
//                 console.log(response)
//                     ///---- Nesting call backs
//                 fakeRequestCallback('books/.com/page3', function(response) {
//                         console.log('IT WORKS AGAIN!!')
//                         console.log(response)

//                     }, function(err) {
//                         console.log('ERROR (3rd Req)!!!', err)
//                     },
//                     ///---- Nesting call backs

//                     function(err) {
//                         console.log('ERROR (2rd Req)!!!', err)
//                     })
//             },
//             ///---- Nesting call backs

//             function(err) {
//                 console.log('ERROR!!!', err)
//             })
//     }, )